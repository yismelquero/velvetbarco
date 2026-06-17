import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, eventType, eventDate, guestCount, services, ingredients, message } = body

    if (!fullName || !email || !eventDate) {
      return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 })
    }

    if (!guestCount || Number(guestCount) < 40) {
      return NextResponse.json({ error: 'El mínimo de invitados es 40.' }, { status: 400 })
    }

    if (!Array.isArray(services) || services.length === 0) {
      return NextResponse.json({ error: 'Selecciona al menos un servicio.' }, { status: 400 })
    }

    const ingredientRows = Array.isArray(services) && services.length > 0
      ? services.map((service: string) => {
          const selected: string[] = (ingredients?.[service] ?? [])
          const ingredientList = selected.length > 0
            ? selected.map((item: string) => `<span style="display:inline-block; background:#f5f0e8; border:1px solid #D8D0C1; color:#555; border-radius:3px; padding:2px 7px; margin:2px 3px 2px 0; font-size:12px;">${item}</span>`).join('')
            : '<span style="color:#aaa; font-size:12px;">No especificados</span>'
          return `
            <tr style="background: #fff;">
              <td style="padding: 10px 14px; font-weight: bold; color: #1B4332; border-bottom: 1px solid #eee; vertical-align: top; width: 40%;">${service}</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${ingredientList}</td>
            </tr>`
        }).join('')
      : ''

    const { data, error } = await resend.emails.send({
      from: 'Velvet Bar Co <noreply@velvetbarco.com>',
      to: ['info@velvetbarco.com'],
      replyTo: email,
      subject: `Nueva solicitud de cotización — ${fullName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 620px; margin: 0 auto; background: #f9f8f3; padding: 32px; border-radius: 8px;">
          <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #1B4332; font-size: 24px; margin: 0;">Nueva Solicitud de Cotización</h1>
            <p style="color: #888; font-size: 13px; margin: 4px 0 0;">Velvet Bar Co — Formulario de Contacto</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
            <tr style="background: #fff;">
              <td style="padding: 10px 14px; font-weight: bold; color: #1B4332; width: 40%; border-bottom: 1px solid #eee;">Nombre</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${fullName}</td>
            </tr>
            <tr style="background: #fafaf7;">
              <td style="padding: 10px 14px; font-weight: bold; color: #1B4332; border-bottom: 1px solid #eee;">Correo</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #C9A84C;">${email}</a></td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 10px 14px; font-weight: bold; color: #1B4332; border-bottom: 1px solid #eee;">Teléfono</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${phone || '—'}</td>
            </tr>
            <tr style="background: #fafaf7;">
              <td style="padding: 10px 14px; font-weight: bold; color: #1B4332; border-bottom: 1px solid #eee;">Tipo de Evento</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${eventType || '—'}</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 10px 14px; font-weight: bold; color: #1B4332; border-bottom: 1px solid #eee;">Fecha del Evento</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${eventDate}</td>
            </tr>
            <tr style="background: #fafaf7;">
              <td style="padding: 10px 14px; font-weight: bold; color: #1B4332; border-bottom: 1px solid #eee;">Número de Invitados</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${guestCount}</td>
            </tr>
          </table>

          <div style="margin: 20px 0 8px;">
            <p style="font-size: 13px; font-weight: bold; color: #1B4332; letter-spacing: 1px; text-transform: uppercase; margin: 0 0 10px;">Servicios e Ingredientes Seleccionados</p>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #333;">
              ${ingredientRows}
            </table>
          </div>

          ${message ? `
          <div style="margin-top: 16px;">
            <p style="font-size: 13px; font-weight: bold; color: #1B4332; letter-spacing: 1px; text-transform: uppercase; margin: 0 0 8px;">Mensaje</p>
            <div style="background: #fff; border: 1px solid #eee; border-radius: 4px; padding: 12px 16px; font-size: 14px; color: #444; line-height: 1.6;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>` : ''}

          <div style="margin-top: 28px; padding: 14px 18px; background: #1B4332; border-radius: 6px; text-align: center;">
            <p style="color: #C9A84C; font-size: 12px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">Crafted With Care. Delivered With Excellence.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Error al enviar el correo.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Unexpected error:', err)
    return NextResponse.json({ error: 'Error inesperado en el servidor.' }, { status: 500 })
  }
}

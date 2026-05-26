import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, email, phone, eventType, eventDate, guestCount, services, message } = body

    // Validación básica
    if (!fullName || !email || !eventDate) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Velvet Bar & Co <noreply@velvetbarco.com>',
      to: ['info@velvetbarco.com'],
      replyTo: email,
      subject: `Nueva solicitud de cotización — ${fullName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f9f8f3; padding: 32px; border-radius: 8px;">
          <div style="border-bottom: 2px solid #C9A84C; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="color: #1B4332; font-size: 24px; margin: 0;">Nueva Solicitud de Cotización</h1>
            <p style="color: #888; font-size: 13px; margin: 4px 0 0;">Velvet Bar & Co — Formulario de Contacto</p>
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
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">${guestCount || '—'}</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 10px 14px; font-weight: bold; color: #1B4332; border-bottom: 1px solid #eee; vertical-align: top;">Servicio(s) Deseado(s)</td>
              <td style="padding: 10px 14px; border-bottom: 1px solid #eee;">
                ${Array.isArray(services) && services.length > 0
                  ? services.map((s: string) => `<span style="display:inline-block; background:#C9A84C20; border:1px solid #C9A84C; color:#1B4332; border-radius:3px; padding:2px 8px; margin:2px 4px 2px 0; font-size:13px;">${s}</span>`).join('')
                  : '—'}
              </td>
            </tr>
            ${message ? `
            <tr style="background: #fafaf7;">
              <td style="padding: 10px 14px; font-weight: bold; color: #1B4332; vertical-align: top;">Mensaje</td>
              <td style="padding: 10px 14px;">${message.replace(/\n/g, '<br/>')}</td>
            </tr>` : ''}
          </table>

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

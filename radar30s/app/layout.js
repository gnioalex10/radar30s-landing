import './globals.css'

export const metadata = {
  title: 'Radar30s — El mercado en 30 segundos',
  description: 'Separamos hechos de rumores y resumimos indicadores técnicos clave.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
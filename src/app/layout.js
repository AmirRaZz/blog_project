import "../../styles/globals.css";

export const metadata = {
  title: ' Next App Blog',
  description: 'This is blog app',
}

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      <body className="">{children}</body>
    </html>
  )
}

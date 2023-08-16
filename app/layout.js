import './globals.css';


export const metadata = {
  title: "Ragab Eid - Personal Portfolio",
  description: "Ragab Eid - Personal Portfolio. Show Ragab's Resume, Skills, Projects and mailing him",
  icon: "/",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bitter.variable}`}>
        <div className='relative'>
          {children}
        </div>
      </body>
    </html>
  )
}

import Footer from '@/components/Footer';
import './globals.css';


export const metadata = {
  title: "Ragab Fitness - The Clup of body !",
  description: "Welcome to Ragab fitness - The clup of body building !",
  icon: "/",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='min-h-screen'>
          {
            children
          }
        </div>
        <Footer />
      </body>
    </html>
  )
}

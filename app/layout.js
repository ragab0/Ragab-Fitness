import Footer from '@/components/Footer';
import './globals.css';
import Card from '@/components/Card';


export const metadata = {
  title: "Ramy-Fitness",
  description: "Welcome to Ramy-Fitness - The clup of body building !",
  icon: "/",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Card />
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

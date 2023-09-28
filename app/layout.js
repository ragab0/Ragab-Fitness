import Footer from '@/components/Footer';
import Card from '@/components/Card';
import './globals.css';


export const metadata = {
  title: "Ramy-Fitness",
  description: "Welcome in Ramy-Fitness, The clup of body building !",
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

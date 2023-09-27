import Image from 'next/image';
import imgs from '@/assets/imgs';

const { logo1 } = imgs;


export default function Footer() {
  return (
    <footer className='container bg-mainColor70 py-16 text-center flex flex-col items-center gap-10'>
      <Image alt="logo" src={logo1} width={200} />
      <div className='text-3xl'>
        <p className=' inline-block'>Made with ❤️ by</p>
        <h4 className='inline-block indent-2'>Ragab</h4>
      </div>
    </footer>
  )
}

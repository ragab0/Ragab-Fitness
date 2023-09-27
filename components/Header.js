import Image from "next/image";
import Logo from "@/assets/imgs/Logo.png";
import Link from "next/link";
import { links } from "@/assets/data/data";


export default function Header() {
  return (
    <header className="flex items-end my-8">
      <Link href="/">
        <Image alt='logo' src={Logo} width={75} />
      </Link>
      <nav className='w-full'>
        <ul className='flex items-end justify-center gap-4 lg:gap-8 capitalize'>
            <li>
              <Link href={links[0].to} className='p-2 block lg:text-2xl border-b-4 border-mainColor'>{links[0].name}</Link>
            </li>
            <li>
              <a href={links[1].to} className='p-2 block lg:text-2xl'>{links[1].name}</a>
            </li>
        </ul>
    </nav>
    </header>
  )
}
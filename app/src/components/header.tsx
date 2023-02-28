import Image from 'next/image';
import OutlineButton from "./Button";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import { useSession } from './SessionProvider';
import { ToastAction, useToasts } from './ToastProvider';

const NavLink = ({ index, href, name, onClick = () => { } }) => {
  return (
    <Link href={href} passHref>
      <a className='mb-2 md:mx-4 md:mb-0 text-white hover:text-pink text-md transition-all' onClick={onClick}><span className='text-pink'>#{index}. </span>{name}</a>
    </Link>
  );
}

const HamburgerButton = ({ open, onClick = () => { } }) => {
  return (
    <button className='relative md:hidden' onClick={onClick}>
      <div className={`w-8 h-[2px] bg-white ${open ? 'translate-y-[10px] rotate-45' : ''} transition-all`}></div>
      <div className={`my-2 w-8 h-[2px] ${open ? 'bg-transparent' : 'bg-white'} transition-all`}></div>
      <div className={`w-8 h-[2px] bg-white ${open ? ' -translate-y-[10px] -rotate-45' : ''} transition-all`}></div>
    </button>
  );
}

const CloseButton = ({ open, className = '', onClick = () => { } }) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      <div className={`w-2 h-[2px] bg-white ${open ? 'translate-y-[10px] rotate-45' : ''} transition-all`}></div>
      <div className={`w-2 h-[2px] my-2 ${open ? 'bg-transparent' : 'bg-white'} transition-all`}></div>
      <div className={`w-2 h-[2px] bg-white ${open ? ' -translate-y-[10px] -rotate-45' : ''} transition-all`}></div>
    </button>
  );
}

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  
  useEffect(() => {
    const atTopCallback = () => {
      if (window.scrollY >= 40) setAtTop(false);
      else setAtTop(true)
    }

    window.addEventListener('scroll', atTopCallback)
    return () => window.removeEventListener('scroll', atTopCallback)
  })

  return (
    <nav className={`relative h-ful bg-white ${atTop ? 'bg-opacity-0' : 'bg-opacity-20'} flex items-center justify-between z-10 py-2 px-4 sm:px-12 lg:px-24 transition-all ease-in-out duration-500`}>
      <div className='flex relative z-20'>
        <HamburgerButton open={isOpen} onClick={() => setOpen(!isOpen)} />
        <Link href="/" passHref>
          <a className="relative ml-4 w-6 md:w-12 aspect-square opacity-90 hover:opacity-100 transition-all ease-in-out">
            <Image src="/images/logo.png" alt="Logo" layout="fill" />
          </a>
        </Link>
      </div>
      <div className={`block w-full md:w-fit h-screen md:h-full z-10 absolute md:relative top-0 ${isOpen ? 'left-0' : 'left-[-200%] md:left-0'} px-4 sm:px-12 md:px-0 flex flex-col md:flex-row items-start md:items-center justify-center bg-navy bg-opacity-90 md:bg-transparent transition-all`}>
        <NavLink index={1} href="/about" name="About" />
        <NavLink index={3} href="/resources" name="Resources" />
        <NavLink index={4} href="/calendar" name="Calendar" />
        <Link href="mailto:vmtofficers@gmail.com" passHref>
          <a className='mt-4 md:ml-4 md:mt-0'>
            <OutlineButton name="Contact" />
          </a>
        </Link>

      </div>
    </nav>
  );
}


const Header = () => {
  return (
    <header className='fixed z-50 w-full h-16 sm:h-24'>
      <NavBar />
    </header>
  );
}

export default Header
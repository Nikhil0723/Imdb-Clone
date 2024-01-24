import Link from 'next/link';
import MenuItem from './MenuItem'
import { AiFillHome } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex items-center justify-between mx-2 max-w-6xl sm:mx-auto py-6'>
      <div className="flex ">
        <MenuItem title="Home" address='/' Icon={AiFillHome}/>
        <MenuItem title="About" address='/about' Icon={AiFillInfoCircle}/>
      </div>
      <div className=" flex items-center space-x-5">
        <DarkModeSwitch/>
        <Link href="/">
        <h2 className='text-2xl'>
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDB</span>
            <span className='text-xl hidden sm:inline'>Clone</span>
        </h2>
        </Link>
      </div>
    </div>
  )
}

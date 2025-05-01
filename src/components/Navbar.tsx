import { BellDot, LogIn, MapPin, User } from 'lucide-react'
import { Logo } from '../assets/images'
import ToggleMode from './ToggleMode'

const Navbar = () => {
	return (
		<nav className='py-5 border-b-[0.5px] border-gray-200 sticky top-0 bg- z-10 bg-gray-100 dark:bg-black/90 backdrop-blur-md'>
			<div className='container w-10/12 mx-auto flex justify-between items-center'>
				<div className='flex items-center gap-1 text-2xl text-black dark:text-white'>
					<img className='' src={Logo} alt='logo' />
					StreetFootball
				</div>

				<ul className='flex items-center gap-5 '>
					<li className='text-[16px] font-semibold text-gray-500 hover:text-blue-400 cursor-pointer dark:text-white'>
						Football
					</li>
					<li className='text-[16px] font-semibold text-gray-500 hover:text-blue-400 cursor-pointer dark:text-white'>
						Tennis
					</li>
					<li className='text-[16px] font-semibold text-gray-500 hover:text-blue-400 cursor-pointer dark:text-white'>
						Valleyball
					</li>
					<li className='text-[16px] font-semibold text-gray-500 hover:text-blue-400 cursor-pointer dark:text-white'>
						Basketball
					</li>

					<li className='text-[16px] font-semibold text-gray-500 hover:text-blue-400 cursor-pointer dark:text-white'>
						Table Tennis
					</li>
				</ul>
				<div className='flex items-center gap-4'>
					<ToggleMode />
					<MapPin className='dark:text-white' />
					<BellDot className='dark:text-white' />
					<LogIn className='dark:text-white' />
					<User className='dark:text-white' />
				</div>
			</div>
		</nav>
	)
}

export default Navbar

//

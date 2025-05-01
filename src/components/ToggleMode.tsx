import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ToggleMode = () => {
	const [theme, setTheme] = useState('light')

	useEffect(() => {
		if (
			localStorage.getItem('theme') === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
			setTheme('dark')
		} else {
			document.documentElement.classList.remove('dark')
			setTheme('light')
		}
	}, [])

	const toggleTheme = () => {
		if (theme === 'dark') {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
			setTheme('light')
		} else {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
			setTheme('dark')
		}
	}

	return (
		<button
			onClick={toggleTheme}
			className=' lg:px-2 py-2 md:px-[6px] md:py-[6px] sm:px-1 sm:py-1 rounded-full xs:p-[2px]'
		>
			{theme === 'dark' ? (
				<Sun className='text-yellow-500 lg:text-[30px] md:text-[30px] sm:text-[28px] xs:text-[25px] ' />
			) : (
				<Moon className='text-black lg:text-[30px] md:text-[30px] sm:text-[28px] xs:text-[25px] ' />
			)}
		</button>
	)
}

export default ToggleMode

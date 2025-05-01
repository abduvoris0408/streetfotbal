import { SatelliteDish, Shield, Volleyball } from 'lucide-react'

const Hero = () => {
	return (
		<div className='bg-gray-100 dark:bg-black/90 border-t-[0.5px] border-gray-200'>
			<div className='container w-10/12 mx-auto py-10 flex flex-col gap-5'>
				<div className='flex items-center justify-center  gap-2'>
					<div className='px-4 py-3 gap-1 flex dark:text-white bg-blue-200  rounded-xl'>
						<Volleyball />
						Football
					</div>
					<div className='px-4 py-3 gap-1 flex dark:text-white hover:bg-blue-200  rounded-xl'>
						<SatelliteDish />
						Tennis
					</div>
					<div className='px-4 py-3 gap-1 flex dark:text-white hover:bg-blue-200  rounded-xl'>
						<Shield />
						Badminton
					</div>
				</div>
				<div>
					<img src='/src/assets/images/Search.png' alt='' />
				</div>
				<div className='flex items-center justify-between'>
					<div className='flex px-3 py-2 dark:text-white rounded-xl items-center border border-gray-300'>
						<select name='select' id='1'>
							<option value=''>
								Sort by: Best reviewed and lowest price
							</option>
						</select>
					</div>
					<div className='flex gap-2'>
						<button className='dark:text-white px-3 py-2 border border-gray-300 rounded-xl'>
							Xaritada ko'rish
						</button>
						<button className='dark:text-white px-3 py-2 border border-gray-300 rounded-xl'>
							Qoshish
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero

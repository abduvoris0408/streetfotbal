const Navbarbottom = () => {
	return (
		<div className='dark:bg-black/90 py-3'>
			<div className='container w-10/12 mx-auto py-2 '>
				<ul className='flex items-center gap-5 '>
					<li className='text-[16px]  text-gray-600 hover:text-blue-400 cursor-pointer dark:text-white'>
						Asosiy sahifa
					</li>
					<li className='text-[16px]  text-gray-600 hover:text-blue-400 cursor-pointer dark:text-white'>
						Arizalarim
					</li>
					<li className='text-[16px]  text-gray-600 hover:text-blue-400 cursor-pointer dark:text-white'>
						To'lovlarim
					</li>
					<li className='text-[16px]  text-gray-600 hover:text-blue-400 cursor-pointer dark:text-white'>
						Profil
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbarbottom

import { useState } from 'react'

const Footer = () => {
	const [email, setEmail] = useState('')

	const handleSubmit = () => {
		console.log('Email submitted:', email)
		setEmail('')
	}

	return (
		<div className='bg-gray-100 dark:bg-black/90'>
			<div className='container w-10/12 mx-auto '>
				<div className='relative w-full text-white'>
					{/* Background image */}
					<div
						className='absolute inset-0 z-0 rounded-2xl'
						style={{
							backgroundImage:
								"url('https://bi.im-g.pl/im/90/d2/14/z21833104IH,Zakonczono-modernizacje-stadionu-Khalifa-Internati.jpg')",
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					></div>
					<div className='absolute inset-0 bg-black/70 z-10 rounded-2xl'></div>

					{/* Content */}
					<div className='relative z-20 py-12 px-6 md:px-16'>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
							{/* Discover */}
							<div>
								<h3 className='text-lg font-semibold mb-4'>
									Discover
								</h3>
								<ul className='space-y-2 text-sm'>
									<li>
										<a
											href='#'
											className='hover:text-gray-300'
										>
											Home
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-gray-300'
										>
											Terms
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-gray-300'
										>
											Talent & culture
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-gray-300'
										>
											Destination
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-gray-300'
										>
											Sitemap
										</a>
									</li>
								</ul>
							</div>

							{/* Contact */}
							<div>
								<h3 className='text-lg font-semibold mb-4'>
									Contact
								</h3>
								<ul className='space-y-2 text-sm'>
									<li>
										<a
											href='#'
											className='hover:text-gray-300'
										>
											Refund policy
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-gray-300'
										>
											EMI Policy
										</a>
									</li>
									<li>
										<a
											href='#'
											className='hover:text-gray-300'
										>
											Privacy Policy
										</a>
									</li>
								</ul>
								<div className='mt-4 space-y-2 text-sm'>
									<div className='flex items-center space-x-2'>
										<span>📧</span>
										<a
											href='mailto:info@phoenixtravels.com'
											className='hover:text-gray-300'
										>
											info@phoenixtravels.com
										</a>
									</div>
									<div className='flex items-center space-x-2'>
										<span>📞</span>
										<a
											href='tel:+13134048290'
											className='hover:text-gray-300'
										>
											+1 313 404 8290
										</a>
									</div>
								</div>
							</div>

							{/* Newsletter */}
							<div>
								<h3 className='text-xl font-semibold mb-3'>
									Enjoy your trip to the fullest
								</h3>
								<p className='text-sm mb-4'>
									Sign up and get notified about best deals
									immediately
								</p>
								<div className='flex'>
									<input
										type='email'
										value={email}
										onChange={e => setEmail(e.target.value)}
										placeholder='Your email address'
										className='w-full p-2 rounded-l text-black focus:outline-none border bg-white'
									/>
									<button
										onClick={handleSubmit}
										className='bg-green-500 px-4 py-2 rounded-r hover:bg-green-600 transition'
									>
										Sign up
									</button>
								</div>
							</div>
						</div>

						{/* Footer Bottom */}
						<div className='mt-12 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-sm text-gray-400'>
							<div>
								Thank you for creating with Phoenix React | 2024
								©{' '}
								<a
									href='https://themewagon.com'
									className='hover:text-gray-300'
								>
									Themewagon
								</a>
							</div>
							<div>v 1.6.0</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer

import { Check, Edit, MapPin, Plus, Trash2, X } from 'lucide-react'
import React, { useState } from 'react'

// Type definition
type Stadium = {
	id: number
	name: string
	location: string
	price: number
	image: string
	indoor: boolean
}

// Default image
const defaultImage =
	'https://asset.kompas.com/crops/8NztBClbysFh3aT5oaF3uMySc94=/0x0:5377x3585/750x500/data/photo/2024/06/27/667cf2100884d.jpg'

// Initial data
const initialStadiums: Stadium[] = [
	{
		id: 1,
		name: 'Football Stadium',
		location: 'Tashkent, Chilanzar',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 2,
		name: 'Football Stadium',
		location: 'Samarkand, Center',
		price: 200000,
		image: defaultImage,
		indoor: true,
	},
	{
		id: 3,
		name: 'Football Stadium',
		location: 'Tashkent, Chilanzar',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 4,
		name: 'Football Stadium',
		location: 'Bukhara',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 5,
		name: 'Football Stadium',
		location: 'Tashkent, Chilanzar',
		price: 180000,
		image: defaultImage,
		indoor: true,
	},
	{
		id: 6,
		name: 'Football Stadium',
		location: 'Navoiy',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 10,
		name: 'Football Stadium',
		location: 'Bukhara',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
	{
		id: 12,
		name: 'Football Stadium',
		location: 'Bukhara',
		price: 200000,
		image: defaultImage,
		indoor: false,
	},
]

export default function StadiumManagement() {
	const [stadiums, setStadiums] = useState<Stadium[]>(initialStadiums)
	const [isAdding, setIsAdding] = useState(false)
	const [isEditing, setIsEditing] = useState(false)
	const [currentStadium, setCurrentStadium] = useState<Stadium | null>(null)

	const [formData, setFormData] = useState<Omit<Stadium, 'id'>>({
		name: '',
		location: '',
		price: 0,
		image: defaultImage,
		indoor: false,
	})

	const handleAddClick = () => {
		setIsAdding(true)
		setFormData({
			name: '',
			location: '',
			price: 200000,
			image: defaultImage,
			indoor: false,
		})
	}

	const handleEditClick = (stadium: Stadium) => {
		setIsEditing(true)
		setCurrentStadium(stadium)
		setFormData({
			name: stadium.name,
			location: stadium.location,
			price: stadium.price,
			image: stadium.image,
			indoor: stadium.indoor,
		})
	}

	const handleDeleteClick = (id: number) => {
		if (window.confirm('Are you sure you want to delete this stadium?')) {
			setStadiums(stadiums.filter(stadium => stadium.id !== id))
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		})
	}

	const handleSubmit = () => {
		if (isAdding) {
			const newId =
				(stadiums.length > 0
					? Math.max(...stadiums.map(s => s.id))
					: 0) + 1
			const newStadium: Stadium = {
				id: newId,
				...formData,
			}
			setStadiums([...stadiums, newStadium])
			setIsAdding(false)
		} else if (isEditing && currentStadium) {
			setStadiums(
				stadiums.map(stadium =>
					stadium.id === currentStadium.id
						? { ...stadium, ...formData }
						: stadium
				)
			)
			setIsEditing(false)
			setCurrentStadium(null)
		}

		setFormData({
			name: '',
			location: '',
			price: 0,
			image: defaultImage,
			indoor: false,
		})
	}

	const handleCancel = () => {
		setIsAdding(false)
		setIsEditing(false)
		setCurrentStadium(null)
		setFormData({
			name: '',
			location: '',
			price: 0,
			image: defaultImage,
			indoor: false,
		})
	}

	return (
		<div className='bg-gray-100 dark:bg-black/90'>
			<div className='container mx-auto w-10/12 py-5 px-2'>
				<div className='flex justify-between items-center mb-6'>
					<h1 className='text-2xl font-bold dark:text-white text-gray-800'>
						Stadium Management
					</h1>
					<button
						onClick={handleAddClick}
						className='bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-colors'
					>
						<Plus size={18} />
						Add Stadium
					</button>
				</div>

				{(isAdding || isEditing) && (
					<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
						<div className='bg-white rounded-lg p-6 w-full max-w-md'>
							<div className='flex justify-between items-center mb-4'>
								<h2 className='text-xl font-semibold'>
									{isAdding
										? 'Add New Stadium'
										: 'Edit Stadium'}
								</h2>
								<button
									onClick={handleCancel}
									className='text-gray-500 hover:text-gray-700'
								>
									<X size={24} />
								</button>
							</div>

							<div>
								<div className='mb-4'>
									<label className='block text-gray-700 mb-2'>
										Stadium Name
									</label>
									<input
										type='text'
										name='name'
										value={formData.name}
										onChange={handleChange}
										className='w-full p-2 border border-gray-300 rounded'
									/>
								</div>

								<div className='mb-4'>
									<label className='block text-gray-700 mb-2'>
										Location
									</label>
									<input
										type='text'
										name='location'
										value={formData.location}
										onChange={handleChange}
										className='w-full p-2 border border-gray-300 rounded'
									/>
								</div>

								<div className='mb-4'>
									<label className='block text-gray-700 mb-2'>
										Price (so'm/night)
									</label>
									<input
										type='number'
										name='price'
										value={formData.price}
										onChange={handleChange}
										className='w-full p-2 border border-gray-300 rounded'
									/>
								</div>

								<div className='mb-4'>
									<label className='flex items-center text-gray-700'>
										<input
											type='checkbox'
											name='indoor'
											checked={formData.indoor}
											onChange={handleChange}
											className='mr-2'
										/>
										Indoor Stadium
									</label>
								</div>

								<div className='flex justify-end gap-2 mt-6'>
									<button
										type='button'
										onClick={handleCancel}
										className='px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100'
									>
										Cancel
									</button>
									<button
										type='button'
										onClick={handleSubmit}
										className='px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2'
									>
										<Check size={18} />
										{isAdding
											? 'Add Stadium'
											: 'Save Changes'}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{stadiums.map(stadium => (
						<div
							key={stadium.id}
							className='bg-white rounded-lg overflow-hidden shadow-md relative group'
						>
							<div className='relative h-48'>
								<img
									src={stadium.image}
									alt={stadium.name}
									className='w-full h-full object-cover'
								/>
								<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
									<h3 className='text-white font-semibold text-lg'>
										{stadium.name}
									</h3>
									<div className='flex items-center text-white/80 text-sm'>
										<MapPin size={14} className='mr-1' />
										<span>{stadium.location}</span>
									</div>
								</div>
							</div>

							<div className='p-4'>
								<div className='flex items-center justify-between'>
									<span
										className={`text-xs font-medium px-2 py-1 rounded ${
											stadium.indoor
												? 'bg-blue-100 text-blue-800'
												: 'bg-green-100 text-green-800'
										}`}
									>
										{stadium.indoor ? 'Indoor' : 'Outdoor'}
									</span>
									<div className='text-sm font-medium text-gray-900'>
										{stadium.price.toLocaleString()} so'm
										<span className='text-gray-500 text-xs'>
											/night
										</span>
									</div>
								</div>
							</div>

							<div className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1'>
								<button
									onClick={() => handleEditClick(stadium)}
									className='p-2 bg-white rounded-full shadow-md hover:bg-gray-100'
								>
									<Edit size={16} className='text-blue-600' />
								</button>
								<button
									onClick={() =>
										handleDeleteClick(stadium.id)
									}
									className='p-2 bg-white rounded-full shadow-md hover:bg-gray-100'
								>
									<Trash2
										size={16}
										className='text-red-600'
									/>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

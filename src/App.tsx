import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './router/router'

const App = () => {
	return (
		<div className='bg-bgprimary bg-hero dark:bg-white'>
			<Navbar />
			<Router />
			<Footer />
		</div>
	)
}

export default App

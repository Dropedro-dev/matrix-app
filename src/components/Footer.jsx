import React from 'react'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <footer className="text-white bg-transparent bg-opacity-20 backdrop-filter backdrop-blur-md">
      <hr className="my-8 border-gray-500" />
      <div className="container mx-auto py-8 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className='text-2xl font-bold mb-4 text-green-500'>Matrix App</h2>
            <p className="text-gray-400">This is some information about the Matrix App...!</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Useful Links</h3>
            <ul className="text-gray-400">
              <li>
                <Link
                  to='home'
                  className='hover:text-green-500 cursor-pointer mb-2'
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='features'
                  className='hover:text-green-500 cursor-pointer mb-2'
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to='testemonials'
                  className='hover:text-green-500 cursor-pointer mb-2'
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Testemonials
                </Link>
              </li>
              <li>
                <Link
                  to='pricing'
                  className='hover:text-green-500 cursor-pointer mb-2'
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold mb-4 text-green-500'>Contact Us</h3>
            <p className="text-gray-400 mb-4">Adress: 1234 Main Street, City, Country</p>
            <p className="text-gray-400 mb-4">Email: info@mail.com</p>
            <p className="text-gray-400 mb-4">Phone: +55 123456789</p>
          </div>
        </div>
        <hr className="my-8 border-gray-500" />
        <p className="text-center text-gray-800">
          &copy; {new Date().getFullYear()} Matrix App. All Rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

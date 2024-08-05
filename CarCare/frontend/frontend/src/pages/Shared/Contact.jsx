import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/car-logo.png'; // Import your logo
import Bg from '../../assets/img/bg-building-1.webp'; // Import the background image
import { Button } from '@/components/ui/button'; // If you want to use these components
import { Input } from '@/components/ui/input'; // If you want to use these components
import { Label } from '@/components/ui/label'; // If you want to use these components
import { Link } from 'react-router-dom'; // Import Link for navigation
import InlineDatePicker from '@/components/Indlinedate'; // Import the InlineDatePicker component
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';

const bgImage = {
  backgroundImage: `url(${Bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Contact = () => {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setClicked(true);
    if (email === 'sample@gmail.com' && password === '1234') {
      navigate('/admin/user');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <main style={bgImage} >
        <Navbar/>
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image and Gradient Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-primaryDark/70"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex w-full max-w-4xl">
        <div className="hidden lg:block lg:w-3/5 bg-cover rounded-xl overflow-hidden">
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className={`text-2xl font-bold ${clicked ? 'text-gray-300' : 'text-white'} sm:text-3xl`}>
                Welcome to Car Care
              </h2>
              <p className={`max-w-xl mt-3 ${clicked ? 'text-gray-400' : 'text-gray-300'}`}>
              Book now for the best services for your vehicle!
              </p>
              <InlineDatePicker /> {/* Inline DatePicker */}
            </div>
          </div>
        </div>

        <div className="flex items-center w-full lg:w-1/3 bg-white px-6 py-8 rounded-lg shadow-lg">
          <div className="w-full">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img className="w-auto h-40" src={Logo} alt="Logo" />
              </div>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <Label htmlFor="email">Name</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="John"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <Label htmlFor="password">Password</Label>
                  </div>

                  <Input
                    type=""
                    name="password"
                    id="password"
                    placeholder="91+"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mt-6">
                  <Button
                    type="button"
                    className="w-full bg-primary text-white hover:bg-primaryDark focus:outline-none focus:bg-primaryDark focus:ring focus:ring-primary focus:ring-opacity-50"
                    onClick={handleSignInClick}
                  >
                    Contact Us
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don't have an account yet? <Link to="/register" className="text-primaryDark hover:underline">Sign up</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </main>
  );
};

export default Contact;

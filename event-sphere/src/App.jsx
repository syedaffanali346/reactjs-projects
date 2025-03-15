import React from 'react';
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FindEvents from './components/FindEvents';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import MoreEvents from './components/MoreEvents';
import EventDetails from './components/EventDetails';
import ExhibitorDetails from './components/ExhibitorDetails';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';

// Layout component to include Navbar and Footer conditionally
const Layout = () => {
  const location = useLocation();

  const isLoginPageOrSignupPage = location.pathname === '/login-form' || location.pathname === '/signup-form';

  return (
    <>
      {!isLoginPageOrSignupPage && <Navbar />}
      <div className='w-full overflow-hidden'>
        <Outlet /> {/* This renders the child route components */}
      </div>
      {!isLoginPageOrSignupPage && <Footer />}
    </>
  );
};

// Define routes with createBrowserRouter
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Header /> },
        { path: 'find-events', element: <FindEvents /> },
        { path: 'event-details/:id', element: <EventDetails /> },
        { path: 'testimonials', element: <Testimonial /> },
        { path: 'contact', element: <Contact /> },
        { path: 'more-events', element: <MoreEvents /> },
        { path: 'exhibitor-details/:id', element: <ExhibitorDetails /> },
        { path: 'login-form', element: <LoginForm /> },
        { path: 'signup-form', element: <Signup /> },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true, // Enable v7 behavior
    },
  }
);

// Main App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

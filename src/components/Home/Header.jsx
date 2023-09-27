
import {NavLink} from 'react-router-dom';

import './Home.css'
const Header = () => {
    return (
        <>
        <div className='border-5 bg-[#C5C5C5]'>
        <div className='flex  mx-auto justify-around  w-10/12 items-center'>
            <img src='https://i.ibb.co/djbN1bQ/Logo.png' alt="" /> 
          <div className='py-8'>
          <NavLink to='/' className='mr-4 text-[#0B0B0B]'>Home</NavLink>
         <NavLink to='/donation' className='mr-4 text-[#0B0B0B]'>Donation</NavLink>
          <NavLink to='/statistics' className='mr-4 text-[#0B0B0B]'>Statistics</NavLink>
          </div>
          
        </div>
        </div>
        </>
    );
};
export default Header;
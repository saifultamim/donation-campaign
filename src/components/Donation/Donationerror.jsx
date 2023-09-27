import {Link } from 'react-router-dom';
const Donationerror = () => {   
    return (
        <div className='text-center mt-80'>
            <h2 className='text-4xl font-bold text-[#000000] mb-4'>No Data Found</h2>
            <Link to='/' className='bg-[#FF444A] text-[#FFF] px-4 py-3'>Go Back</Link>
        </div>
    );
};
export default Donationerror;
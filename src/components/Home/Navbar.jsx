

const Navbar = () => {
    return (
        <div className=' bg-green-600'>
            <div className='bg-[#C5C5C5]'>
        <div className='h-[600px]  bg-[#C5C5C5] w-10/12 mx-auto '>
            
            <div className='flex justify-center '>
            
            <div className=''>
            <h1 className='text-5xl text-[#0B0B0B] font-bold  mt-40'>I Grow By Helping People In Need</h1>
           <div className='mx-auto  text-center mt-6'>
           <input type="text" placeholder="Search here..." className='h-12 w-60 md:w-72 lg:w-96 bg-[#FFF] border-2 border-[#DEDEDE] rounded-s-lg p-2'/>
           <button className='bg-[#FF444A] w-20 text-[#FFF] py-3'>Search</button>
           </div>
            </div>
            
            </div>
            </div >
        </div>
        </div>
    );
};

export default Navbar;
import Donationerror from "./Donationerror";
import Specificdonation from "./Specificdonation";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Donation = () => {
    const [show,setShow]=useState(false)
    const navigate=useNavigate();
    const getitems=JSON.parse(localStorage.getItem('fav'))
    // if(!(getitems)){
    //     Swal.fire(
    //         'no data found',
          
    //       )
            
    //      navigate('/donation');
    // }
   console.log(show)
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#FFF] mx-auto '>
         {
          show?getitems.map((getitem,idx)=><Specificdonation key={idx} getitem={getitem}></Specificdonation>)
          :
          getitems.slice(0,4).map((getitem,idx)=><Specificdonation key={idx} getitem={getitem}></Specificdonation>)
         }
       
        </div>
        <div className='text-center'>
        <button onClick={()=>(setShow(!show))} className='bg-[#009444] text-[#FFF] w-[110px]  h-[40px] ' >
            {
                show?'See Less':'See All'
            }
         </button>
         </div>
        </>
    );
};

export default Donation;
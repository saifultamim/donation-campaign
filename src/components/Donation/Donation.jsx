import Specificdonation from "./Specificdonation";
import { useState } from "react";
const Donation = () => {
    const [show,setShow]=useState(false)
    const getitems=JSON.parse(localStorage.getItem('fav'))
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
        <button onClick={()=>(setShow(!show))} className={`text-[#FFF] w-[110px] 
        ${
            show?'':'bg-[#009444]'
        }
        
        h-[40px]`}>
            {
                show?'':'See All'
            }
         </button>
         </div>
        </>
    );
};
export default Donation;
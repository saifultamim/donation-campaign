import Donationerror from "./Donationerror";
import Specificdonation from "./Specificdonation";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
const Donation = () => {
    const navigate=useNavigate();
    const getitems=JSON.parse(localStorage.getItem('fav'))
    // if(!(getitems)){
    //     Swal.fire(
    //         'no data found',
          
    //       )
            
    //      navigate('/donation');
    // }
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-[#FFF] mx-auto'>
         {
          getitems.map((getitem,idx)=><Specificdonation key={idx} getitem={getitem}></Specificdonation>)
         }
        </div>
    );
};

export default Donation;
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Cardshow from "./Cardshow";
const Carddetails = () => {
    const para=useParams();
    const [cards,setCards]=useState();
    useEffect(()=>{
        fetch('/Donation.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
   const find=cards && cards.find((card)=>card.id == para.id)
    return (
        <div className='bg-[#FFF] flex justify-center'>
             {
               find?<Cardshow find={find}></Cardshow>:'not ok'
            } 
        </div>
    );
};
export default Carddetails;
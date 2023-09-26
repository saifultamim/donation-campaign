import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Cardshow from "./Cardshow";


const Carddetails = () => {
    const para=useParams();
    //console.log('---',para)
    const [cards,setCards]=useState();
    useEffect(()=>{
        fetch('/Donation.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    console.log('---',cards)
    // console.log('para.id',para.id)
   const find=cards && cards.find((card)=>card.id == para.id)
   console.log('____++++',find)
    return (
        <div className='bg-[#FFF] flex justify-center'>
           
             {
               find?<Cardshow find={find}></Cardshow>:'not ok'
            } 
        </div>
    );
};

export default Carddetails;
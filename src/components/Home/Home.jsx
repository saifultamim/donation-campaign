import {useLoaderData} from "react-router-dom";
import Navbar from "./Navbar";
import Cards from "./Cards";
const Home = () => {
    const donationCards=useLoaderData();
    return (
        <div className=''>
           <div className='bg-[#C5C5C5]'>
           <Navbar></Navbar>
           </div>
           <div className='bg-[#FFF]'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12  mx-auto '>
           {
            donationCards.map((donationCard)=><Cards key={donationCard.id} donationCard={donationCard}></Cards>)
           }
           </div>
           </div>
           </div>
    );
};
export default Home;
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
const Cards = ({donationCard}) => {
const {id,picture,title,category,card_bg_color,text_button_bg_color,}=donationCard;
return (
        <div className='mr-4 flex justify-center mt-4'>
              <Link to={`/carddetails/${id}`}> 
               <div className='card w-12/12 ' style={{backgroundColor:card_bg_color}} >
          <div className=' '>
          <figure><img src={picture} alt="" className=' h-60 w-full'/></figure>
          <div className="">
            <h2 className="">
              <button className='px-2 ' style={{backgroundColor:card_bg_color,color:text_button_bg_color}}>{category}</button>
              <p className='text-xl mx-auto' style={{color:text_button_bg_color}}>{title}</p>
          </h2>
          </div>
          </div>
        </div> 
        </Link> 
                </div>
    );
};
Cards.propTypes={
    donationCard:PropTypes.object,
    }
export default Cards;
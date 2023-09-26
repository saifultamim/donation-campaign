

const Specificdonation = ({getitem}) => {
    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,description,price}=getitem;
   
    return (
        <div className=''>
            
            <div className='flex border-2 border-red-600 m-4 w-[640px] items-center' style={{backgroundColor:card_bg_color}}>
            <div>
                <img src={picture} alt="" className='h-[200px] w-[200px]'/>
            </div>
            <div className='gap-4 ml-8'>
            <h2 className='px-4 w-20' style={{backgroundColor:card_bg_color,color:text_button_bg_color}}>{category}</h2>
            <h2 className='text-[#0B0B0B] text-xl font-bold'>{title}</h2>
            <h2 className='font-bold' style={{color:text_button_bg_color}}>${price}</h2>
            <button style={{backgroundColor:text_button_bg_color}} className='text-[#FFF] p-2'>View Details</button>
            </div>
            </div>

              
        </div>
    );
};

export default Specificdonation;
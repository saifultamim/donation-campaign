import Swal from 'sweetalert2'
const Cardshow = ({find}) => {
   
    console.log('ehello')
    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,description,price}=find;
    const handleDonate=()=>{
        console.log('ok donate')
        Swal.fire(
            'successfully',
          
          )
          const arr=[];
          const getitem=JSON.parse(localStorage.getItem('fav'));
          if(!getitem){
            arr.push(find)
            localStorage.setItem('fav',JSON.stringify(arr))
          }
          else{
            arr.push(...getitem,find)
            localStorage.setItem('fav',JSON.stringify(arr))
          }
          
    }
 
    return (
        <div className='w-6/12 '>
       

        <div className='mt-20 mb-[140px]'>
        <div className='relative'>
  <img src={picture} alt="" className='w-full h-[450px]' />
  
  <h2 className='absolute bottom-[0.5px] p-10 left-0 w-full bg-black bg-opacity-50 text-white '>
  <button onClick={handleDonate} className=' px-4 py-2' style={{backgroundColor:text_button_bg_color}}>Donate $ {price}</button>
  </h2>
  
</div>

           <h2 className='text-[#0B0B0B] text-4xl font-medium'>{category}</h2>
           <p className='text-[#0b0b0bb3] w-full'>{description}</p>
        </div>
        </div>
         
       
    );
};

export default Cardshow;
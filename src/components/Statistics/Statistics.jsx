import { Chart } from "react-google-charts";
const Statistics = () => {
   const getitem=JSON.parse( localStorage.getItem('fav'));
   const data = [
    ['total', "donation"],
    [`${(100-((getitem.length/12)*100)).toFixed(2)}%`, 12],
    [`${((getitem.length/12)*100).toFixed(2)}%`,(getitem.length)],
  ];
  const options = {
    legend: "none",
    pieSliceText: "label",
    title: "",
    pieStartAngle: 100,  
  };
  return (
    <>
    <div className=''>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"650px"}
    />
    </div>
      <div className='flex justify-center bg-[#FFF] '>
      <div className='flex '>
     <div className='flex items-center gap-4 mr-8'>
     <p>Your Donation</p>
     <div className='h-2 bg-red-500 w-20'></div>
     </div>
     <div className='flex items-center gap-4'>
     <p>Total Donation</p>
     <div className='h-2 bg-blue-500 w-20'></div>
     </div>
     </div> 
      </div>
   
     </>
  );
};
export default Statistics;

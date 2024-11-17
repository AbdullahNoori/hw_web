import range_rover from './assets/images/range_rover.png'


function Card(){
    return(
        <div>
            <div className='border-2 rounded-xl  border-transparent shadow-2xl m-1  text-center bg-zinc-400' >
                <img src={range_rover} alt="404" className='max-w-44 ' />
                <h3 className='mt-3'> Range Rover Sport </h3> 
                <p>23,000$</p> 
            </div>
        </div>
    )
}


function CardContainer() {
    return (
        <>
        {/* <h1 className="text-xl pl-4 mt-3 bg-blue-500 w-52 rounded-sm">Hottest deals</h1> */}
        <div className="flex justify-center items-center">
        
        <div className="grid grid-cols-3 gap-4 p-4 ">
            <Card />
            <Card />
            <Card />
            {/* Add as many cards as you want here */}
        </div>
      </div>
      </>
    );
  }
  
//   export default Card;
  export default CardContainer;
import bo6 from './assets/images/bo_cold.png'
import gta from './assets/images/gta.png'
import gow from './assets/images/gow.png'
import hitman from './assets/images/hitman.png'
import facebook from './assets/icons/facebook.svg'

function GameCard() {
  return (
    <>
    <h1 className="text-xl pl-4  mb-3 bg-gradient-to-t from-stone-500 to-stone-400 w-2/5 rounded-sm"> Latest Games on The Market </h1>
    <div className="flex justify-center gap-4 flex-wrap pb-8">

      <img src={gta} alt="404" className='w-28 shadow-2xl rounded-lg' />
      <h3 className=""> GTA 5 </h3>
      <p>23,99$</p>

      <img src={hitman} alt="404" className='w-28 shadow-2xl rounded-lg' />
      <h3 className=""> Hitman </h3>
      <p>35.99$</p>

      <img src={hitman} alt="404" className='w-28 shadow-2xl rounded-lg' />
      <h3 className=""> Hitman </h3>
      <p>35.99$</p>
 
      <img src={hitman} alt="404" className='w-28 shadow-2xl rounded-lg' />
      <h3 className=""> Hitman </h3>
      <p>35.99$</p>
      
      <img src={gow} alt="404" className='w-28 shadow-2xl rounded-lg' />
      <h3 className=""> GOW Ragnarok </h3>
      <p>44,99$</p>

    </div>
    </>
  );
}
export default GameCard

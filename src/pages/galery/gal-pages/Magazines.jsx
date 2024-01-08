import img from '../../../static/magazines.json';

function Magazines() {
  return(
    <div className="w-[300px] mob:w-[361px] sm:w-[592px] lg:w-[952px] xl:w-[1336px] 3xl:w-[1680px] py-[60px] pt-[120px] xl:pb-[80px] m-auto">
      <h2 id="Services" className='text-[#212121] border-b-[1px] border-[#212121]'>Magazines</h2>
      <img className="py-[52px] m-auto" src="../img/magazine.png" alt="" />
      <div className='flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 xl:gap-[36px] 3xl:gap-[52px]'>
        {
          img.map(obj => (
            <div key={obj.id} className='magazines flex flex-col gap-[27px] sm:gap-[21px] 3xl:gap-[36px] sm:w-[285px] xl:w-[420px] 3xl:w-[476px]'>
              <img src={obj.img1} alt="" />
              <img src={obj.img2} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Magazines;
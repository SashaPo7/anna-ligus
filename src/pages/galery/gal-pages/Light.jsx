import img from '../../../static/light.json'

function Light() {
  return(
    <div className="w-[300px] mob:w-[361px] sm:w-[592px] lg:w-[952px] xl:w-[1336px] 3xl:w-[1680px] py-[60px] pt-[120px] xl:pb-[80px] m-auto">
      <h2 id="Services" className='text-[#212121] border-b-[1px] border-[#212121]'>colored light</h2>
      <div className='py-[42px] flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 xl:gap-[36px] 3xl:gap-[52px]'>
        {
        img.map(obj => (
          <img key={obj.id} className='interior sm:w-[592px] lg:w-[464px] xl:w-[476px] 3xl:w-[560px]' src={obj.img} alt="" />
        ))
      }
      </div>
    </div>
  );
}

export default Light;
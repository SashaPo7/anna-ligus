import React from 'react';
import { Helmet } from 'react-helmet-async';
import img from '../../../static/nude.json';

function Nude() {
  return(
    <>
      <Helmet>
        <meta name='description' content='Nude portfolio by photographer Anna Ligus' />
        <link rel="canonical" href="/portfolio/nude" />
      </Helmet>

      <div className="w-[300px] mob:w-[361px] sm:w-[592px] lg:w-[952px] xl:w-[1336px] 3xl:w-[1680px] py-[60px] pt-[120px] xl:pb-[80px] m-auto">
        <h2 className='text-[#212121] border-b-[1px] border-[#212121] mb-[52px]'>Nude</h2>
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
    </>  
  );
}

export default Nude;
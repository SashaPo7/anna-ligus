import React from 'react';
import services from '../static/services.json';

function Services() {
  const [selectedServiceIndices, setSelectedServiceIndices] = React.useState([]);

  const toggleDescription = (index) => {
    setSelectedServiceIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        // If the index is already in the array, remove it
        return prevIndices.filter((i) => i !== index);
      } else {
        // If the index is not in the array, add it
        return [...prevIndices, index];
      }
    });
  };

  return (
    <div className="w-[300px] mob:w-[361px] sm:w-[592px] lg:w-[952px] xl:w-[1336px] 3xl:w-[1680px] pt-[40px] pb-[60px] xl:pb-[80px] m-auto">
      <h2 id="Services" className='border-b-[1px] border-[#D9D9D9]'>services</h2>
      <div className='px-4 sm:px-6 lg:px-[50px] xl:px-[68px] 3xl:px-[240px] lg:py-[10px] xl:py-[20px]'>
        {services.map((obj, index) => (
          <div key={obj.id} className='pt-8 pb-6 border-b-[1px] border-[#D9D9D9]'>
            <div className='flex items-center justify-between'>
              <h2>{obj.title}</h2>
              <div onClick={() => toggleDescription(index)}>
                <svg className={selectedServiceIndices.includes(index) ? 'active' : 'hidden'} width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2933 35.9446L9.97905 32.6122L30.0639 12.4911H14.6697L14.706 7.90909H37.9783V31.1996H33.3601L33.3963 15.8054L13.2933 35.9446Z" fill="#F2F2F2"/>
                </svg>
                <svg className={!selectedServiceIndices.includes(index) ? 'active' : 'hidden'} width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.2933 13.0554L9.97905 16.3878L30.0639 36.5089H14.6697L14.706 41.0909H37.9783V17.8004H33.3601L33.3963 33.1946L13.2933 13.0554Z" fill="#F2F2F2"/>
                </svg>
              </div>
            </div>
            {selectedServiceIndices.includes(index) && <p>{obj.discription}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;

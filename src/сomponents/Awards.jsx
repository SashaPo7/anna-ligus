function Awards() {
  return (
    <div className="w-[300px] mob:w-[361px] sm:w-[592px] lg:w-[952px] xl:w-[1336px] 3xl:w-[1680px] pt-[40px] pb-[60px] xl:pb-[80px] m-auto">
      <div className='sm:px-6 lg:px-[50px] xl:px-0 xl:w-[1200px] xl:m-auto flex flex-col'>
        <div className="flex flex-col lg:flex-row pb-3 sm:pb-5 lg:justify-between">
          <div className="w-[220px] pb-3 sm:pb-5">
            <div className="awards">MIFA 2021 </div>
            <div className="text">Honorable Mention</div>
          </div>
          <div className="w-[220px] pb-3 sm:pb-5">
            <div className="awards">TIFA 2021</div>
            <div className="text">Honorable Mention</div>
          </div>
          <div className="w-[220px] pb-3 sm:pb-5">
            <div className="awards">fapa 2021</div>
            <div className="text">Nominee</div>
          </div>
          <div className="w-[220px] xl:w-[361px]">
            <div className="awards">TIFA 2022 </div>
            <div className="text">Silver Winner, Jury Top 5 selection </div>
          </div>
        </div>
        <div className="pb-3 sm:pb-5">
          <div className="awards">reFocus awards 2023</div>
          <div className="text">Nominee</div>
        </div>
        <div className="pb-3 sm:pb-5">
          <div className="awards">Paris Photo Prize 2023</div>
          <div className="text">Best New Talent,  Gold Winner,  1st Place Winner</div>
        </div>
        <div className="pb-3 sm:pb-5">
          <div className="awards">LensCulture</div>
          <div className="text">selected Black & White Photography Awards 2023 Competition Gallery</div>
        </div>
        <h2 className="text-[#000000]">Exhibitions</h2>
        <div className="awards">IMAGENATION PARIS 2023, NEW EYES.</div>
        <div className="awards">Paris Photo Prize 2023</div>
      </div>
    </div>
  );
}

export default Awards;
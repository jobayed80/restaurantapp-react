import React from 'react'
const HomeContainer = () => {
  return (
    // ekhane grid-cols-1 for mobile view,,tokhn cols 1 ta hbe,,md:grid-cols-2 for desktop / tablet
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home-part'>
        
        <div className='py-2 flex-1 flex flex-col gap-6 items-start justify-center'>
            
              <div className='flex items-center justify-center px-4 py-1 gap-2 bg-red-300 rounded-full'>
                <p className='text-base  text-white  font-semibol'>Bike Delivery</p>
                <div className='w-6 h-6 bg-white rounded-full overflow-hidden shadow-xl'>
                  <img className='w-full h-full object-contain' src="./assets/img/delivery.png"></img>
                </div>
              </div>
              
                <p className='text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor'>
                  The Fasted Delivery in <span className='tex-[2.5rem] lg:text-[3.3rem] text-orange-400'>Your City</span>
                </p>

                <p className='text-base text-[1rem] text-textColor text-center md:text-left md:w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, asperiores iure? Atque assumenda neque at ut vitae quaerat ab! Quod?</p>

                <button type="button" className='bg-gradient-to-br from-orange-500 to-red-400 w-full md:w-auto px-4 py-2  rounded-xl hover:shadow-2xl transition-all duration-100 ease-in-out'>Order Now</button>
              
        </div>

        <div className='py-2 flex-1 flex items-center'>
            <img className='ml-auto h-420 w-full lg:w-auto  lg:h-500' src="./assets/img/heroBg.png" alt="HeroBg"></img>
        </div>

    </section>
  )
}

export default HomeContainer
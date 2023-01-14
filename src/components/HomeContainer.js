import React from 'react'
import { heroData } from '../utils/data'
// jobayed

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



        <div className='py-2 flex-1 flex items-center relative '>

          <img className='ml-auto h-420 w-full lg:w-auto  lg:h-500 ' src="./assets/img/heroBg.png" alt="HeroBg"></img>

          <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
            {heroData &&
              heroData.map((n) => (
                <div
                  key={n.id}
                  className=" lg:w-[145px]  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                >
                  <img
                    src={n.imgSrc}
                    className="w-12 lg:w-168 -mt-10 lg:-mt-10 "
                    alt="I1"
                  />
                  <p className="text-base lg:text-sm font-semibold text-textColor mt-2 lg:mt-4">
                    {n.name}
                  </p>

                  <p className="text-[8px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                    {n.decp}
                  </p>

                  <p className="text-sm font-semibold text-headingColor">
                    <span className="text-xs text-red-600">$</span> {n.price}
                  </p>
                </div>
              ))}
          </div>

        </div>

        {/* <div className=" py-2 flex-1 flex items-center relative">
          <img
            src="./assets/img/heroBg.png"
            className=" ml-auto h-420 w-full lg:w-auto lg:h-500"
            alt="hero-bg"
          />

          <div className=" w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-2 flex-wrap" id='heroDatas'>
              
                  <div className='lg:grid lg:grid-cols-2 gap-6 lg:col-gap-4'>
                      <div className="  lg:w-190  p-4-14 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg flex-wrap">
                        <img
                          src="./assets/img/f1.png"
                          className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                          alt="I1"
                        />
                        <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                          Chocolate
                        </p>

                        <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                          Chocolate & vanilla
                        </p>

                        <p className="text-sm font-semibold text-headingColor">
                          <span className="text-xs text-red-600">$</span>5.77
                        </p>
                      </div>
                      <div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg flex-wrap">
                        <img
                          src="./assets/img/f1.png"
                          className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                          alt="I1"
                        />
                        <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                          Chocolate
                        </p>

                        <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                          Chocolate & vanilla
                        </p>

                        <p className="text-sm font-semibold text-headingColor">
                          <span className="text-xs text-red-600">$</span>5.77
                        </p>
                      </div>
                      <div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg flex-wrap">
                        <img
                          src="./assets/img/f1.png"
                          className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                          alt="I1"
                        />
                        <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                          Chocolate
                        </p>

                        <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                          Chocolate & vanilla
                        </p>

                        <p className="text-sm font-semibold text-headingColor">
                          <span className="text-xs text-red-600">$</span>5.77
                        </p>
                      </div>
                      <div className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg flex-wrap">
                        <img
                          src="./assets/img/f1.png"
                          className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                          alt="I1"
                        />
                        <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                          Chocolate
                        </p>

                        <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                          Chocolate & vanilla
                        </p>

                        <p className="text-sm font-semibold text-headingColor">
                          <span className="text-xs text-red-600">$</span>5.77
                        </p>
                      </div>
                  </div>
              
              </div>
          </div> */}


    </section>
  )
}

export default HomeContainer
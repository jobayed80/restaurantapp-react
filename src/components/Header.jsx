import React, { useState } from 'react'
import Swal from 'sweetalert2'

import { MdShoppingBasket , MdAdd , MdLogout } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';



const Header = () => {

  // jobayed jobayed

  // used for login succesfully sweetalert
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })



  const [isMenu , setIsmenu] = useState(false)
  const [{ user }, dispatch] = useStateValue()
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  let login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(auth, provider);
      // this part used for successfully login
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully',
        
      })
      
      // this used for all login info by google used of react redux
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
        
      })
      localStorage.setItem("user", JSON.stringify(providerData[0])); //etar mne holo login korle refresh dile login hye thkbe,,baki kaj fetchLoca..file e

    }else{
      setIsmenu(!isMenu)
    }
  };

  // this function used for logout
  const signOut = ()=>{
    setIsmenu(false)
    localStorage.clear()
    dispatch({
      type : actionType.SET_USER,
      user: null
    })
    Toast.fire({
      icon: 'success',
      title: 'Signout in successfully',
      
    })
  }





  return (

    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16'>

      
      
      
          {/* desktop & tablet start -----------------------*/}
          <div className='hidden md:flex w-full h-full items-center justify-between'>

              <Link to={'/'} className='flex items-center gap-2'>
                <img src='./assets/img/logo.png' className='w-7 object-cover' alt="logo"></img>
                <p className='text-headingColor text-xl font-bold'> City</p>
              </Link>

              <div className='flex items-center gap-8'>

                <motion.ul
                  initial={{opacity:0 , x:200}}
                  animate={{opacity:1 , x:0}}
                  exit={{opacity:0 , x:200}} className="flex items-center gap-7">
                  <li className='text-base text-textColor cursor-pointer hover:text-red-300 duration-500  transition-all ease-in-out'>Home</li>
                  <li className='text-base text-textColor cursor-pointer hover:text-red-300 duration-500  transition-all ease-in-out'>Menu</li>
                  <li className='text-base text-textColor cursor-pointer hover:text-red-300 duration-500  transition-all ease-in-out'>About us</li>
                  <li className='text-base text-textColor cursor-pointer hover:text-red-300 duration-500  transition-all ease-in-out'>Service</li>
                </motion.ul>

                <div className='relative flex items-center justify-center'>
                  <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
                  <div className='w-4 h-4 bg-cartNumBg rounded-full flex items-center justify-center absolute -top-1 -right-1'>
                    <p className='text-white font-semibold text-xs'>2</p>
                  </div>
                </div>

                <div className='relative'>
                      <motion.img
                        whileTap={{ scale: 0.8 }}
                        src={user ? user.photoURL : "./assets/img/avatar.png"}
                        alt='avatar'
                        className='w-8 min-w-[10px] h-8 min-h-[10px] object-cover cursor-pointer drop-shadow-2xl rounded-full'
                        onClick={login}
                      />

                      {isMenu && 
                      (<motion.div
                        initial={{opacity:0 , scale: 0.6}}
                        animate={{opacity:1 , scale: 1}}
                        exit={{opacity:0 , scale: 0.6}}className='w-40 bg-gray-50 rounded-lg absolute flex flex-col shadow-xl top-18 right-0'>
                        {user && user.email === "jobayed35-2948@diu.edu.bd" && 
                        <Link to={'createContainer'}>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd></MdAdd></p>
                        </Link>}

                        <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'
                        onClick={signOut}>Logout <MdLogout></MdLogout></p>

                      </motion.div>)}
                  </div>

              </div>

          </div>
          {/* desktop & tablet end----------------- */}






          {/* mobile start -----------------*/}
          <div className='flex md:hidden w-full h-full items-center justify-between'>

              <Link to={'/'} className='flex items-center gap-2'>
              <img src='./assets/img/logo.png' className='w-8 object-cover' alt="logo"></img>
              <p className='text-headingColor text-xl font-bold'> City</p>
              </Link>

              <div className='relative'>
                      <motion.img
                        whileTap={{ scale: 0.8 }}
                        src={user ? user.photoURL : "./assets/img/avatar.png"}
                        alt='avatar'
                        className='w-8 min-w-[10px] h-8 min-h-[10px] object-cover cursor-pointer drop-shadow-2xl rounded-full'
                        onClick={login}
                      />

                      {isMenu && 
                        (<motion.div
                          initial={{opacity:0 , scale: 0.6}}
                          animate={{opacity:1 , scale: 1}}
                          exit={{opacity:0 , scale: 0.6}}className='w-40 bg-gray-50 rounded-lg absolute flex flex-col shadow-xl top-18 right-0'>

                          {user && user.email === "jobayed35-2948@diu.edu.bd" && 
                          <Link to={'createContainer'}>
                              <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd></MdAdd></p>
                          </Link>}

                          <ul
                            className="flex flex-col">
                            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Home</li>
                            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Menu</li>
                            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>About us</li>
                            <li className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Service</li>
                          </ul>

                          <p className='m-2 p-2 rounded-md shadow-md flex items-center justify-center gap-3 bg-gray-200 cursor-pointer hover:bg-slate-300  transition-all duration-100 ease-in-out text-textColor text-base'
                          onClick={signOut}>Logout <MdLogout></MdLogout></p>

                        </motion.div>)
                      }

                  </div>

          </div>
          {/* mobile end -----------------*/}

                                                         
    </header>
  )
}

export default Header
import React from 'react'
import { ArrowRight } from 'phosphor-react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';


export const Login = () => {
    return (
        <>

            <div>
                <div className='flex items-center justify-end p-4'>
                    <button className='w-12 h-12 flex items-center justify-center glass1'>
                        <Link to={'/home'}>
                            <ArrowRight size={28} color="white" />
                        </Link>
                    </button>
                </div>
                <Tilt>
                    <div className='container1 glass1'>
                        <div className='flex  justify-center items-center flex-col gap-1 p-5 '>
                            <p className='text-slate-300 mb-7 font-bold text-base'>Login</p>
                            <input type="text" placeholder='Username' className='w-3/4 h-10 rounded-lg text-slate-300 p-2 mb-2 input_bg' />
                            <input type="password" placeholder='Password' className='w-3/4 h-10 rounded-lg text-slate-300 p-2 input_bg' />
                            <div className='flex text-slate-300 justify-between  items-center w-3/4 '>
                                <div className='flex cursor-pointer'>
                                    <input type="checkBox" className='cursor-pointer' />
                                    <p>Remember me</p>
                                </div>
                                <p className='cursor-pointer'>Forget Password?</p>
                            </div>
                            <button className='border w-3/4 h-10 bg-[#fafafa] rounded-lg font-bold mt-7'>Login</button>
                            <p className='text-slate-600'>Don't have an account? <span className='text-stone-50 font-bold cursor-pointer'>Register</span> </p>
                        </div>
                    </div>
                </Tilt>
            </div>
            

        </>
    )
}

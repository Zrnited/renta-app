import React, { useState } from 'react'
import Chatbox from './Chatbox'
import Loader from './Loader'

const ChatEngine = ({visible, supportForm, handleChanges, handleSubmitForm, error, welcome, loader, chat}) => {
  return (
    <div className='fixed bottom-24 right-8 bg-white w-3/4 p-5 shadow-xl z-50 h-[400px] rounded-md transition-all ease-in-out delay-100 md:w-1/2 lg:w-1/3' style={{opacity: visible ? 1 : 0}}>
        {welcome && <div className='flex flex-col'>
            <h1 className='uppercase text-customBlue font-extrabold text-xl tracking-wider mb-2 lg:text-2xl'>renta</h1>
            <hr className='mb-3' />
            <p>Welcome to our support page!</p>
            <form className='flex flex-col gap-3 mt-3' onSubmit={handleSubmitForm}>
                <input 
                    type={'email'}
                    placeholder='Email address'
                    className='h-[44px] px-3 border rounded-md focus:outline-customBlue'
                    name={'email'}
                    value={supportForm.email}
                    onChange={handleChanges}
                />
                <input 
                    type={'text'}
                    placeholder='First name'
                    className='h-[44px] px-3 border rounded-md focus:outline-customBlue'
                    name={'firstName'}
                    value={supportForm.firstName}
                    onChange={handleChanges}
                />
                <input 
                    type={'text'}
                    placeholder='Last name'
                    className='h-[44px] px-3 border rounded-md focus:outline-customBlue'
                    name={'lastName'}
                    value={supportForm.lastName}
                    onChange={handleChanges}
                />
                <button className='h-[44px] bg-customBlue text-white rounded-md opacity-90 hover:opacity-100 transition delay-100 focus:outline-none'>Submit</button>
            </form>
            <p className='mt-2 text-customBlue text-sm'> Enter your details above to get started.</p>
            {
                error && <p className='text-red-600 text-sm text-center tracking-wider'> Kindly fill all fields* </p>
            }
        </div>}  
        {loader && <div className='flex flex-col h-full justify-center items-center'> <Loader /> 
        <p className='mt-3'>Just a sec...</p>
        </div>}
        {chat && <div><Chatbox /> </div>}
    </div>
  )
}

export default ChatEngine
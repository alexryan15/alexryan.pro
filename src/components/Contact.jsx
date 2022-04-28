import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/95df4ea5-fe4b-4ef1-b0b5-d905a47bdce3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ed9637] text-white caret-transparent'>Contact</p>
                <p className='text-white pt-4 caret-transparent'>Submit the form below or email at alexryan1717@hotmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6] text-black rounded-lg' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6] text-black rounded-lg' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-[#ccd6f6] p-2 text-black rounded-lg' name="message" rows="10" placeholder='Message' required ></textarea>
            <button className='text-white border-2 hover:bg-[#ed9637] hover:border-[#ed9637] px-4 py-2 my-8 mx-auto flex items-center rounded-lg'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact
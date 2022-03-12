import React from 'react'

function Profile() {
  return (
    <div>
        <h1 className='text-3xl font-light tracking-wider border-b-2 text-black mt-5 mx-20'>Student Profile</h1>
        <section className='flex justify-center items-center mt-6 px-10 gap-5'>
            <div className='bg-orange-100 text-[#2d2d2e] py-5 px-10 text-2xl rounded-xl shadow-xl font-semibold'>CLASS 9</div>
            <div className='bg-green-100 text-[#2d2d2e] py-5 px-10 text-2xl rounded-xl shadow-xl font-semibold'>SECTION C</div>
            <div className='bg-cyan-100 text-[#2d2d2e] py-5 px-10 text-2xl rounded-xl shadow-xl font-semibold'>Roll No. - 09915603120</div>
        </section>
        <section className='my-10 mx-20 '>
            <div className='bg-white w-max py-4 px-10 rounded-xl shadow-lg mx-auto'>
                <div className='text-xl'>Class Teacher :</div>
                <div className='flex items-center gap-4'>
                    <img className='w-12 h-12 rounded-full' src='https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg' />
                    <div className='text-2xl'>Mr. Mamta Kulkarni</div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Profile
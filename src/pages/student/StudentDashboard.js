import React from 'react'
import Notices from '../../components/student/notices'
import Profile from '../../components/student/profile'
import TimeTable from '../../components/student/timeTable'


function Dashboard() {
  return (
    <main className='flex justify-center items-center h-screen w-screen'>
        <section className='bg-[#EAEAF7] h-full w-1/5 flex flex-col justify-between'>
            <div className='flex flex-col justify-center mt-10 w-full'>
                <div className='w-full flex flex-col justify-center'>
                    <img className='w-32 h-32 rounded-full mx-auto' src='https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg' />
                    <h2 className='text-center text-xl text-[#2d2d2e] font-semibold py-2'>Saifullah Rahman</h2>
                    <h3 className='text-center text-sm text-[#6e6e6e] px-2'>Dr. Akhilesh Das Gupta Institute of Technology and management</h3>
                </div>
                <div className='flex flex-col w-full mt-10 text-center'>
                    <div className='bg-white py-2 hover:bg-slate-50 cursor-pointer'>Profile</div>
                    <div className='py-2 hover:bg-slate-50 cursor-pointer'>Notices</div>
                    <div className='py-2 hover:bg-slate-50 cursor-pointer'>Time Table</div>
                    <div className='py-2 hover:bg-slate-50 cursor-pointer'>Attendance</div>
                    <div className='py-2 hover:bg-slate-50 cursor-pointer'>Assignments</div>
                    <div className='py-2 hover:bg-slate-50 cursor-pointer'>Calendar</div>
                    <div className='py-2 hover:bg-slate-50 cursor-pointer'>Pay Fees</div>
                </div>
            </div>
            <div className='bg-slate-500 text-white shadow-lg text-center text-xl py-2 mb-5 rounded-xl mx-2'>Logout</div>
        </section>
        <section className='bg-[#F7F6FB] h-full w-4/5'>
            <Profile />
            {/* <Notices /> */}
            {/* <TimeTable /> */}
        </section>
    </main>
  )
}

export default Dashboard
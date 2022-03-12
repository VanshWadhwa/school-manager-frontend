import React from 'react'
import {useState} from 'react'
import Notices from '../../components/student/Notices'
import Profile from '../../components/student/Profile'
import TimeTable from '../../components/student/TimeTable'


function Dashboard() {
    const [selectedMenu, setSelectedMenu] = useState('profile')

    const onMenuClick = (e) => {
        setSelectedMenu( e.target.attributes.getNamedItem("name").value)
        // e.target.classList.toggle('bg-[#EAEAF7]');
    }

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
                    <div className={`py-2 ${selectedMenu === 'profile' && 'bg-white'} hover:bg-slate-50 cursor-pointer`} onClick={onMenuClick} name="profile">Profile</div>
                    <button className={`py-2 ${selectedMenu === 'notices' && 'bg-white'} hover:bg-slate-50 cursor-pointer`} onClick={onMenuClick} name="notices">Notices</button>
                    <button className={`py-2 ${selectedMenu === 'timeTable' && 'bg-white'} hover:bg-slate-50 cursor-pointer`} onClick={onMenuClick} name="timeTable">Time Table</button>
                    <button className={`py-2 ${selectedMenu === 'attendence' && 'bg-white'} hover:bg-slate-50 cursor-pointer`} onClick={onMenuClick} name="attendence">Attendance</button>
                    <button className={`py-2 ${selectedMenu === 'assignments' && 'bg-white'} hover:bg-slate-50 cursor-pointer`} onClick={onMenuClick} name="assignments">Assignments</button>
                    <button className={`py-2 ${selectedMenu === 'calendar' && 'bg-white'} hover:bg-slate-50 cursor-pointer`} onClick={onMenuClick} name="calendar">Calendar</button>
                    <button className={`py-2 ${selectedMenu === 'payFees' && 'bg-white'} hover:bg-slate-50 cursor-pointer`} onClick={onMenuClick} name="payFees">Pay Fees</button>
                </div>
            </div>
            <div className='bg-slate-500 text-white shadow-lg text-center text-xl py-2 mb-5 rounded-xl mx-2'>Logout</div>
        </section>
        <section className='bg-[#F7F6FB] h-full w-4/5'>
            {selectedMenu === "profile" && <Profile />}
            {selectedMenu === "timeTable" && <TimeTable />}


            {/* <Notices /> */}
            {/* <TimeTable /> */}
        </section>
    </main>
  )
}

export default Dashboard
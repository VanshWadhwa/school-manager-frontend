import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./timeTable.css";

function TimeTable() {


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  return (
    <div className='pl-10 mt-14'>
        <h1 className='text-[#2d2d2e] text-3xl border-b-2'>Time Table</h1>
        <h3 className='py-4 text-xl '>Class: <span className='text-[#5d5d5d]'>9 C</span></h3>
        
<table class="border-collapse border border-slate-400 text-xl">
  <thead>
    <tr>
      <th class="border border-slate-300 italic">Days&#8595;/Time&#8594;</th>
      <th class="border border-slate-300">08:00-09:00</th>
      <th class="border border-slate-300">09:00-10:00</th>
      <th class="border border-slate-300">10:00-11:00</th>
      <th class="border border-slate-300">Lunch<br></br>(11-11:30)</th>
      <th class="border border-slate-300">11:30-12:15</th>
      <th class="border border-slate-300">12:15-01:00</th>
      <th class="border border-slate-300">01:00-02:00</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="border border-slate-300">Monday</th>
      <td class="border border-slate-300">English</td>
      <td class="border border-slate-300">Maths</td>
      <td class="border border-slate-300">P.T</td>
      <td class="border border-slate-300"></td>
      <td class="border border-slate-300">Physics</td>
      <td class="border border-slate-300">CS</td>
      <td class="border border-slate-300">Chemistry</td>
    </tr>
    <tr>
      <th class="border border-slate-300">Tuesday</th>
      <td class="border border-slate-300">Maths</td>
      <td class="border border-slate-300">CS</td>
      <td class="border border-slate-300">PT</td>
      <td class="border border-slate-300"></td>
      <td class="border border-slate-300">Hindi</td>
      <td class="border border-slate-300">English</td>
      <td class="border border-slate-300">Physics</td>
    </tr>
    <tr>
      <th class="border border-slate-300">Wednesday</th>
      <td class="border border-slate-300">Physics</td>
      <td class="border border-slate-300">Chemistry</td>
      <td class="border border-slate-300">CS</td>
      <td class="border border-slate-300"></td>
      <td class="border border-slate-300">Hindi</td>
      <td class="border border-slate-300">English</td>
      <td class="border border-slate-300">Maths</td>
    </tr>
    <tr>
      <th class="border border-slate-300">Thursday</th>
      <td class="border border-slate-300">Hindi</td>
      <td class="border border-slate-300">English</td>
      <td class="border border-slate-300">Maths</td>
      <td class="border border-slate-300"></td>
      <td class="border border-slate-300">Maths</td>
      <td class="border border-slate-300">Physics</td>
      <td class="border border-slate-300">Chemistry</td>
    </tr>
    <tr>
      <th class="border border-slate-300">Friday</th>
      <td class="border border-slate-300">PT</td>
      <td class="border border-slate-300">CS</td>
      <td class="border border-slate-300">Maths</td>
      <td class="border border-slate-300"></td>
      <td class="border border-slate-300">Physics</td>
      <td class="border border-slate-300">Maths</td>
      <td class="border border-slate-300">CS</td>
    </tr>
    <tr>
      <th class="border border-slate-300">Saturday</th>
      <td class="border border-slate-300">Chemistry</td>
      <td class="border border-slate-300">PT</td>
      <td class="border border-slate-300">Maths</td>
      <td class="border border-slate-300"></td>
      <td class="border border-slate-300">Physics</td>
      <td class="border border-slate-300">CS</td>
      <td class="border border-slate-300">Physics</td>
    </tr>
  </tbody>
</table>


    </div>
  )
}

export default TimeTable
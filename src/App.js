import React,{useState,useEffect} from 'react'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { allMeals } from './Meals';
import { Button } from 'react-bootstrap';
import './App.css'
function App() {
  const[meals,setMeals]=useState(allMeals)
  const[show,setShow]=useState(false)
  const[singleDate,setSingleDate]=useState([])
  const [value, onChange] = useState(new Date());

  useEffect(()=>{
    const datedata=allMeals?.find(item=>item.schedule_date.split('/')[0]==`${new Date(value.toLocaleDateString()).getDate()}`)
    const datedata1=allMeals?.find(item=>item.schedule_date.split('/')[0]==`${new Date(value.toLocaleDateString()).getDate()-1}`)
    const datedata2=allMeals?.find(item=>item.schedule_date.split('/')[0]==`${new Date(value.toLocaleDateString()).getDate()-2}`)
    console.log(datedata,datedata1,datedata2)
    setSingleDate([datedata2,datedata1,datedata])
  },[value])
console.log(meals)


  

  return (
    <>
    {show?<ResponsiveContainer width="100%" aspect={3} className='mt-5'>
        <LineChart
          width={800}
          height={300}
          data={singleDate}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" interval={'preserveStartEnd'} />
          <XAxis dataKey='schedule_date' onClick={()=>console.log()}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey='lunch'stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey='dinner' stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    :<ResponsiveContainer className='mt-5' width="100%" aspect={3}>
        <LineChart
          width={800}
          height={300}
          data={meals}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" interval={'preserveStartEnd'} />
          <XAxis className='xkey' dataKey='schedule_date' onClick={()=>setShow(true)}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey='lunch'stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey='dinner' stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>}
      <div className='d-flex justify-content-center'>
      <Button className='btn primary-outline' onClick={()=>setShow(!show)}>{show?'All Schedule':'Individual Schedule'}</Button>
      </div>
    {show&&<div className='d-flex justify-content-around mt-5'>
     <div>
       <p className='mb-2'>Use the calendar for Individual date schedule</p>
      <Calendar onChange={onChange} value={value} />
    </div>
    <div>
      <h4>{singleDate[2]?.schedule_date}</h4>
      <hr className='25%'></hr>
          <p>{singleDate[2]?.timeData[0].noon}-{singleDate[2]?.timeData[0].item} Schedules</p>
          <p>{singleDate[2]?.timeData[1].night}-{singleDate[2]?.timeData[1].item} Schedules</p>
          
      
    </div>
     </div>}
      </>
  );
}

export default App;

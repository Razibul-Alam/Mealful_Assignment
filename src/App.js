import React,{useState,useEffect} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function App() {
  const allData=[
    {month:2020,person:10},
    {month:2021,person:20},
    {month:2022,person:30}
  ]
  const[meals,setMeals]=useState([])
  useEffect(()=>{
fetch('./Data.json')
.then(res=>res.json())
.then(data=>setMeals(data))
  },[])
  console.log(meals)
  const itemByDate=meals?.filter(meal=>new Date(meal.item_date).getFullYear()=='2021')
  console.log(itemByDate)
  // const date=new Date('2021-06-19')
  // console.log(date.getMonth()+1)
  // const allMonths=[1,2,3,4]
  const allMonths=['january','February','March','April','May','June','July','August','Sep','Nov','Dec']
  return (
    <>
    <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={800}
          height={300}
          data={allData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" interval={'preserveStartEnd'} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey='person'stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey='person' stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </>
  );
}

export default App;

import React,{useState,useEffect} from 'react'
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function App() {
  const[meals,setMeals]=useState([])
  const [value, onChange] = useState(new Date());
  console.log(value.toLocaleDateString())
  useEffect(()=>{
fetch('./Data.json')
.then(res=>res.json())
.then(data=>setMeals(data))
  },[])
 
 
 
  useEffect(()=>{
    const datedata=meals?.find(item=>item.schedule_date=='3/4/2022')
    const datedata1=meals?.find(item=>item.schedule_date=='4/4/2022')
    const datedata2=meals?.find(item=>item.schedule_date=='5/4/2022')
    console.log(datedata,datedata1,datedata2)
    setMeals([datedata,datedata1,datedata2])
  },[value])
console.log(meals)

  // const dateitems=oneMonthitems?.filter(item=>new Date(item.schedule_time).getDate()=='20')
//    function dfunc (arr){
// for(let j=0;j<arr.length;j++){
// let el=arr[j]
// if(datesArray.indexOf(el.item_date)==-1){
//   datesArray.push(el)
// }
// }
//    }
//    dfunc(oneMonthitems)

// console.log(datesArray)

  // let el;
  // const something=(arr)=>{
  //   for(let i=0;i<arr.length;i++){
  //      el=meals[i]
      
  // }
  // itemsArray.push({date:el?.schedule_time,items:arr.length,type:el?.slot})
  // }
  // something(dateitems)
// console.log(itemsArray)

  

  return (
    <>
    <ResponsiveContainer width="100%" aspect={3}>
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
          <XAxis dataKey='schedule_date' onClick={()=>console.log()}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey='lunch'stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey='dinner' stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <div>
      <Calendar onChange={onChange} value={value} />
    </div>
      </>
  );
}

export default App;

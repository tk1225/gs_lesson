import React from 'react';
import {PieChart,Pie ,Tooltip} from 'recharts';
import {useContext} from "react"
import {UserContext} from "../provider/UserProvider"


import { Select } from "@chakra-ui/react"




export const Graph = (props) => {
  
  const data01 = props.portfolio
  
  console.log(data01)

  const context=useContext(UserContext)
  console.log(context)

  return (
<>



<PieChart width={730} height={250}>
    <Pie data={data01} dataKey="value" nameKey="stock" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
    <Tooltip />
</PieChart>


</>
  );
};
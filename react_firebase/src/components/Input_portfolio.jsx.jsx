// InputForm.jsx
import React, { useState } from "react";
import firebase from "../firebase";
import { Input } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"
import {Graph} from "./graph.jsx"
import {Sell} from "./sell.jsx"

export const Input_portfolio = () => {

  //購入textbox内のものが入る
  const [value, setValue] = useState("")

  //購入textbox内のものが入る
  const [stock_amount, setAmount] = useState(100)

  //portfolioのState
  const [portfolio, setPortfolio]=useState(
    [{
    "stock": "AAPL",
    "value": 400,
  },
  {
    "stock": "TSLA",
    "value": 300
  }]
  )



  const handleChange = (event) => setValue(event.target.value)

  const handoleamountChange = (event) => setAmount(event.target.value)

  //書き込みの準備
  var database = firebase.database();


    
  

  //ボタンが押されると発火する関数
  const send_firebase=()=>{
    const tmp_portfolio=portfolio.concat()
    
    const serch_stock = value;
    try{
    const targetStock = tmp_portfolio.find((v) => v.stock === serch_stock);
    console.log(targetStock);
    targetStock.value=targetStock.value+Number(stock_amount)
    console.log(tmp_portfolio)
    setPortfolio(tmp_portfolio)
  }catch(e){
    const add_stock={
      "stock": value,
      "value": Number(stock_amount)
    }
    tmp_portfolio.push(add_stock)
    setPortfolio(tmp_portfolio)

  }
    //仮のUserID
    const userid="test"
    
    firebase.database().ref(userid).set({
      portfolio,
    });
   
  }


  return (
    <>

    <Text mb="8px">Value: {value}{stock_amount}</Text>
    <Button colorScheme="blue" onClick={send_firebase}>追加</Button>
    
    <Input
      
      value={value}
      onChange={handleChange}
      placeholder="銘柄名"
      size="sm"
    />

    <NumberInput defaultValue={100} min={0}>
        
        <NumberInputField 
         value={stock_amount}
      onChange={handoleamountChange}/>
        <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    
    <Graph portfolio={portfolio}/>

    <Sell portfolio={portfolio} setPortfolio={setPortfolio}/>

   
    

  </>
  );
};
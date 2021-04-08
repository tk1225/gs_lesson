import React, { useContext ,useState } from "react";


import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from "@chakra-ui/react"
  import { Box } from "@chakra-ui/react"
  import { Select } from "@chakra-ui/react"
  import { Button, ButtonGroup } from "@chakra-ui/react"

export const Sell = (props) => {
    //売却textbox内のものが入る
    const [sellvalue, setSellValue] = useState(100)
    const [sellstock,setSellStock]=useState("")

    const handleChange = (valueAsNumber) => setSellValue(valueAsNumber.target.value)
    const handleStockChange=(val)=>setSellStock(val.target.value)
   
    const handle_buy_btn=()=>{
      console.log(props.portfolio)

      //Reactの仕様上リストやオブジェクトはコピーしてからでないと
      //更新できない
      const portfolio=props.portfolio.concat()

      const serch_stock = sellstock;
      const targetStock = portfolio.find((v) => v.stock === serch_stock);
      console.log(targetStock);
      console.log(sellvalue)
      targetStock.value=targetStock.value+sellvalue
      console.log(portfolio)

      props.setPortfolio(portfolio)
    }

    const handle_sell_btn=()=>{
        
        console.log(props.portfolio)

        //Reactの仕様上リストやオブジェクトはコピーしてからでないと
        //更新できない
        const portfolio=props.portfolio.concat()

        const serch_stock = sellstock;
        const targetStock = portfolio.find((v) => v.stock === serch_stock);
        console.log(targetStock);
        console.log(sellvalue)
        targetStock.value=targetStock.value-sellvalue
        console.log(portfolio)

        props.setPortfolio(portfolio)
        
      

        


    }
    
    const portfolio=props.portfolio
    return (
  <>
    <Box bg="tomato" w="100%" p={4} color="white">
      {portfolio.map(function(e){
        return <li>{e.stock}/{e.value}</li>
      })}
    
    </Box>

    <Select placeholder="stock" onChange={handleStockChange}>
    {portfolio.map(function(e){
        return <option value={e.stock}>{e.stock}</option>
      })} 
    </Select>

    <NumberInput defaultValue={100} min={0}>
        
      <NumberInputField 
       value={sellvalue}
    onChange={handleChange}/>
      <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
    
    <Button  colorScheme="blue" onClick={handle_buy_btn} >買う</Button>
    <Button colorScheme="blue" onClick={handle_sell_btn}>売る</Button>
  
    <p>{sellstock}:{sellvalue}</p>



  </>
    );
  };
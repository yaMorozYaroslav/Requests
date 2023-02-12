import React from 'react'
import {Box, Text, Button} from '../Upper/Upper.styled.js'

export function Entity(){
   const initialState = {click0: 0, click1: 0}
   const [state, setState] = React.useState(initialState)
   
   const handleChange0 = () => {state.click0===0
		                     ?setState(({...state, click0: 1}))
		                     :setState(({...state, click0: 0}))
							 }
   const handleChange1 = () => {state.click1===0
		                     ?setState(({...state, click1: 1}))
		                     :setState(({...state, click1: 0}))
							 }
  //   onClick={clicks.click1===0 ? ()=>setClick({...clicks, click0: 1}):({...clicks, click0: 0})}>

  return  (
	<>
	<Box title='ColorBox' state={state}/>
	
	<Text state={state}>
	    {state.click0 === 1  ? 'Blue Box': null}
	    {state.click1 === 1  ? 'Grey Box': null}
	    {state.click0 === 0 && state.click1 === 0 ? 'Green Box': null}
    </Text>
		           
	<Area title='FirstButt' 
	      disabled={state.click1 === 1}
	      numb={state.click0}
	      onClick={handleChange0}
	      onDoubleClick={null}/>
	      
	<Area title='SecondButt'
	      disabled={state.click0 === 1}
	      numb={state.click1}  
	      onClick={handleChange1}/>
	</>
	)
	}

function Area({numb, title, disabled, onClick}){

	return <Button 
	           title={title}
	           onClick={onClick}
	           disabled={disabled}
	           >{numb}  </Button>
	           
	}

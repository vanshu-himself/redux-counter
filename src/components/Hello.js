//getstate method gives current state of the store;
//dispatch() is a method to update the state pf store;
import React from "react";
import { useDispatch,useSelector } from "react-redux";

import { decrease, increase, reset } from "../redux/actions/counterAction";
const Hello=()=>{
    const count = useSelector(state=>state)
    let dispatch=useDispatch();
    return(
        // console.log(useSelector(state => state))
        <div>
     <h1>{count}</h1>
        <>
        <button onClick={()=>dispatch(increase())}>Increase</button>
        <button onClick={()=>dispatch(decrease())}>Decrease</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        
        </>
        </div>
    )

}
export default Hello;
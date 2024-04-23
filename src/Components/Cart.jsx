import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add , removeitem, removeone } from "../store/Slices/Cart";





export default function Cart() {

    const [total, setTotal] = useState(0);

    const dispatch = useDispatch()
    function addtoCart(item) {
        dispatch(add(item))
        
      }

    function remove1(item) {
        dispatch(removeone(item))
        
      }
    function removeall(item) {
        dispatch(removeitem(item))
        
      }

    const cart = useSelector(state => state.Cart)
    useEffect( () => {
      // setTotal(0)
      //   cart.forEach(item => {  setTotal(total + (item.price * item.count))

            
      //   },);
      let totalPrice = 0;
      // console.log(totalPrice);
        cart.forEach(item => {
            totalPrice += (item.price * item.count); setTotal(totalPrice);});
            
    },[cart])
  
    //  var x = cart.length
    

    return(
        <>
        <h1>Your Cart :</h1>
        <div className="row" >

                               {/* لو فيه في الكارت حاجة موجودة هاتلي كل واحدةفيهم واهملي الحاجات دي */}
    {
        cart && cart.map((item)=>{

            
            return( <div className="card col-lg-3 col-md-4 col-xs-12 col-sm-6" key={item.id}  >
            <img src={item.image} className="card-img-top " style={{ width: "300px", height: "200px" }} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.title.slice(0,20)}....</h5>
              <p className="card-text">{item.description.slice(0,50)}.....</p>
              <p className="card-text text-success ">{item.price*item.count} EGP</p>
              <p className="card-text">{item.count}</p>
              <button className="btn btn-info mx-1" onClick={() => {remove1(item)}} >-</button>
              <button className="btn btn-danger mx-1" onClick={() => {removeall(item)}} >Remove</button>
              <button className="btn btn-info mx-1" onClick={() => {addtoCart(item)}} >+</button>
            </div>
          </div>
          

                
            )
        })
    }
        <h3>Total Price = {Math.round(total)} EGP </h3>



    </div>
        
        </>

    )
    
}

import axios from "axios";
import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../store/Slices/Cart";
import Spinner from "./Spinner";
export default function Main() {
  const [item, setitem] = useState();
  const x = [];
  const [spinner, setSpinner] = useState(true)
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setitem(res.data);
      })
      .catch((err)=> {
        console.log(err);
      });
    setSpinner(false);
  },[]);
  
  const navigate = useNavigate()

  function toDetails(item) {
    navigate(`/Product/${item.id}` , {state: { item }}

    )
    
  }
  const dispatch = useDispatch()


  function addtoCart(item) {
    dispatch(add(item))
    
  }
 
  



    return(<>
    {spinner && <Spinner/>}


    <div className="row" >

                               {/* لو الايتم موجودة هاتلي كل واحدةفيهم واهملي الحاجات دي */}
    {
        item && item.map((item)=>{
            return( <div className="card col-lg-3 col-md-4 col-xs-12 col-sm-6" key={item.id}  >
            <img src={item.image} className="card-img-top " style={{ width: "300px", height: "200px" }} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.title.slice(0,20)}....</h5>
              <p className="card-text">{item.description.slice(0,50)}.....</p>
              <p className="card-text text-success ">{item.price} EGP</p>
              <button className="btn btn-info mx-1" onClick={() => {toDetails(item)}} >More Details</button>
              <button className="btn btn-success mx-1" onClick={() => {addtoCart(item)}} >Add to Cart</button>
            </div>
          </div>
                
            )
        })
    }



    </div>
    

    </>) ;
}

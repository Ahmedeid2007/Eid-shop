import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export default function Product() {

    const [item, setItem] = useState()
    const location = useLocation()

    useEffect(() => {setItem(location.state.item)}
    )

    return(
        <>

        { item &&  <div className="card " >
            <img src={item.image} className="card-img-top " alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text text-success ">{item.price} EGP</p>
            </div>
          </div>
                
            
        }
        
        </>  


    )
    
}
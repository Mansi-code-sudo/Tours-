import { useState } from "react";


function Card({id,info,name,price,image,deleteHandler}){

    const [valRM,setValRM]=useState(false);

    const description=(valRM)? info:`${info.slice(0,200)}...`;

    function clickHandler(){
        setValRM(!valRM);
    }

    return(
        <div>
            <div><img src={image}></img></div>
            <div>
                <div>{price}</div>
                <div>{name}</div>
                <div>{description}<span onClick={clickHandler}>{valRM? 'show less':'read more'}</span></div>
            </div>
            <button onClick={()=> deleteHandler(id)}>
                Not Interested</button>
        </div>
    )
}

export default Card;
import React, { memo, useMemo } from 'react'

export const Boi = ({fetchdata}) => {
    console.log("generating...");
/*     const[num,setNum]=useState("");
    useEffect(()=>{
        setNum(fetchdata(5))
    },[]) */

            //(OR)

  let num =   useMemo(()=>fetchdata(10),[fetchdata])

  return (
    <div>{num}</div>
  )
}

export default memo(Boi);

import { useState } from 'react'

function Counter() {
    const [count, setcount] = useState<number>(0);
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>
            INC
        </button>
    </div>
   
    
  )
}

export default Counter
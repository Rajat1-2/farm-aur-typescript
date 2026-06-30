// import a inrtface
import type {Chai} from "../types"
import { ChaiCard } from "./ChaiCard"

interface ChaiListprops{
    items: Chai[]
}
function ChaiList({items}:ChaiListprops) {
  return (
    <div>
        {items.map((chai)=>(
            <ChaiCard 
            key={chai.id}
            name={chai.name}
            price={chai.price}
            isspec={chai.price>30}

            />

        ))}
    </div>
  )
}

export default ChaiList
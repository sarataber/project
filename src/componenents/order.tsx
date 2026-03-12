import { Fragment } from "react/jsx-runtime"
import Line from "./lineOrder"
import Add from "./request"

interface Orderprops {
    user: string
}

const arr = [{ x: 1,id:555 }, { x: 2,id:89 }, { x: 3,id:55 }]
const Order = ({ user }: Orderprops) => {

    return <>
        order data:
        {arr.map(item =><Fragment key={item.id}  > <Line name={user}   /> <button>select order</button></Fragment>)}
        <Add/>
        {/* <button onClick={() => localStorage.setItem("user", "sara")}>{user} לקוח</button></> */}
    </>
}


export default Order

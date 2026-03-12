import { useContext } from "react";
import { ColorContext } from '../context/colorContext'

const SelectColor = () => {

    const { setColor ,color} = useContext(ColorContext)
    return <input type="color" onChange={(x) => setColor(x.currentTarget.value)} />
}


export default SelectColor
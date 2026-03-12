import { useContext } from "react";
import { ColorContext } from '../context/colorContext'

const ShowColor = () => {

    const { color } = useContext(ColorContext)
    return <div style={{backgroundColor:color}}>שלום וברכה</div>
}


export default ShowColor
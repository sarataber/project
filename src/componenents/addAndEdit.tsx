import axios from "axios";
import { useEffect, type FormEvent } from "react"
import { useActionData, useLoaderData, useLocation } from "react-router-dom"

const AddAndEdit = () => {

    const { pathname } = useLocation();

    const data = useLoaderData()

    const send = useActionData()
    useEffect(() => {


    }, [])

    // const sendData = async(e: FormEvent) => {
    //     e.preventDefault();

    //     if (pathname.toLowerCase() == "editbook") {
    //         const data = await axios.put(`http://mydomain.com/book`, s)
    //         return data.data
    //     }

    //     else{
    //          const data = await axios.post(`http://mydomain.com/book`, s)
    //         return data.data 
    //     }
    // }
    return <>
        <form action={send} onSubmit={sendData}>
            <input type="text" name="book" value={data.name} />
            <button> send Data</button>
        </form>

    </>
}

export default AddAndEdit
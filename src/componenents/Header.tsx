import { Link } from 'react-router-dom'



const Header = () => {

    return <>
        <div>לוגו</div>

        <div>sara</div>
        <Link to="login">כניסה</Link>
        <Link to="order">הזמנות שלי</Link>
        <Link to="add">add</Link>
        <div>שלום וברכה ל</div>

        <hr />
    </>
}
export default Header
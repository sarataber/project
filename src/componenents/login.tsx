interface LoginProps {
    send: (str: string) => void
}

const Login = ({send}:LoginProps) => {


    return <><button onClick={() => send( "hhhh")}>שמירת לקוח</button></>
}


export default Login

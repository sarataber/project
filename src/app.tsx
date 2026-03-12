import Button from '@mui/material/Button';
import './App.css'

import BUtton from './buttones'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Header from './componenents/Header';
import HeaderTest from './componenents/headertest';
import Help from './componenents/help'
import { Outlet } from 'react-router-dom';


const App = () => {

    // const [name, setName] = useState("")

    // const { color } = useContext(ColorContext);

    return <div>
        <Header />
        <Outlet />
        {/* <Help/> */}

        {/* <HeaderTest/>
        <BUtton />
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            my name is</Alert>
        <Button>click on me</Button> */}

        {/* <Outlet />
        <ShowColor />
        <SelectColor />
        <hr />
        <Header userName={name} />
        <Login send={setName} />

        <Box color='green' width='250px' ><div>סתם מלל</div></Box>
        <Box color='pink' width='150px'>
            <Box color='red' width='100px'>
                <Box color={color} width='50px'><></></Box>
            </Box>
        </Box>

        <Order user={name} />
        <Add />
        <div>גוף/ניתובים/outlet</div>
        <div>סיומת</div> */}

    </div>
}


export default App;
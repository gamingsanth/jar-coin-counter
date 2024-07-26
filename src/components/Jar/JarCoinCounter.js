import { useEffect, useState } from "react";
import Jar from "./Jar";
import Button from "./IconButton";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import LockResetIcon from '@mui/icons-material/LockReset';

const SERVER_URL = "https://jar-coin-counter-backend.onrender.com";


function JarCoinCounter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        axios.put(SERVER_URL + "/count").then((response) => {
            setCount(prev => prev + 1);
        }).catch((err) => {
            //
        });
       
    }

    const handleReset = () => {
        axios.put(SERVER_URL + "/reset");
        setCount(0);
    }

    useEffect(() => {
        axios.get(SERVER_URL + "/count").then(res => {
            setCount(res.data.count);
        })
    });
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div>
                <Jar counter={count} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "20px" }}>
                {/* <div><Button color={"red"} name={"Reset"} icon={<LockResetIcon />} onCall={handleReset} /></div> */}
                <div><Button color={"purple"} name={"Increment"} icon={<AddIcon />} onCall={handleIncrement} /></div>
            </div>
        </div>
    );
}

export default JarCoinCounter;
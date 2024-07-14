import { useEffect, useState } from "react";
import Jar from "./Jar";
import Button from "./IconButton";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";

const SERVER_URL = "http://localhost:3001";


function JarCoinCounter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        axios.put(SERVER_URL + "/count");
        setCount(prev => prev + 1);
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
            <div>
                <div><Button color={"purple"} name={"Increment"} icon={<AddIcon />} onCall={handleIncrement} /></div>
            </div>
        </div>
    );
}

export default JarCoinCounter;
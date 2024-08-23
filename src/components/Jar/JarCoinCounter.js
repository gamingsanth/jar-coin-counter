import { useEffect, useState } from "react";
import Jar from "./Jar";
import Button from "./IconButton";
import AddIcon from '@mui/icons-material/Add';
import axios from "axios";
import LockResetIcon from '@mui/icons-material/LockReset';
import { CircularProgress } from "@mui/material";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;


function JarCoinCounter() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const handleIncrement = () => {
        axios.put(SERVER_URL + "/count").then((response) => {
            setCount(prev => Number(prev) + 1);
        }).catch((err) => {
            //
        });
       
    }

    const handleDecrement = () => {
        if(count > 0) {
            axios.put(SERVER_URL + "/decrease");
            setCount(prev => prev - 1);
        }
    }

    const handleReset = () => {
        axios.put(SERVER_URL + "/reset");
        setCount(0);
    }

    useEffect(() => {
        axios.get(SERVER_URL + "/count").then(res => {
            setIsLoading(() => false);
            setCount(res.data.count);
        })
    });
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div>
            {isLoading && <CircularProgress style={{ marginBottom: "50px" }} color="secondary" />}
            {(!isLoading) && <Jar counter={count} />}
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center", gap: "20px" }}>
                <div hidden><Button color={"red"} name={"Reset"} icon={<LockResetIcon />} onCall={handleReset} /></div>
                <div><Button color={"purple"} name={"Increment"} icon={<AddIcon />} onCall={handleIncrement} /></div>
                <div><Button color={"blue"} name={"Decrement"} icon={<AddIcon />} onCall={handleDecrement} /></div>
            </div>
        </div>
    );
}

export default JarCoinCounter;

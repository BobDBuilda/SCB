import { error } from "console";

const establishConnection = async() => {
    try{
        const res = await fetch("http://localhost:3000");

        if(!res.ok){
            throw new Error("server no good");
        }

        const data = await res.json();
        console.log("conn established");
    }catch(error){
        console.error("failed");
    }
}

export {establishConnection};
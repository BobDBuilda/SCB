const establishConnection = async() => {
    try{
        // Changed from http://localhost:3000 to relative /api path for Cloudflare Pages/Functions
        const res = await fetch("/api");

        if(!res.ok){
            throw new Error("server no good");
        }

        const data = await res.json();
        console.log("conn established");
    }catch(error){
        console.error("failed", error);
    }
}

export {establishConnection};
import { useEffect, useState } from "react"
import useInternetStatus from "./useInternetStatus";

const Online = () => {

    const isOnline = useInternetStatus()

    return(
        <>
            <div>{isOnline ? "Connected to internet" : "Not connected to internet"}</div>
        </>
    )

}

export default Online;
import { useEffect, useState } from "react";

function useInternetStatus(){
    const [isOnline, setOnline] = useState(true);

    useEffect(() => {

        function handleOnline(){
            setOnline(true);
        }

        function handleOffline(){
            setOnline(false);
        }

        window.addEventListener('online',handleOnline)
        window.addEventListener('offline',handleOffline)
        return(() => {
            window.removeEventListener('online',handleOnline)
            window.removeEventListener('offline',handleOffline)
        })

    },[])

    return isOnline;
}

export default useInternetStatus;
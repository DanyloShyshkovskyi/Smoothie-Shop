import {useEffect, useState} from "react";

function useWindowSize() {
    const isWindowClient = typeof window === "object";

    const [windowSize, setWindowSize] = useState(
        isWindowClient
            ? window.innerWidth //👈
            : 0
    );

    useEffect(() => {
        //a handler which will be called on change of the screen resize
        function setSize() {
            setWindowSize(window.innerWidth); //👈
        }

        if (isWindowClient) {
            //register the window resize listener
            window.addEventListener("resize", setSize);

            //unregister the listerner on destroy of the hook
            return () => window.removeEventListener("resize", setSize);
        }
    }, [isWindowClient, setWindowSize]);

    return windowSize;
}

export default useWindowSize;
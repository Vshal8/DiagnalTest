import React, { createContext, useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { windowHeight, windowWidth } from "../library/utils/globalConstants";
import { iOrientationTypes } from "../library/utils/interfaces";


const OrientationContext = createContext<iOrientationTypes>({ currentOrientation: 'portrait', width: windowWidth, height: windowHeight });

export const useOrientation = () => useContext(OrientationContext);


const OrientationProvider = ({ children }: any) => {
    const [orientation, setOrientation] = useState<iOrientationTypes>({ currentOrientation: 'portrait', width: windowWidth, height: windowHeight });

    useEffect(() => {
        Dimensions.addEventListener('change', ({ window, screen }) => {
            if (window.height > window.width) {
                setOrientation({ currentOrientation: 'portrait', width: windowWidth, height: windowHeight })
            }
            else {
                setOrientation({ currentOrientation: 'landscape', width: windowHeight, height: windowWidth })
            }
        })
    }, [])

    return (
        <OrientationContext.Provider value={orientation}>
            {children}
        </OrientationContext.Provider>
    );
}

export default OrientationProvider
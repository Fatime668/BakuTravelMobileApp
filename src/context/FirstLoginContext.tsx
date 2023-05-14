import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

interface FirstLoginProviderProps {
    firstLogin: boolean
    setFirstLogin(item: any): void;
}

export const FirstLoginContext = createContext<FirstLoginProviderProps>({
    firstLogin: true,
    setFirstLogin: () => { }
});



export const FirstLoginProvider = ({ children }: any) => {

    const [firstLogin, setFirstLogin] = useState(false);
//    AsyncStorage.clear()
    const values: FirstLoginProviderProps = {
        firstLogin, setFirstLogin
    }
    return (
        <FirstLoginContext.Provider value={values} >
            {children}
        </FirstLoginContext.Provider >
    );
};
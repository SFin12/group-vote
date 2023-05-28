// Type: Context

import { createContext, useContext, useState } from "react";

const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    return (
        <UserContext.Provider value={{ session, setSession }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUserContext = () => useContext(UserContext);
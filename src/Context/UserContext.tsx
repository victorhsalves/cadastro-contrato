import { createContext, ReactNode, useEffect, useState } from "react";

type UserContextProps = {
    children: ReactNode
}

type UserContextType = {
    user: UserType,
    setUser: (newUser: UserType) => void
}

type UserType = {
    name: string,
    username: string,
    token: string
}

const defaultValue = {
    user: {
        name: '',
        username: '',
        token: ''
    },
    setUser: () => {}
}

export const UserContext = createContext<UserContextType>(defaultValue);


export const UserContextProvider = ( { children } : UserContextProps) => {
    
    const [ user , setUser ] = useState<UserType>({name: '', username: '', token: ''});

    useEffect(() => {
        const userStorage = localStorage.getItem('user');
        if (userStorage) {
            setUser(JSON.parse(userStorage));
        }
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

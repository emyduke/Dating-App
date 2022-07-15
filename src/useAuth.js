import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as Google from 'expo-google-app-auth'

const AuthContext = createContext({
    // initial state...
})


export const AuthProvider = ({ children }) => {

    const signinWithGoogle = async () => {
        await Google.logInAsync()
    }

    return (
        <AuthContext.Provider value={{user: "Emmy"}}>
            {children}
        </AuthContext.Provider>
    )
}


export default function useAuth() {
    return useContext(AuthContext)
}
import React,{createContext} from "react"

export const UserContext =createContext({})

export const UserProvider=(props)=>{
    const {children}=props;
    const contextName="aaa"
    return(
          //valueに渡すことでグローバルなステートになる
            <UserContext.Provider value={{contextName}}>
                {children}
            </UserContext.Provider>
    )
}

import axios from 'axios';
import { createContext,useState,useEffect } from 'react';

export const UserContext = createContext({}) ;

// we have to wrap the entire application in the userContextProvider
//so it will take all the children as its paramter
// in the function below we can run all of the code that we need to apply to the entire application
export function UserContextProvider({children}){
    const [user,setUser] = useState(null);
    // useEfect will fireoff everytime a page renders
    //so everytime you go to a different page you are pretty much able to tell if there is a user or not
    useEffect(() => {
        if(!user){
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
        }

    },[]) // at the end of useEffect we have to add an empty array dependency
    return (
        <UserContext.Provider value={{ user, setUser} } >
            {children}
        </UserContext.Provider>
    )

}
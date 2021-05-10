import React from 'react'
import { useUser } from "./context/user"
import Channel from "./components/Channel"
const App = () => {
    const {user, login} = useUser()
    return (
        <div>
            {user ? <Channel /> : <button onClick={login}>Login with google</button>}
        </div>
    )
}

export default App

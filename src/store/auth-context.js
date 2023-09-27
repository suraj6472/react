import React from 'react'

const AuthContext = React.createContext({ // this AuthContext is an object which contains component
    isLogin: true,
})


export default AuthContext;
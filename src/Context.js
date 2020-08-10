import React from 'react'

const UserContext = React.createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
  create: ()=> {}
})

export default UserContext


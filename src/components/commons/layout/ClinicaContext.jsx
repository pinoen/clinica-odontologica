import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false)

  const handleLog = () => {
    setIsLogged(prev => !prev)
  }

  const store = {
    isLogged,
    handleLog
  }

  return (
    <AuthContext.Provider value={store}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
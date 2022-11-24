import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext();
export const useThemeContext = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {

  const [navOpened, toggleNavOpened] = useState(false)
  const [profileOpened, setProfileOpened] = useState(false)

  return (
    <ThemeContext.Provider value={{ navOpened, toggleNavOpened, profileOpened, setProfileOpened }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
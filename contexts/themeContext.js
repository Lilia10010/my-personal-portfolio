import { createContext, useState } from 'react'
import { lightTheme, darkTheme } from '../styles/themes';


export const StyledThemeContext = createContext({});

export function ThemeProvider({ children }){
    const [theme, setTheme] = useState(darkTheme)
    const currentTheme = theme.title
    console.log('darkTheme', currentTheme)

    //const { dark, light } = useContext(StyledThemeContext)
    
    const toggleTheme = () => {
        setTheme(theme.title === 'dark' ?  lightTheme : darkTheme )        
     //  console.log('cuu', theme.body)     
      }

    
    return(
        <StyledThemeContext.Provider theme={theme}
            value={{
                theme,
                toggleTheme,
                currentTheme
            }}
        >
            {children}
        </StyledThemeContext.Provider>
    )

} 
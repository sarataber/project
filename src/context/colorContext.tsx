import { createContext, useState, type ReactNode } from "react"


interface ColorProviderProps {
    children: ReactNode
}

export const ColorContext = createContext({color: "", setColor: (str: string) => { } })

const ColorProvider = ({ children }: ColorProviderProps) => {

    const [color, setColor] = useState("");

    

    return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>
}

export default ColorProvider
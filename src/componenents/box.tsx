import type { ReactNode } from "react"

interface BoxProps {
    width: string
    color: string
    children: ReactNode
}

const Box = ({ width, color, children }: BoxProps) => {


    return <div style={{ width, height: width, backgroundColor: color }}>
        {children}
    </div>
}

export default Box
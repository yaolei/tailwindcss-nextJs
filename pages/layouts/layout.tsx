import React, {useState, useEffect} from 'react'
import Header from './header'
interface text {
    name:string,
    btn_msg:string
    children:JSX.Element
}

const Layout:React.FC<text> = ({name, btn_msg, children}) => {
    const [nam, setNam] = useState('')

    useEffect(() => {

    },[])

    return (
        <div className='h1 w-12'>
            {name}
            <br />
            <button  onClick={Header} >{btn_msg}</button>
            {children}
        </div>
    )
}

export default Layout;
import React from 'react'
import { useHistory } from 'react-router'

export const Button = ({text}) => {

    const history = useHistory()
    const routeToHomepage = () => history.push("/") 

    return (
        <button className="bg-yellow-400 text-blue-800 px-4 py-2 rounded my-8 font-mono font-bold" onClick={routeToHomepage}>
            {text}
        </button>
    )
}

import React, { useState } from "react"

const MoneyContext = React.createContext();

function MoneyProvider({ children }) {
    const [money, setMoney] = useState(100)
    return (
        <MoneyContext.Provider value={{ money, setMoney }}>
            { children }
        </MoneyContext.Provider>
    )
}

export { MoneyProvider, MoneyContext };
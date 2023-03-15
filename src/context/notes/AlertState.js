import React, { useState} from 'react'
import AlertContext from './AlertContext';



const AlertState=( props )=> {
    
    const [Alert, setAlert] = useState(null)
    const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    return(
<AlertContext.Provider value={{ alert:Alert, showAlert  }}>
{props.children}
</AlertContext.Provider>
    )
}
export default AlertState

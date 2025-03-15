import React, { useEffect, useState } from 'react'

const TodoDateTime = () => {
    const [dateTime, setDateTime] = useState("");

    useEffect(()=>{
        const interval = setInterval(() => {
            const nowDate = new Date();
            const formattedDate = nowDate.toLocaleDateString();
            const formattedTime = nowDate.toLocaleTimeString();
            setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);
        return () => clearInterval(interval);
    },[]);

  return <h2 className='date-time'>{dateTime}</h2>
}

export default TodoDateTime

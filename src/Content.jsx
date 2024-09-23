import React, { useState } from 'react'

const Content = () => {
    const [name, setName] = useState('Sushil');
    const [count,setCount] =useState(0);

    const handleNameChange = () => {
        const names = ['Sushil', 'Sugam', 'Sushant']
        const int = Math.floor(Math.random() * 3)
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count+1)
    }


  
    return (
        <div>
            <p>Hello {name} </p>
            <button onClick={handleNameChange}>Change Name</button>

            <p>Count: {count}</p>
            <button onClick={handleClick}>Add +1</button>
   

        </div>
    )
}

export default Content
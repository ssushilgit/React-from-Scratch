import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Sushil', 'Sugam', 'Sushant']
        const int = Math.floor(Math.random() * 3)
        return names[int];
    }

    const handleClick = () =>{
        console.log("Button was clicked")
    }

    const handleClick2 = (name) =>{
        console.log(`${name} was clicked`)
    }

    const handleClick3 = (e) =>{
        console.log(e.target.innerText)
    }
    return (
        <div>
            <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
            <button onClick={handleClick}>Click Here</button><br/>
            <button onClick={() => handleClick2('Sushil')}>Click Here</button><br/>
            <button onClick={(e) => handleClick3(e)}>Click Here</button>
            
        </div>
    )
}

export default Content
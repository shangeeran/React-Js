import React from 'react'

// function Greet() {
//     return <h1>Hello Shanga</h1>
// }

const Greet = props => {
console.log(props)
return (
    <div>
        <h1>Hello, {props.name} and {props.heroName}</h1>
        {props.children}
    </div>
)

}

export default Greet
import React from 'react'

const Hello = () => {
    // return (
    //     <div className= 'dummyClass'>
    //         <h1>Welcome Shanga</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'hello', class: 'dummyClass'},
        React.createElement('h1', null, 'Hello shangeeran')
      )

}

export default Hello
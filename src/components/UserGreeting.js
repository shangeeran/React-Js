import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Welcome Shanga</div>

        // return this.state.isLoggedIn ? (
        //         <div>Welcome Shanga</div>
        //     ) : (
        //         <div>Welcome Guest</div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Shanga</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // if (this.state.isLoggedIn){
        //     return (
        //         <div>
        //             <div>Welcome Shanga</div>
        //         </div> 
        //     )
        // } else {
        //     return(
        //         <div>
        //             <div>Welcome Guest</div>
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome Shanga</div>
        //         <div>Welcome Guest</div>

        //     </div>
        // )
    }
}

export default UserGreeting

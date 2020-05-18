import React, {Component} from 'react'

// class Welcome extends Component {
//     render() {
//         return (
//             <h1>
//                 Welcome {this.props.name} and {this.props.heroName}
//             </h1>
//         )
//     }
// }

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.props
        return (
            <h1>
                Welcome {name} and {heroName}
            </h1>
        )
    }
}

export default Welcome
// Class Component
import React from 'react'
import { Link } from 'react-router-dom'

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.initialMessage,
            fName: "",
            lName: ""
        }

        this.onClickHandler = this.onClickHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onClickHandler() {
        this.setState({ name: "Log me in" })
    }
    onChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value })
        console.log(this.state)
    }
    render() {

        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.onClickHandler}>Enter Name</button>
                First Name<input onChange={this.onChangeHandler} name="fName" value={this.state.fName}></input>
                Last Name<input onChange={this.onChangeHandler} name="lName" value={this.state.lName}></input>
                <Link to="/signup">Sign Up</Link>
            </div>

        )
    }


}
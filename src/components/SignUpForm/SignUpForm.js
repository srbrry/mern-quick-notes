import {Component} from "react"
import {signUp} from "../../utilities/users-service"

export default class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            error: ""
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // alert(JSON.stringify(this.state))

        // try something if successful
        try {

            // taking the state and making a copy of the state and assigning it to formData var
            const formData = {...this.state}
            // deleting the properties we don't want
            delete formData.error
            delete formData.confirm
            console.log(formData)

            // wait for a response back from the server
            const user = await signUp(formData)
            this.props.setUser(user)

        } catch (error) {
            console.error(error)
            // if it doesn't error handle
            this.setState({
                error: 'Sign up failed - try again later!'
            })
        }
    }
    
    render() {
        const disable = this.state.password !== this.state.confirm

        return (
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Confirm</label>
                    <input
                        type="password"
                        name="confirm"
                        value={this.state.confirm}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit" disabled={disable}>Sign Up</button>
                </form>
                <p className="error-message">{this.state.error}</p>
            </div>
        )
    }
}
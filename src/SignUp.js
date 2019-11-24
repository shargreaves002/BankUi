import React from 'react';
import LinkButton from "./utils/LinkButton";
import Api from './utils/Api';
// import 'rxjs';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card } from "shards-react";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {first_name: ''};
        this.state = {last_name: ''};
        this.state = {email: ''};
        this.state = {street_number: ''};
        this.state = {street_name: ''};
        this.state = {city: ''};
        this.state = {state: ''};
        this.state = {zip: ''};
        this.state = {password: ''};
        this.state = {message: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        // Get the data from the form to send to the database
        const customer = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email.toLowerCase(),
            address: {
                street_number: this.state.street_number,
                street_name: this.state.street_name,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip
            },
            password: this.state.password
        };
        // Check to see if that email is registered yet
        Api.get("/customers").then(data => {
            if (JSON.stringify(data.data).includes(this.state.email.toLowerCase())){
                this.setState({message: "This email has already been registered, please sign in."});
            } else {
                // send the data to the database
                Api.post("/customers", customer).then(() => {
                    this.setState({message: "Profile created successfully! You may now sign in."});
                }).catch(err => {
                    this.setState({message: "It looks like there was an error creating your profile, please try again later."});
                    // rxjs.throwError(err);
                    console.log(err);
                });
            }
        }).catch(err => {
            this.setState({message: "It looks like there was an error fetching data, please try again later."});
            // rxjs.throwError(err);
            console.log(err);
        });
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <Card className="mt-4 mx-auto text-center" style={{maxWidth: "1000px"}}>
                <h5 className="card-header text-center">Thank you for creating an account! Please enter your information
                    below to get started.</h5>
                <div className="card-body">
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>First Name</label>
                                <input type="text" name="first_name" className="form-control" value={this.state.first_name} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col">
                                <label>Last Name</label>
                                <input type="text" name="last_name" className="form-control" value={this.state.last_name} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Street Number</label>
                                <input type="text" name="street_number" className="form-control" value={this.state.street_number} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col">
                                <label>Street</label>
                                <input type="text" name="street_name" className="form-control" value={this.state.street_name} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>City</label>
                                <input type="text" name="city" className="form-control" value={this.state.city} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col">
                                <label>State</label>
                                <input type="text" name="state" className="form-control" value={this.state.state} onChange={this.handleChange}/>
                            </div>
                            <div className="form-group col">
                                <label>Zip Code</label>
                                <input type="text" name="zip" className="form-control" value={this.state.zip} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary mr-1" type="submit">Register</button>
                            <LinkButton className="btn btn-secondary ml-1" to={'/signin'}>Sign In</LinkButton>
                        </div>
                    </form>
                    {this.state.message}
                </div>
            </Card>
        );
    }
}

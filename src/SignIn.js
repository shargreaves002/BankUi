import React from 'react';
import LinkButton from "./utils/LinkButton";
import { Card } from "shards-react";
import Api from "./utils/Api";

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {email: ''};
        this.state = {password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        //Here's where we call the API to get the customer info and reroute to the dashboard
        const data = {
            email: this.state.email,
            password: this.state.password
        };

        Api.get("/customers").then(res => {
            if (JSON.stringify(res.data).includes(this.state.email.toLowerCase())){
                // They're in the database, so check to see if that password is right and log in
            } else {
                // They're not in the database yet.
            }
        }).catch(err => {
            // There was an error getting all customers
        });
        event.preventDefault();
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <Card className="mt-4 mx-auto text-center" style={{maxWidth:"500px"}}>
                <h5 className="card-header">Thank you for choosing our bank! Please log in.</h5>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group form-row">
                            <div className="form-group col">
                                <label>Email
                                <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                                </label>
                            </div>
                            <div className=" form-group col">
                                <label>Password
                                <input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
                                </label>
                            </div>
                        </div>
                        <div className=" text-center">
                            <button className=" btn btn-primary mr-1" type={"submit"} value={"Submit"}>Sign In</button>
                            <LinkButton className="btn btn-secondary ml-1" to={'/signup'}>Create an account</LinkButton>
                        </div>
                    </form>
                </div>
            </Card>
        );
    }
}

import React from 'react';
import { Card } from "shards-react";
import Api from "./utils/Api";

export default class Customer extends React.Component {

    constructor(props){
        super(props);
        this.state = {customer: {first_name:'',
            last_name:'',
            email: '',
            password: '',
            address: {street_number: '',
            street_name: '',
            city: '',
            state: '',
            zip: ''}}};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    componentDidMount() {
        Api.get("/customers/" + this.props.match.params.id).then( res => {
            this.setState({customer: res.data.data[0]});
        }).catch( err => {
            console.log(err);
        });
    }

    render() {
        return (
            <Card className={"mt-4 mx-auto text-center"}>
                <h5 className={"card-header"}>{this.state.customer.first_name + " " + this.state.customer.last_name}</h5>
                <div className={"card-body"}>
                    <table className={"table table-hover"}>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Street Number</th>
                                <th>Street Name</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.customer.email}</td>
                                <td>{this.state.customer.address.street_number}</td>
                                <td>{this.state.customer.address.street_name}</td>
                                <td>{this.state.customer.address.city}</td>
                                <td>{this.state.customer.address.state}</td>
                                <td>{this.state.customer.address.zip}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Card>
        );
    }
}

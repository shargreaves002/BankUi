import React from 'react';
import { Card } from "shards-react";
import Api from "./utils/Api";
import LinkButton from "./utils/LinkButton";

export default class Customer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            customer: {
                customerId: '',
                first_name:'',
                last_name:'',
                email: '',
                password: '',
                address: {
                    street_number: '',
                    street_name: '',
                    city: '',
                    state: '',
                    zip: ''
                }
            },
            accounts: [{
                id: '',
                nickname: '',
                type: '',
                rewards: '',
                balance: ''
            }],
            customerLoaded: false,
            accountsLoaded: false
        };
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
            this.setState({customer: res.data.data[0], customerLoaded: true});
        }).catch( err => {
            console.log(err);
        });

        Api.get("/customers/" + this.props.match.params.id + "/accounts").then( res => {
            this.setState({accounts: res.data.data, accountsLoaded: true});
        }).catch( err => {
            console.log(err);
        });
    }

    deleteAccount(accountId, event) {
        Api.delete(`/accounts/${accountId}`).then(() => {
            window.location.reload();
        }).catch(err => {
            console.log(err);
        });
        event.preventDefault();
    }

    render() {
        const { customer, accounts, customerLoaded, accountsLoaded } = this.state;
        if (!customerLoaded || !accountsLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Card className={"mt-4 mx-auto text-center"}>
                        <h5 className={"card-header"}>{customer.first_name + " " + customer.last_name}</h5>
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
                                        <td>{customer.email}</td>
                                        <td>{customer.address.street_number}</td>
                                        <td>{customer.address.street_name}</td>
                                        <td>{customer.address.city}</td>
                                        <td>{customer.address.state}</td>
                                        <td>{customer.address.zip}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={"card-footer"}>
                            <LinkButton to={'/'} className={"btn btn-secondary mr-1"}> Sign Out </LinkButton>
                            <LinkButton to={`/customer/${customer.customerId}/edit`} className={"btn btn-secondary ml-1"}> Edit Information </LinkButton>
                        </div>
                    </Card>
                    <Card className={"mt-4 mx-auto text-center"}>
                        <h5 className={"card-header"}>Accounts</h5>
                        <div className={"card-body"}>
                            <table className={"table table-hover"}>
                                <thead>
                                    <tr>
                                        <th>Nickname</th>
                                        <th>Type</th>
                                        <th>Rewards</th>
                                        <th>Balance</th>
                                        <th>Tools</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {accounts.map((account) => {
                                    return (
                                        <tr key={account.id}>
                                            <td key={`${account.id}-${account.nickname}`}>
                                                <a href={`/account/${account.id}`}>
                                                    {account.nickname}
                                                </a>
                                            </td>
                                            <td key={`${account.id}-${account.type}`}>{account.type}</td>
                                            <td key={`${account.id}-rewards-${account.rewards}`}>{account.rewards}</td>
                                            <td key={`${account.id}-balance-${account.balance}`}>{account.balance}</td>
                                            <td key={`${account.id}-edit`}>
                                                <button className={"btn btn-secondary"} onClick={(e) => this.deleteAccount(account.id, e)}>Delete
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </div>
                        <div className={"card-footer"}>
                            <LinkButton to={`/customer/${this.props.match.params.id}/create-account`} className={"btn btn-secondary"}>Create a new account</LinkButton>
                        </div>
                    </Card>
                </div>
            );
        }
    }
}

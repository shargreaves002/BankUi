import React from 'react';
import Api from "./utils/Api";
import {Card} from "shards-react";
import LinkButton from "./utils/LinkButton";

export default class WithdrawUpdate extends React.Component {
    constructor (props){
        super(props);
        this.state = {type: ''};
        this.state = {status: ''};
        this.state = {medium: ''};
        this.state = {amount: ''};
        this.state = {description: ''};
        this.state = {accountId: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const withdraw = {
            type: this.state.type,
            status: this.state.status,
            medium: this.state.medium,
            amount: this.state.amount,
            description: this.state.description
        };
        Api.put(`/withdraws/${this.props.match.params.id}`, withdraw).then( () => {
            this.setState({message: "Withdraw updated successfully!"});
        }).catch( (err) => {
            this.setState({message: "Whoops! It looks like there was an error. Please try again later."});
            console.log(err);
        });
        event.preventDefault();
    }

    componentDidMount() {
        Api.get(`/withdraws/${this.props.match.params.id}`).then( res => {
            this.setState({accountId: res.data.data[0].accountId});
        }).catch(err => {
            console.log(err);
        });
    }

    render(){
        return (
            <Card className="mt-4 mx-auto text-center" style={{maxWidth:"500px"}}>
                <h5 className="card-header">Please update your withdraw!</h5>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group form-row">
                            <div className="form-group col">
                                <label>Withdraw Type
                                    <select name={"type"} className={"form-control"} value={this.state.type || ''} onChange={this.handleChange}>
                                        <option value={''}>Choose...</option>
                                        <option value={"Withdraw"}>Withdraw</option>
                                        <option value={"P2p"}>P2p</option>
                                    </select>
                                </label>
                            </div>
                            <div className=" form-group col">
                                <label>Status
                                    <select name={"status"} className={"form-control"} value={this.state.status || ''} onChange={this.handleChange}>
                                        <option value={''}>Choose...</option>
                                        <option value={"Pending"}>Pending</option>
                                        <option value={"Completed"}>Completed</option>
                                        <option value={"Cancelled"}>Cancelled</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className={"form-group form-row"}>
                            <div className=" form-group col">
                                <label>Medium
                                    <select name={"medium"} className={"form-control"} value={this.state.medium || ''} onChange={this.handleChange}>
                                        <option value={''}>Choose...</option>
                                        <option value={"Balance"}>Balance</option>
                                        <option value={"Rewards"}>Rewards</option>
                                    </select>
                                </label>
                            </div>
                            <div className="form-group col">
                                <label>Amount
                                    <input type="number" name="amount" className="form-control" value={this.state.amount || ''} onChange={this.handleChange} />
                                </label>
                            </div>
                        </div>
                        <div className={"form-group form-row"}>
                            <div className={"form-group col"}>
                                <label>Description
                                    <input type="text" name="description" className="form-control" value={this.state.description || ''} onChange={this.handleChange} />
                                </label>
                            </div>
                        </div>
                        <div className=" text-center">
                            <button className=" btn btn-primary mr-1" type={"submit"} value={"Submit"}>Update Withdraw</button>
                            <LinkButton className="btn btn-secondary ml-1" to={`/account/${this.state.accountId}`}>Back</LinkButton>
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    {this.state.message}
                </div>
            </Card>
        );
    }
}

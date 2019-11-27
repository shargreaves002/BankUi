import React from "react";
import LinkButton from "./utils/LinkButton";
import {Card} from "shards-react";
import Api from "./utils/Api";

export default class Account extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: '',
            nickname: '',
            balance: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        if (this.state.type === null || this.state.type === undefined || this.state.type === '') {
            this.setState({type: "Checking"});
        }
        alert(this.state.type);

        const account = {
            type: this.state.type,
            nickname: this.state.nickname,
            balance: this.state.balance,
            rewards: 0,
        };
        Api.post(`/customers/${this.props.match.params.id}/accounts`, account).then( () => {
            this.setState({message: "Account created successfully!"});
        }).catch( (err) => {
            this.setState({message: "Whoops! It looks like there was an error. Please try again later."});
            console.log(err);
        });
        event.preventDefault();
    }

    render () {
        return (
            <Card className="mt-4 mx-auto text-center" style={{maxWidth:"500px"}}>
                <h5 className="card-header">Thank you for choosing our bank! Please log in.</h5>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group form-row">
                            <div className="form-group col">
                                <label>Account Type
                                    <select name={"type"} className={"form-control"} value={this.state.type || ''} onChange={this.handleChange}>
                                        <option value={''}>Choose...</option>
                                        <option value={"Checking"}>Checking</option>
                                        <option value={"Savings"}>Savings</option>
                                        <option value={"Credit"}>Credit</option>
                                    </select>
                                </label>
                            </div>
                            <div className=" form-group col">
                                <label>Nickname
                                    <input type="text" name="nickname" className="form-control" value={this.state.nickname || ''} onChange={this.handleChange} />
                                </label>
                            </div>
                        </div>
                        <div className={"form-group form-row"}>
                            <div className=" form-group col">
                                <label>Initial Balance
                                    <input type="text" name="balance" className="form-control" value={this.state.balance || ''} onChange={this.handleChange} />
                                </label>
                            </div>
                        </div>
                        <div className=" text-center">
                            <button className=" btn btn-primary mr-1" type={"submit"} value={"Submit"}>Create account</button>
                            <LinkButton className="btn btn-secondary ml-1" to={`/customer/${this.props.match.params.id}`}>Back</LinkButton>
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

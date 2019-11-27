import React from "react";
import LinkButton from "./utils/LinkButton";
import {Card} from "shards-react";
import Api from "./utils/Api";

export default class AccountUpdate extends React.Component {
    constructor(props){
        super(props);
        this.state = {type: ''};
        this.state = {nickname: ''};
        this.state = {message: ''};
        this.state = {customerId: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const account = {
            type: this.state.type,
            nickname: this.state.nickname,
        };
        Api.put(`/accounts/${this.props.match.params.id}`, account).then( () => {
            this.setState({message: "Account Updated successfully!"});
        }).catch( (err) => {
            this.setState({message: "Whoops! It looks like there was an error. Please try again later."});
            console.log(err);
        });
        event.preventDefault();
    }

    componentDidMount() {
        Api.get(`/accounts/${this.props.match.params.id}`).then(res => {
            this.setState({customerId: res.data.data[0].customerId});
        }).catch(err => {
            console.log(err);
        });
    }

    render () {
        return (
            <Card className="mt-4 mx-auto text-center" style={{maxWidth:"500px"}}>
                <h5 className="card-header">Update account!</h5>
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
                        <div className=" text-center">
                            <button className=" btn btn-primary mr-1" type={"submit"} value={"Submit"}>Update account</button>
                            <LinkButton className="btn btn-secondary ml-1" to={`/customer/${this.state.customerId}`}>Back</LinkButton>
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

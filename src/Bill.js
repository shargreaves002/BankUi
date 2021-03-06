import React from 'react';
import { Card } from "shards-react";
import Api from "./utils/Api";
import LinkButton from "./utils/LinkButton";

export default class Bill extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        nickname:'',
        paymentDate:'',
        recurringDate:'',
        upcomingPaymentDate:'',
        paymentAmount:'',
        accountId:'',
        status:''
         };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {

    const bills = {
            nickname:this.state.nickname,
            paymentDate:this.state.paymentDate,
            recurringDate:this.state.recurringDate,
            upcomingPaymentDate:this.state.upcomingPaymentDate,
            paymentAmount:this.state.paymentAmount,
            status:this.state.status
            };

         Api.post("/accounts/" + this.props.match.params.id + "/bills", bills).then(() => {
                            this.setState({message: "Bill Created Successfully"});
                        }).catch(() => {
                            this.setState({message: "It looks like there was an error creating this Bill, please try again later."});
                        });

        event.preventDefault();
    }

    render() {
       return (
           <Card className="mt-4 mx-auto text-center" style={{maxWidth: "1000px"}}>
                           <h5 className="card-header text-center">Please submit bill details below.</h5>
                           <div className="card-body">
                               <form name="form" onSubmit={this.handleSubmit}>
                                   <div className="form-row">
                                       <div className="form-group col">
                                           <label>Nick Name</label>
                                           <input type="text" name="nickname" className="form-control" value={this.state.nickname || ''} onChange={this.handleChange}/>
                                       </div>
                                       <div className="form-group col">
                                           <label>Payment Date</label>
                                           <input type="text" name="paymentDate" className="form-control" value={this.state.paymentDate || ''} onChange={this.handleChange}/>
                                       </div>
                                   </div>
                                   <div className="form-group">
                                       <label>Recurring Date</label>
                                       <input type="text" name="recurringDate" className="form-control" value={this.state.recurringDate || ''} onChange={this.handleChange}/>
                                   </div>
                                   <div className="form-row">
                                       <div className="form-group col">
                                           <label>Upcoming Payment Date</label>
                                           <input type="text" name="upcomingPaymentDate" className="form-control" value={this.state.upcomingPaymentDate || ''} onChange={this.handleChange}/>
                                       </div>
                                       <div className="form-group col">
                                           <label>Payment Amount</label>
                                           <input type="text" name="paymentAmount" className="form-control" value={this.state.paymentAmount || ''} onChange={this.handleChange}/>
                                       </div>
                                   </div>
                                   <div className="form-row">
                                       <div className="form-group col">
                                           <select name={"status"} className={"form-control"} value={this.state.status || ''} onChange={this.handleChange}>
                                               <option value={''}>Choose...</option>
                                               <option value={"Pending"}>Pending</option>
                                               <option value={"Cancelled"}>Cancelled</option>
                                               <option value={"Completed"}>Completed</option>
                                               <option value={"Recurring"}>Recurring</option>
                                           </select>
                                       </div>
                                    </div>
                                   <div className="text-center">
                                       <button className="btn btn-primary mr-1" type="submit">Submit</button>
                                       <LinkButton className="btn btn-secondary ml-1" to={"/account/"+ this.props.match.params.id}>Cancel</LinkButton>
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

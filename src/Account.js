import React from 'react';
import { Card } from "shards-react";
import Api from "./utils/Api";
export default class Account extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         account: {
            id: '',
            nickname: '',
            type: '',
            rewards: '',
            balance: ''
         },
         deposits: [{
            id:'',
            status:'',
            medium:'',
            description:'',
            accountId:'',
            transaction_date:''
         }],
         withdraws: [{
         }],
         bills: [{
         }],
         accountLoaded: false,
         depositsLoaded: false,
         withdrawsLoaded: false,
         billsLoaded: false
      };
    }
        componentDidMount() {
        //Gives details for the account
        Api.get("/accounts/" + this.props.match.params.id).then( res => {
            this.setState({account: res.data.data[0], customerLoaded: true});
        }).catch( err => {
            console.log(err);
        });

        Api.get("/accounts/" + this.props.match.params.id + "/deposits").then( res => {
            this.setState({deposits: res.data.data, depositsLoaded: true});
        }).catch( err => {
            console.log(err);
        });

         Api.get("/accounts/" + this.props.match.params.id + "/withdraws").then( res => {
            this.setState({withdraws: res.data.data, withdrawsLoaded: true});
         }).catch( err => {
            console.log(err);
         });

         Api.get("/accounts/" + this.props.match.params.id + "/bills").then( res => {
            this.setState({bills: res.data.data, billsLoaded: true});
         }).catch( err => {
            console.log(err);
         });
    }

    render() {
        return (
        <div>
            <div>
                <Card className= "mt-4 mx-auto text-center">
                    <h5 className="card-header">Account</h5>
                    <div className="card-body">
                        <table className= "table table-hover">
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Balance</th>
                                <th>Rewards</th>
                                <th>Nickname</th>
                            </tr>
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>$50</td>
                                <td> **/**/**** </td>
                                <td> COMPLETE </td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>$94</td>
                                <td> **/**/**** </td>
                                <td> COMPLETE </td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>$80</td>
                                <td> **/**/**** </td>
                                <td> COMPLETE</td>
                            </tr>
                        </table>
                    </div>
                </Card>
            </div>
            <div>
                 <Card className= "mt-4 mx-auto text-center">
                     <h5 className="card-header"> Deposits</h5>
                     <div className="card-body">
                         <table className= "table table-hover">
                             <tr>
                                   <th>Type of Deposits </th>
                                   <th>Transaction Date</th>
                                   <th>Transaction Status</th>
                                   <th>Amount</th>
                                   <th> Medium </th>
                                   <th> Description </th>
                             </tr>
                             {this.state.deposits.map((deposit) => {
                                 return (
                                     <tr key={deposit.id}>
                                         <td key={`${deposit.id}-${deposit.type}`}>
                                             <a href={`/account/${deposit.id}/edit`}>
                                           {deposit.type}
                                             </a>
                                         </td>
                                         <td key={`${deposit.id}-${deposit.transaction_date}`}>{deposit.transaction_date}</td>
                                         <td key={`${deposit.id}-${deposit.status}`}>{deposit.status}</td>
                                         <td key={`${deposit.id}-${deposit.amount}`}>{deposit.amount}</td>
                                         <td key={`${deposit.id}-${deposit.medium}`}>{deposit.medium}</td>
                                         <td key={`${deposit.id}-${deposit.description}`}>{deposit.description}</td>
                                     </tr>
                                 );
                             })}
                         </table>
                     </div>
                 </Card>
            </div>
            <div>
                <Card className= "mt-4 mx-auto text-center">
                    <h5 className="card-header">Withdraw</h5>
                    <div className="card-body">
                        <table className= "table table-hover">
                            <tr>
                                <th>Type of Withdraw</th>
                                <th>Transaction Date</th>
                                <th>Transaction Status</th>
                                <th> Amount </th>
                                <th> Medium </th>
                                <th> Description</th>
                            </tr>
                           {this.state.withdraws.map((withdraw) => {
                                   return (
                             <tr key={withdraw.id}>
                                <td key={`${withdraw.id}${withdraw.type}`}>

                                   <a href={`/withdraw/${withdraw.id}/edit`}>
                                        {withdraw.type}
                                       </a>
                                    </td>
                                   <td key={`${withdraw.id}-${withdraw.transaction_date}`}>{withdraw.transaction_date}</td>
                                   <td key={`${withdraw.id}-${withdraw.status}`}>{withdraw.status}</td>
                                   <td key={`${withdraw.id}-${withdraw.amount}`}>{withdraw.amount}</td>
                                   <td key={`${withdraw.id}-${withdraw.medium}`}>{withdraw.medium}</td>
                                   <td key={`${withdraw.id}-${withdraw.description}`}>{withdraw.description}</td>
                                   </tr>
                                      );
                                   })}
                        </table>
                    </div>
                </Card>
            </div>
        <div>
          <Card className= "mt-4 mx-auto text-center">
                            <h5 className="card-header">Bill</h5>
                            <div className="card-body">
                                <table className= "table table-hover">
                                    <tr>
                                        <th>Bill Type</th>
                                        <th>Payment Date</th>
                                        <th>Bill Status</th>
                                        <th> Payment Amount </th>
                                        <th> Description </th>
                                        <th> Upcoming Bill Date </th>
                                    </tr>
                                    {this.state.bills.map((bills) => {
                                        return (
                                  <tr key={bills.id}>
                              <td key={`${bills.id}-${bills.type}`}>
                              <a href={`/bills/${bills.id}`}>
                                       {bills.type}
                                         </a>
                                      </td>
                                      <td key={`${bills.id}-${bills.payment_date}`}>{ bills.payment_date}</td>
                                      <td key={`${bills.id}-${bills.status}`}>{bills.status}</td>
                                      <td key={`${bills.id}-${bills.amount}`}>{bills.amount}</td>
                                      <td key={`${bills.id}-${bills.description}`}>{bills.description}</td>
                                      <td key={`${bills.id}-${bills.upcoming_bill_date}`}>{bills.upcoming_bill_date}</td>
                                      </tr>
                                       );
                                        })}
                                </table>
                            </div>
                        </Card>
                        </div>
                        </div>

        );
    }
}



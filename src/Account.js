import React from 'react';
import { Card } from "shards-react";
import Api from "./utils/Api";
import LinkButton from "./utils/LinkButton";
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
             creation_date: '',
             paymentDate: '',
             recurringDate: '',
             upcomingPaymentDate: '',
             paymentAmount: '',
             AccountId: '',
             status: '',
             nickname: ''
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
            this.setState({account: res.data.data[0], accountLoaded: true});
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

    deleteDeposit(depositId, event) {
        Api.delete(`/deposits/${depositId}`).then(() => {
            window.location.reload();
        }).catch(err => {
            console.log(err);
        });
        event.preventDefault();
    }

    deleteWithdraw(withdrawId, event) {
        Api.delete(`/withdraws/${withdrawId}`).then(() => {
            window.location.reload();
        }).catch(err => {
            console.log(err);
        });
        event.preventDefault();
    }

    deleteBill(billId, event) {
        Api.delete(`/bills/${billId}`).then(() => {
            window.location.reload();
        }).catch(err => {
            console.log(err);
        });
        event.preventDefault();
    }

    render() {
        if (!this.state.accountLoaded || !this.state.depositsLoaded || !this.state.withdrawsLoaded || !this.state.billsLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div>
                        <Card className="mt-4 mx-auto text-center">
                            <h5 className="card-header">Account</h5>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Nickname</th>
                                        <th>Type</th>
                                        <th>Rewards</th>
                                        <th>Balance</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{this.state.account.nickname}</td>
                                        <td>{this.state.account.type}</td>
                                        <td>{this.state.account.rewards}</td>
                                        <td>{this.state.account.balance}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={"card-footer"}>
                                <LinkButton className="btn btn-secondary mr-1"
                                            to={`/account/${this.state.account.id}/edit`}>
                                    Edit account details
                                </LinkButton>
                                <LinkButton className="btn btn-secondary ml-1"
                                            to={`/customer/${this.state.account.customerId}`}>
                                    Back to accounts
                                </LinkButton>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card className="mt-4 mx-auto text-center">
                            <h5 className="card-header"> Deposits</h5>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Type of Deposits</th>
                                        <th>Transaction Date</th>
                                        <th>Transaction Status</th>
                                        <th>Amount</th>
                                        <th>Medium</th>
                                        <th>Description</th>
                                        <th>Tools</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.deposits.map((deposit) => {
                                        return (
                                            <tr key={deposit.id}>
                                                <td key={`${deposit.id}-${deposit.type}`}>{deposit.type}</td>
                                                <td key={`${deposit.id}-${deposit.transaction_date}`}>{deposit.transaction_date}</td>
                                                <td key={`${deposit.id}-${deposit.status}`}>{deposit.status}</td>
                                                <td key={`${deposit.id}-${deposit.amount}`}>{deposit.amount}</td>
                                                <td key={`${deposit.id}-${deposit.medium}`}>{deposit.medium}</td>
                                                <td key={`${deposit.id}-${deposit.description}`}>{deposit.description}</td>
                                                <td key={`${deposit.id}-edit`}>
                                                    <LinkButton className={"btn btn-secondary mr-1"} to={`/deposit/${deposit.id}/edit`}>
                                                        Edit
                                                    </LinkButton>
                                                    <button className={"btn btn-secondary"} onClick={(e) => this.deleteDeposit(deposit.id, e)}>Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className={"card-footer"}>
                                <LinkButton className="btn btn-secondary"
                                            to={`/account/${this.state.account.id}/create-deposit`}>
                                    Make a deposit
                                </LinkButton>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card className="mt-4 mx-auto text-center">
                            <h5 className="card-header">Withdraw</h5>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Type of Withdraw</th>
                                        <th>Transaction Date</th>
                                        <th>Transaction Status</th>
                                        <th>Amount</th>
                                        <th>Medium</th>
                                        <th>Description</th>
                                        <th>Tools</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.withdraws.map((withdraw) => {
                                        return (
                                            <tr key={withdraw.id}>
                                                <td key={`${withdraw.id}-${withdraw.type}`}>{withdraw.type}</td>
                                                <td key={`${withdraw.id}-${withdraw.transaction_date}`}>{withdraw.transaction_date}</td>
                                                <td key={`${withdraw.id}-${withdraw.status}`}>{withdraw.status}</td>
                                                <td key={`${withdraw.id}-${withdraw.amount}`}>{withdraw.amount}</td>
                                                <td key={`${withdraw.id}-${withdraw.medium}`}>{withdraw.medium}</td>
                                                <td key={`${withdraw.id}-${withdraw.description}`}>{withdraw.description}</td>
                                                <td key={`${withdraw.id}-edit`}>
                                                    <LinkButton className={"btn btn-secondary mr-1"} to={`/withdraw/${withdraw.id}/edit`}>
                                                        Edit
                                                    </LinkButton>
                                                    <button
                                                        onClick={(e) => this.deleteWithdraw(withdraw.id, e)}
                                                        className={"btn btn-secondary"}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className={"card-footer"}>
                                <LinkButton className="btn btn-secondary"
                                            to={`/account/${this.state.account.id}/create-withdraw`}>
                                    Make a withdrawal
                                </LinkButton>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card className="mt-4 mx-auto text-center">
                            <h5 className="card-header">Bill</h5>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>Nickname</th>
                                        <th>Creation Date</th>
                                        <th>Payment Date</th>
                                        <th>Recurring Date</th>
                                        <th>Upcoming Payment Date</th>
                                        <th>Payment Amount</th>
                                        <th>Status</th>
                                        <th>Tools</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.bills.map((bill) => {
                                        return (
                                            <tr key={bill.id}>
                                                <td key={`${bill.id}-${bill.nickname}`}>{bill.nickname}</td>
                                                <td key={`${bill.id}-${bill.creation_date}`}>{bill.creation_date}</td>
                                                <td key={`${bill.id}-${bill.paymentDate}`}>{bill.paymentDate}</td>
                                                <td key={`${bill.id}-${bill.recurringDate}`}>{bill.recurringDate}</td>
                                                <td key={`${bill.id}-${bill.upcomingPaymentDate}`}>{bill.upcomingPaymentDate}</td>
                                                <td key={`${bill.id}-${bill.paymentAmount}`}>{bill.paymentAmount}</td>
                                                <td key={`${bill.id}-${bill.status}`}>{bill.status}</td>
                                                <td key={`${bill.id}-edit`}>
                                                    <LinkButton className={"btn btn-secondary mr-1"} to={`/bill/${bill.id}/edit`}>
                                                        Edit
                                                    </LinkButton>
                                                    <button className={"btn btn-secondary"} onClick={(e) => this.deleteBill(bill.id, e)}>Delete</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className={"card-footer"}>
                                <LinkButton className="btn btn-secondary"
                                            to={`/account/${this.state.account.id}/create-bill`}>
                                    Make a bill
                                </LinkButton>
                            </div>
                        </Card>
                    </div>
                </div>
            );
        }
    }
}



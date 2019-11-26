import React from 'react';
import { Card } from "shards-react";

export default class Account extends React.Component {
    constructor(props) {

      super(props);
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
                                <th> Rewards </th>
                                <th> Nickname </th>
                            </tr>
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                                <td> **/**/**** </td>
                                <td> COMPLETE </td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                                <td> **/**/**** </td>
                                <td> COMPLETE </td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>80</td>
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
                             <tr>
                                   <td>Jill</td>
                                   <td>**/**/****</td>
                                   <td>COMPLETE</td>
                                   <td> $*,***</td>
                                   <td> Balance </td>
                                   <td> COMPLETE </td>
                             </tr>
                             <tr>
                                   <td>Eve</td>
                                   <td>**/**/****</td>
                                   <td>COMPLETE</td>
                                   <td> $*,*** </td>
                                   <td> Balance </td>
                                   <td> COMPLETE </td>
                             </tr>
                             <tr>
                                   <td>John</td>
                                   <td>**/**/****</td>
                                   <td>COMPLETE</td>
                                   <td> $*,*** </td>
                                   <td> Balance </td>
                                   <td> COMPLETE</td>
                             </tr>
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
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                                <td> $*,*** </td>
                                <td> Rewards </td>
                                <td> COMPLETE </td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                                <td>$*,*** </td>
                                <td> Rewards </td>
                                <td> COMPLETE </td>
                            </tr>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>80</td>
                                <td> $*,*** </td>
                                <td> Rewards </td>
                                <td> COMPLETE</td>
                            </tr>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
        );
    }
}



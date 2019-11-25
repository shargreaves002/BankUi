import React from 'react';
import { Card } from "shards-react";

export default class Deposits extends React.Component {
    constructor(props) {

      super(props);
    }

    render() {
        return (
           <Card className= "mt-4 mx-auto text-center">
            <h5 className="card-header">Deposits</h5>
            <div className="card-body">
                <table>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Type of Deposits</th>
                    <th> Deposit Date </th>
                    <th>  Deposit Status </th>
                  </tr>
                  <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                    <td> **/**/**** </td>
                    <td> ACTIVE </td>
                  </tr>
                  <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                    <td> **/**/**** </td>
                    <td> ACTIVE </td>
                  </tr>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>80</td>
                    <td> **/**/**** </td>
                    <td> ACTIVE </td>
                  </tr>
                </table>
            </div>
           </Card>
        );
    }
}



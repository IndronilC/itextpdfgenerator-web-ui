import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CustomerService from '../services/CustomerService';

class ListCustomerComponent extends Component {
      constructor(props) {
        super(props)

        this.state = {
                customers: []
        }

    }

    componentDidMount(){
        console.log("customer did mount")
        CustomerService.getCustomers().then((res) => {
            this.setState({ customers: res.data});
            console.log(res.data);
        });
    }

   

    render() {
        return (
            <div>
                 <h2 className="text-center">Customer List</h2>
                 <div className = "row">
                  <Link to = "/add-customer">  
                      <button className="btn btn-primary">Create Customer</button>
                 </Link>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Customer Full Name</th>
                                    <th> Customer Date of Birth</th>
                                    <th> Customer Gross Salary</th>
                                    <th> Customer Net Salary</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.customers.map(
                                        customer => 
                                        <tr key = {customer.customerId}>
                                             <td> {customer.customerName} </td>   
                                             <td> {customer.dateOfBirth}</td>
                                             <td> {customer.grossSalary}</td>
                                             <td>{customer.netSalary}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                         
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListCustomerComponent
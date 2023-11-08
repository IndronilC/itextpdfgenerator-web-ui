import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CustomerService from '../services/CustomerService';


class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
             customerName: '',
             dateOfBirth: '',
             grossSalary: '',
             netSalary: '',
        }
       this.changeCustomerNameHandler = this.changeCustomerNameHandler.bind(this);
       this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
       this.changeGrossSalaryHandler = this.changeGrossSalaryHandler.bind(this);
       this.changeNetSalaryHandler = this.changeNetSalaryHandler.bind(this);
       this.saveCustomer = this.saveCustomer.bind(this);
    }

    changeCustomerNameHandler = (event) => {
        this.setState({customerName: event.target.value});
    }

    changeDateOfBirthHandler = (event) => {
        this.setState({dateOfBirth: event.target.value});
    }

    changeGrossSalaryHandler = (event) => {
        this.setState({grossSalary: event.target.value});
    }

    changeNetSalaryHandler = (event) => {
        this.setState({netSalary: event.target.value});
    }
    
    saveCustomer = (event) => {
        event.preventDefault();
        let customerRequest = {customerName: this.state.customerName, 
            dateOfBirth: this.state.dateOfBirth, 
            grossSalary: this.state.grossSalary,
            netSalary: this.state.netSalary};
        console.log('customer => ' + JSON.stringify(customerRequest));
        CustomerService.createCustomer(customerRequest).then((res) => {
         this.props.navigate("/customers");
        })
        

    }
    


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                               
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Customer Name: </label>
                                            <input placeholder="Customer Name" name="customerName" className="form-control" 
                                                value={this.state.customerName} onChange={this.changeCustomerNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date of Birth: </label>
                                            <input placeholder="Date of Birth" name="dateOfBirth" className="form-control" 
                                                value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gross Salary: </label>
                                            <input placeholder="Gross Salary" name="grossSalary" className="form-control" 
                                                value={this.state.grossSalary} onChange={this.changeGrossSalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Net Salary: </label>
                                            <input placeholder="Net Salary" name="netSalary" className="form-control" 
                                                value={this.state.netSalary} onChange={this.changeNetSalaryHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveCustomer}>Save</button>
                                        <Link to = "/customers">  
                                          <button className="btn btn-danger" style={{marginLeft: "10px"}}>cancel</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                
            </div>
        );
    }
}

function addHookTo(Component) {
    function CompWithHook(props) {
      const navigate = useNavigate();
  
      return <Component {...props} navigate={navigate} />;
    }
  
    return CompWithHook;
  }
  
  export default addHookTo(CreateCustomerComponent);
  


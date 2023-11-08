import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CustomerService from '../services/CustomerService';
import ReactPaginate from 'react-paginate';
import './ListCustomerComponent.css';

class ListCustomerComponent extends Component {
      constructor(props) {
        super(props)

        this.state = {
                customers: [],
                offset: 0,
                perPage: 5,
                currentPage: 0
        }
        this.handlePageClick = this
            .handlePageClick
            .bind(this);

    }

    componentDidMount(){
        console.log("customer did mount")
        this.receivedData();
       
    }

   receivedData() {
    CustomerService.getCustomers().then((res) => {
        this.setState({ customers: res.data});
        console.log(res.data);
        const data = this.state.customers;
        console.log('data => ' + data);
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
        console.log("slice -> " + slice);
        const pageData = slice.map(customer =>
            <tbody>
                {
                        <tr key = {customer.customerId}>
                            <td> {customer.customerName} </td>   
                            <td> {customer.dateOfBirth}</td>
                            <td> {customer.grossSalary}</td>
                            <td>{customer.netSalary}</td>
                        </tr>
                               
                   }
            </tbody>)
            console.log("pageData => " + pageData)
            this.setState({
                pageCount: Math.ceil(data.length / this.state.perPage),
                pageData
            })
        
    });

   }

   handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log("selectedPage => " + selectedPage);
    const offset = selectedPage * this.state.perPage;
    console.log("offset => " + offset)

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.receivedData()
    });

};

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
                 {this.state.pageData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
                
            </div>
        )
    }
}

export default ListCustomerComponent
import axios from 'axios';

const CUSTOMER_API_BASE_URL = "http://localhost:9191/api/pdf";

class CustomerService {
    getCustomers(){
        return axios.get(CUSTOMER_API_BASE_URL + '/' + 'customers');
    }

    

}   
export default new CustomerService()
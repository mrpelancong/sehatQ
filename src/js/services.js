import axios from 'axios'
// import { API_DEV, API_AGENDA, API_SUMMARY, devList} from "../API"; 

class masterServices {
    // ---- get
    getData(){
        return axios.get("https://private-4639ce-ecommerce56.apiary-mock.com/home")
    }
}

export default new masterServices()
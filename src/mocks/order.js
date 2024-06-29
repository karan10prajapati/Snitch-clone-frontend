import axios from "axios";

class orderApi{

    async createOrder(data){
        try{
            console.log(data)
            const response = await axios.post(`http://localhost:5000/userapp/order/create`,data,{
                headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
            })
            if(response.data.status==='SUCCESS'){
                return response.data;   
            }
            else{ 
                return false;
            }
               
        }catch(e){
            console.log(e);
        }
    }

}

export const orderapi = new orderApi
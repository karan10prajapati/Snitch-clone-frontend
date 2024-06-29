import axios from "axios"

class ProductApi{
    async getProduct({data,filter}){
        try {
            console.log(data,filter)
            let body={
                "query":{ ...filter },
                "options": {
                  "collation": "",
                  "sort": {"name":1},
                  "populate": "",
                  "projection": "",
                  "lean": false,
                  "leanWithId": true,
                  "page": data.page,
                  "limit": data.limit,
                  "pagination": true,
                  "useEstimatedCount": false,
                  "useCustomCountFn": false,
                  "forceCountFn": false,
                  "read": {},
                  "options": {}
                },
                "isCountOnly": false
              }

            const response = await axios.post(`http://localhost:5000/userapp/product/list`,
            body,
            {
               headers : {
                Authorization: `${localStorage.getItem('token')}`
               }
            })

            
            if(response.data.status === "SUCCESS"){

                return response.data
            }

        } catch (error) {
            console.log("errro",error)
        }
    }
}

export const getProductApi = new ProductApi()
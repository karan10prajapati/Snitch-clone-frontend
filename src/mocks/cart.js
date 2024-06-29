import axios from "axios";

class cartApi {
  async pushCart( userId,productId, value ) {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

                    const body ={
                      "userId":userId,
                      "products":[
                          {
                              "productId":productId,
                              "qty": value
                          }
                       ]
                      }

      const result = await axios.post(`http://localhost:5000/userapp/cart/create/`, body,{ headers });
    } catch (error) {
      console.log(error);
    }
  }

  async getCartdata(id) {
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const cartData = await axios.post(
        `http://localhost:5000/userapp/cart/list`,
        {
          query: { userId: id },
          options: {
            collation: "",
            sort: { name: 1 },
            populate: "",
            projection: "",
            lean: false,
            leanWithId: true,
            page: 1,
            limit: 10,
            pagination: true,
            useEstimatedCount: false,
            useCustomCountFn: false,
            forceCountFn: false,
            read: {},
            options: {},
          },
          isCountOnly: false,
        },
        { headers }
      );

      return cartData;
    } catch (error) {
      console.log("error in mocks getcartdata", error);
    }
  }

 async updateCart (cartId,productId,value){
     try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const updateRes = await axios.put( `http://localhost:5000/userapp/cart/update/${cartId}`,
                         {
                          "products": [
                                          {
                                              "productId": productId,
                                              "qty": value

                                          }
                                      ]
                      },
                      {headers}
                  )
     } catch (error) {
       console.log("error in updateapi" , error)
     }
 } 

 async getcartProduct(idArray){
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = axios.post('http://localhost:5000/userapp/product/list',
      {
        "query":{ "_id":idArray  },
        "options": {
          "collation": "",
          "sort": {"name":1},
          "populate": "",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": 1,
          "limit": 9,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        "isCountOnly": false
      },
      {headers}
      ) 

      console.log("rrrrr",response);
      
    } catch (error) {
       console.log("error in getting products for cart",error)
    }
 }

 async deletemany (){
   try {
    
   } catch (error) {
     console.log("error in deletemany cart slice",error
     )
   }
 }

}

export const cartapi = new cartApi();

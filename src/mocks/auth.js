import axios from "axios"

class AuthApi{
    async register(data){
        try {
            console.log("data",data)
            // console.log("process.env.REACTAPP_PUBLIC_HOST",process.env.REACT_APP_BASE_URL)
            const response = await axios.post(`http://localhost:5000/userapp/auth/register`,data)

            
            if(response.data.status === "SUCCESS"){
                return true
            }

        } catch (error) {
            console.log("errro",error)
        }
    }

    async login(data){
        try {
            console.log("data",data)
            // console.log("process.env.REACTAPP_PUBLIC_HOST",process.env.REACT_APP_BASE_URL)
            const response = await axios.post(`http://localhost:5000/userapp/auth/login`,data,
        {
            
        })

            console.log("response in Mocjkslogin",response)
            if(response.data.status === "SUCCESS"){
                const token = response.data.data.token
                console.log("token is ",token)
                localStorage.setItem('token', token);
                return true
            }

        } catch (error) {
            console.log("error in authapilogin",error)
        }
    }

    async me(token){
        try {
            const response = await axios.get(`http://localhost:5000/userapp/user/me`,
            {
               headers:{
                Authorization:`Bearer ${token}`
               }
            }
        )
            if(response.data.status === "SUCCESS"){
                return response
            }

        } catch (error) {
            console.log("error in authapime",error)
        }
    }
}
class OTPApi{
    async getOTP(data){
        try {
            console.log("data",data)
            // console.log("process.env.REACTAPP_PUBLIC_HOST",process.env.REACT_APP_BASE_URL)
            const response = await axios.post(`http://localhost:5000/userapp/auth/reset-password-otp`,data,
        {
            
        })

            console.log("response in getotp",response)
            if(response.data.status === "SUCCESS"){
                return true
            }

        } catch (error) {
            console.log("error in getotp",error)
        }
    }

    async checkOTP (data){

           try{
                
                  console.log("data",data)
                  const response = await axios.post(`http://localhost:5000/userapp/auth/validate-otp`,data)

                  console.log('response for validating otp',response)
                    
                  if(response.data.status === "SUCCESS"){
                    return true
                }
    

           }catch(err){
              
            console.log("error in validating otp", err)

           }

    }

    async changePassword (data){
     
        try{
             console.log("data in mocks",data)
             const response = await axios.put("http://localhost:5000/userapp/auth/reset-password",data)

             console.log(response)

             if( response.data.status="SUCCESS"){
                    return true
             }

        }catch(err){
           console.log("err in mocks in change" ,err)
        }

    }

}

export const otpApi = new OTPApi()

export const authApi = new AuthApi()
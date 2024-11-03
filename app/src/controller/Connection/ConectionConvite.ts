import axios from "axios"
import Config from "../../constant/DBConfig"
export const  CheckInvites= async(hash:string)=>{
    try {
        const host = Config().host
        const res =  await axios.get(host+"/convite/"+hash);
        return res     
    } catch (error) {
        console.log(error)
    }
   
}
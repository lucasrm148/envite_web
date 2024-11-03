import axios from "axios"
import Config from "../../constant/DBConfig"


export const GetPresente = async(hashConvite:string)=>{
    try {
        const host = Config().host

        const res = await axios.get(host+"/presente/evento/"+hashConvite)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
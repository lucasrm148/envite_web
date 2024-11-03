import axios from "axios"
import Config from "../../constant/DBConfig"
export const  GetConvidadosConvite= async(hash:string)=>{
    try {
        const host = Config().host
        const res =  await axios.get(host+"/convidado/convite/"+hash);
        return res.data     
    } catch (error) {
        console.log(error)
    }
}
export const ConfirmaPresença = async(hash:string, hashConvite:string, participara:boolean)=>{
    try {
        const data = {
            nomeHash:hash,
             hashConvite:hashConvite,
              participara:participara
        }
        const host = Config().host
        const res =  await axios.put(host+"/convidado",data);
    } catch (error) {
        
    }
}

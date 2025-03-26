export interface  Config {
    host:string
}
const serverProdution:Config ={
    host:''

}
const DevServer:Config ={
    host:"http://192.168.15.126:3333"
}

 const Config = ()=>{
    const mod = "dev" // ponha o modo aqui 
    if(mod === "dev" && false){
        return DevServer
    }
    return serverProdution
}


export default Config

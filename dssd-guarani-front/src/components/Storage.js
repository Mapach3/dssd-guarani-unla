export class Storage {

    static setJwtToken(jwtToken){
        window.localStorage.setItem('jwtToken',jwtToken)
        console.log("Seteado: ",jwtToken)
    }

    static getJwtToken(){
        return window.localStorage.getItem('jwtToken')
    }


}
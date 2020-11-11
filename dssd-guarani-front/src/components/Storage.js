export class Storage {

    static setJwtToken(jwtToken){
        window.localStorage.setItem('jwtToken',jwtToken)
    }

    static getJwtToken(){
        return window.localStorage.getItem('jwtToken')
    }

    static setRolUser(rolUser){
        window.localStorage.setItem('rolUser',rolUser)
    }

    static getRolUser(){
        return window.localStorage.getItem('rolUser')
    }

    static setImageUser(imageUser){
        window.localStorage.setItem('imageUser',imageUser)
    }

    static getImageUser(){
        return window.localStorage.getItem('imageUser')
    }

    static setNameUser(nameUser){
        window.localStorage.setItem('nameUser',nameUser)
    }

    static getNameUser(){
        return window.localStorage.getItem('nameUser')
    }

    static setPassChange(passChange){
        window.localStorage.setItem('passChange',passChange)
    }

    static getPassChange(){
        return window.localStorage.getItem('passChange')
    }

    static setMailUser(mailUser){
        window.localStorage.setItem('mailUser',mailUser)
    }

    static getMailUser(){
        return window.localStorage.getItem('mailUser')
    }

    static setUserId(userId){
        window.localStorage.setItem('userId',userId)
    }

    static getUserId(){
        return window.localStorage.getItem('userId')
    }
}
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
}
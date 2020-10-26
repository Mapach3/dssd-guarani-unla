import React, {Component} from 'react';

import { __API_FIND_USER_DNI,__API_FIND_USER_EMAIL,__API_POST_USER } from '../../consts/consts';
import axios from 'axios'

import UserForm from './UserForm'


class UserInsert extends Component{


    state = {
        errorMsg : '',
        email : '',
        dni : '',
        userInserted : false
    }

    async validateEmailAndDni(email,dni){

        const findDni = axios.get(__API_FIND_USER_DNI+dni)
        const findEmail= axios.get(__API_FIND_USER_EMAIL+email)

        await axios.all([findDni,findEmail]).then(axios.spread((respDni, respEmail) => {

            if (respDni.status === 200 || respEmail.status === 200){
                var errorMsg = "Revise lo siguiente:";
                if (respDni.status === 200){
                    errorMsg+=" Ya existe un usuario con ese Dni."
                }
                if (respEmail.status === 200){
                    errorMsg+=" Ya existe un usuario con ese Email."
                }
                this.setState({errorMsg : errorMsg})

            }else {
                console.log("Llamar al metodo de insertarlo bien")

            }
        }))


    }

    handleUserData(userData)  {

        debugger;
        this.setState({errorMsg : '', userInserted : false})
        const {imgBase64,formName,formSurname,formEmail,formPassword,formDni,formStreetAndNumber,formUserType,formLocation,formPostCode,formCity,formCountry} = userData

        if (formName.length === 0 || formSurname.length === 0 || formEmail.length === 0 || formPassword.length === 0 || formDni.length === 0 || formUserType.length === 0 ||
            formStreetAndNumber.length === 0 || formLocation.length === 0 || formPostCode.length === 0 || formCity.length === 0 || formCountry.length === 0 || 
            imgBase64.length === 0){
            
                this.setState({errorMsg : "Por favor, complete todos los campos"})

        }else{

            this.validateEmailAndDni(formEmail,formDni)
                
            // if (this.state.dni === "" && this.state.dni === ""){
            //     debugger;

            //     const options = {
            //         method: "POST",
            //         url: __API_POST_USER,
            //         headers : {
            //             'Content-Type' : 'application/json',
            //             'Access-Control-Allow-Origin' : '*'
            //         },
                    
            //         data: {
            //             email: formEmail,
            //             password: formPassword,
            //             name: formName,
            //             surname: formSurname,
            //             dni: formDni,
            //             active: true,
            //             passwordChanged: true,
            //             role: formUserType,
            //             imgBase64 : imgBase64,
            //             address: {
            //               streetAndNumber: formStreetAndNumber,
            //               location: formLocation,
            //               postalCode: formPostCode,
            //               city: formCity,
            //               country: formCountry
            //             }
            //           }
            //     }

            //     await axios(options).then( response => {
            //         debugger;
            //         console.log(response)
            //         if (response.statusText === "OK")
            //              this.setState({errorMsg : 'El usuario se dió de alta correctamente.', userInserted : true})
            //     }).catch(error => {
            //         this.setState({errorMsg: 'Ocurrió un error insertando al usuario.'})
            //     })


            // }
            }
        
    }

    render(){
        return <UserForm action={(userData) => this.handleUserData(userData)} errorMsg={this.state.errorMsg} userInserted={this.state.userInserted}/>
    }

}

export default UserInsert
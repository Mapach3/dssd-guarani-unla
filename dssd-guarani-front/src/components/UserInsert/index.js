import React, {Component} from 'react';

import { __API_FIND_USER_DNI,__API_FIND_USER_EMAIL,__API_POST_USER } from '../../consts/consts';
import axios from 'axios'

import UserForm from './UserForm'


class UserInsert extends Component{

    constructor(){
        super()
        
        this.state = {
            errorMsg : ''
        }

        this.sendUserData = this.sendUserData.bind(this)
    }
     async sendUserData(userData) {

        debugger;
        this.setState({errorMsg : ''})
        const {imgBase64,formName,formSurname,formEmail,formPassword,formDni,formStreetAndNumber,formUserType,formLocation,formPostCode,formCity,formCountry} = userData

        if (formName.length === 0 || formSurname.length === 0 || formEmail.length === 0 || formPassword.length === 0 || formDni.length === 0 || imgBase64.length === 0 ||
            formStreetAndNumber.length === 0 || formLocation.length === 0 || formPostCode.length === 0 || formCity.length === 0 || formCountry.length === 0){
                this.setState({errorMsg : "Por favor, complete todos los campos"})

            }else{
                
                const findDni = axios.get(__API_FIND_USER_DNI+formDni)
                const findEmail = axios.get(__API_FIND_USER_EMAIL+formEmail)
                var dni = null;
                var email = null;

                await axios.all([findDni,findEmail]).then(axios.spread((...responses) => {
                    console.log("Response DNI: ",responses[0])
                    console.log("Response EMAIL: ",responses[1])
                     dni = responses[0].data;
                     email = responses[1].data;

                })).catch( errors => {
                    console.error("Error during findDni,findEmail UserInsert: ",errors)
                })

                if (dni === "" && email === ""){

                    const options = {
                        method: "POST",
                        url: __API_POST_USER,
                        headers : {
                            'Content-Type' : 'application/json',
                            'Access-Control-Allow-Origin' : '*'
                        },
                        
                        data: {
                            email: formEmail,
                            password: formPassword,
                            name: formName,
                            surname: formSurname,
                            dni: formDni,
                            active: true,
                            passwordChanged: true,
                            role: formUserType,
                            imgBase64 : imgBase64,
                            address: {
                              streetAndNumber: formStreetAndNumber,
                              location: formLocation,
                              postalCode: formPostCode,
                              city: formCity,
                              country: formCountry
                            }
                          }
                    }

                    await axios(options).then( response => {
                        debugger;
                        console.log(response)
                        if (response.statusText === "OK")
                             this.setState({errorMsg : 'El usuario se dió de alta correctamente.'})


                    }).catch(error => {
                        this.setState({errorMsg: 'Ocurrió un error insertando al usuario.'})
                    })


                }else{
                    var errorMsg = "Revise lo siguiente: ";
                    if (dni !== ""){
                        errorMsg+=" Ya existe un usuario con ese Dni."
                    }
                    if (email !== ""){
                        errorMsg+=" Ya existe un usuario con ese Email."
                    }
                    this.setState({errorMsg : errorMsg})
                }

            }
        
    }

    render(){
        return <UserForm action={this.sendUserData} errorMsg={this.state.errorMsg}/>
    }

}

export default UserInsert
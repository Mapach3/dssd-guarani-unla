import React, {Component} from 'react';
import {__API_USER } from '../../consts/consts';
import axios from 'axios'
import UserForm from './UserForm'


class UserInsert extends Component{


    state = {
        errorMsg : '',
        clearForm : false,
        userList : [],
    }

    getUserList(){
        axios.get(__API_USER).then( resp => {
            this.setState({userList : resp.data})
        })

    }

    setClearForm(value){
        this.setState({clearForm: value, errorMsg : ''})

    }

    componentDidMount(){
        //traigo la lista de usuarios para validar por Mail y DNI
        this.getUserList()
    }

    validateUserEmailAndDni(formEmail,formDni) {
        var errorMsg="";
        var userSameDni = this.state.userList.find( user => user.dni === formDni)
        var userSameEmail = this.state.userList.find(user => user.email === formEmail)

        if (userSameDni !== undefined || userSameEmail !== undefined){
            errorMsg+="Revise lo siguiente: "
            if (userSameDni !== undefined){
                errorMsg+=" Ya hay un usuario con ese Dni. \r\n"
            }
            if (userSameEmail !== undefined){
                errorMsg+=" Ya hay un usuario con ese Email. \r\n"
            }
            this.setState({errorMsg : errorMsg})
            return errorMsg
        }
        return ""
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
           
            if (this.validateUserEmailAndDni(formEmail,formDni).length === 0){

                const options = {
                    method: "POST",
                    url: __API_USER,
                    headers : {
                        'Content-Type' : 'application/json',
                        'Accept': "application/json",
                        'Access-Control-Allow-Origin' : '*'
                    },
                    
                    data: {
                        email: formEmail,
                        password: formPassword,
                        name: formName,
                        surname: formSurname,
                        dni: formDni,
                        active: formUserType === 0 ? true : false, //Admins dont need to activate their accounts
                        passwordChanged: formUserType === 0 ? true : false, //Admins dont need to activate their accounts
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

                axios(options).then( response => {
                    debugger;
                    this.setState({errorMsg : 'El usuario se dió de alta correctamente.'})
                    this.setState({clearForm : true})
                    this.getUserList()

                }).catch(error => {
                    console.error("Error Insertando al usuario: ", error)
                    this.setState({errorMsg: 'Ocurrió un error insertando al usuario.'})
                })


            }
        
        }
    }

    render(){
        return <UserForm action={(userData) => this.handleUserData(userData)} errorMsg={this.state.errorMsg} clearForm={this.state.clearForm} setClearForm={(value) => this.setClearForm(value)}/>
    }

}

export default UserInsert
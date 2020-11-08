import React, {Component} from 'react';
import {__API_USER } from '../../consts/consts';
import axios from 'axios'
import UserForm from './UserForm'


class ModifyForm extends Component{


    state = {
        errorMsg : '',
        clearForm : false,
        userList : [],
        user: this.props.user
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

    validateUserEmailAndDni(formEmail,formDni, userToModify) {
        var errorMsg="";
        var userSameDni = this.state.userList.find( user => user.dni === formDni && user.id !== userToModify )
        var userSameEmail = this.state.userList.find(user => user.email === formEmail && user.id !== userToModify)

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
        const {imgBase64,formName,formSurname,formEmail,formPassword,formDni,formStreetAndNumber,formUserType,formLocation,formPostCode,formCity,formCountry,addressToModify,userToModify,userActive,userPasswordChanged} = userData

        if (formName.length === 0 || formSurname.length === 0 || formEmail.length === 0 || formPassword.length === 0 || formDni.length === 0 || formUserType.length === 0 ||
            formStreetAndNumber.length === 0 || formLocation.length === 0 || formPostCode.length === 0 || formCity.length === 0 || formCountry.length === 0 || 
            imgBase64.length === 0){
            
                this.setState({errorMsg : "Por favor, complete todos los campos"})

        }else{
           
            if (this.validateUserEmailAndDni(formEmail,formDni,userToModify).length === 0){

                const options = {
                    method: "PUT",
                    url: __API_USER + userToModify,
                    headers : {
                        'Content-Type' : 'application/json',
                        'Accept': "application/json",
                        'Access-Control-Allow-Origin' : '*'
                    },
                    
                    data: {
                        id: userToModify,
                        email: formEmail,
                        password: formPassword,
                        name: formName,
                        surname: formSurname,
                        dni: formDni,
                        active: userActive,
                        passwordChanged: userPasswordChanged,
                        role: formUserType,
                        imgBase64 : imgBase64,
                        addressId: addressToModify,
                        address: {
                          id: addressToModify,  
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
                    this.setState({errorMsg : 'El usuario se modificó correctamente.'})
                    this.setState({clearForm : true})
                    this.getUserList()

                }).catch(error => {
                    console.error("Error modificando el usuario: ", error)
                    console.log(error)
                    this.setState({errorMsg: 'Ocurrió un error modificando al usuario.'})
                })


            }
        
        }
    }

    render(){
        return <UserForm action={(userData) => this.handleUserData(userData)} errorMsg={this.state.errorMsg} clearForm={this.state.clearForm} setClearForm={(value) => this.setClearForm(value)}
         user={this.state.user}/>
    }

}

export default ModifyForm
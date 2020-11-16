import React, {Component} from 'react';
import {__API_USERSTUDENT } from '../../consts/consts';
import axios from 'axios'
import UserForm from './UserForm'


class StudentModify extends Component{


    state = {
        errorMsg : '',
        clearForm : false,
        userList : [],
    }

    getUserList(){
        axios.get(__API_USERSTUDENT).then( resp => {
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

    validateUserEmailAndDni(formEmail) {
        var errorMsg="";
        var userSameEmail = this.state.userList.find(user => user.email === formEmail && user.id != window.localStorage.getItem('userId'))        
        if (userSameEmail !== undefined){
            errorMsg+=" Ya hay un usuario con ese Email. \r\n"
            this.setState({errorMsg : errorMsg})
            return errorMsg
        }
        return ""
    }


    handleUserData(userData)  {
        debugger;
        this.setState({errorMsg : '', userInserted : false})
        const {imgBase64,formEmail,formPassword,formStreetAndNumber,formLocation,formPostCode,formCity,formCountry,userToModify,addressToModify} = userData

        if (formEmail.length === 0 || formPassword.length === 0 || formStreetAndNumber.length === 0 || formLocation.length === 0 || formPostCode.length === 0 || formCity.length === 0 || formCountry.length === 0 || 
            imgBase64.length === 0){
            
            this.setState({errorMsg : "Por favor, complete todos los campos"})

        }else{
           
            if (this.validateUserEmailAndDni(formEmail).length === 0){

                const options = {
                    method: "PATCH",
                    url: __API_USERSTUDENT,
                    headers : {
                        'Content-Type' : 'application/json',
                        'Accept': "application/json",
                        'Access-Control-Allow-Origin' : '*'
                    },
                    
                    data: {
                        id: Number(userToModify),
                        email: formEmail,
                        password: formPassword,
                        imgBase64 : imgBase64,
                        address: {
                          id: Number(addressToModify),
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
                    this.setState({errorMsg : 'Datos modificados correctamente.'})
                    this.setState({clearForm : true})
                    this.getUserList()

                }).catch(error => {
                    console.error("Error modificando datos: ", error)
                    this.setState({errorMsg: 'Ocurrió un error modificando datos.'})
                })


            }
        
        }
    }

    render(){
        return <UserForm open={this.open} classes={this.classes} {...this.props} action={(userData) => this.handleUserData(userData)} errorMsg={this.state.errorMsg} clearForm={this.state.clearForm} setClearForm={(value) => this.setClearForm(value)}/>
    }

}

export default StudentModify
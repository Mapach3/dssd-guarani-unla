import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import {__API_USERSTUDENT} from '../../consts/consts'
import axios from 'axios'
import SoapRequest from 'react-native-soap-request';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'


class SubjectAsigned extends Component {

    state = {
        //personalInfo
        id: '',
        subjectList: [],
      
    }
   async componentDidMount(){
        const soapRequest = new SoapRequest({
            targetNamespace: 'http://spring.io/guides/gs-producing-web-service',
            commonTypes: 'http://spring.io/guides/gs-producing-web-service',
            requestURL: 'http://localhost:8091/ws'
          })
          const xmlRequest = soapRequest.createRequest({
            'gs:getCoursesAsignedRequest': {
              attributes: {
                'xmlns:soapenv': 'http://schemas.xmlsoap.org/soap/envelope/',
                'xmlns:gs': 'http://spring.io/guides/gs-producing-web-service'
              },            
                'gs:idUser': window.localStorage.getItem('userId')
              
             
            }
          });
          const response = await soapRequest.sendRequest().then(res=>{
            console.log(soapRequest.xmlResponse);
          
            let doc = new DOMParser().parseFromString(soapRequest.xmlResponse, 'text/xml');
            let valueXML = doc.getElementsByTagName('SOAP-ENV:Body');
            
            let courses = valueXML[0].children[0].childNodes[0].childNodes;
            let coursesAsigned = []
            if(courses != null &&courses != undefined ){
            for(let i = 0; i<courses.length ; i++){
              let course = courses[i].children;
              let obj = {};
              for (var j = 0; j < course.length; j++) {
                var property = course[j];      
                obj[property.localName] = property.innerHTML;
                debugger;
                if( property.localName == "subject" ){
                  for (var h = 0; h < property.children.length; h++) {
                    let subjectProperty = property.children[h];
                    obj[subjectProperty.localName] = subjectProperty.innerHTML;
                }
              }
            }
            coursesAsigned.push(obj);
          }
            
       
            }
            console.log(coursesAsigned);
            this.state.subjectList = coursesAsigned;
    
            this.render();
          });        
      
         
         
       


               
    }
    onIdChange = (ev) => {
        this.setState({ id: ev.target.value })
    }
    
    render(){
      const {subjectList} = this.state
      return <>
      <TableContainer className="userDropTables" component={Paper}>
          <Table aria-label="simple table">
              <TableHead>
                  <TableRow>
                  <TableCell># ID</TableCell>
                  <TableCell align="left">Nombre</TableCell>
                  <TableCell align="left">Turno</TableCell>
              
                  </TableRow>
              </TableHead>
              <TableBody>
                  {subjectList.map((subject) => (
                  <TableRow key={subject.id}>
                      <TableCell component="th" scope="row">{subject.id}</TableCell>
                      <TableCell align="left">{subject.name}</TableCell>
                      <TableCell align="left">{subject.shift}</TableCell>
                      <TableCell align="left">
                      </TableCell>
                  </TableRow>
                  ))}
              </TableBody>
          </Table>
    </TableContainer>
    </>



      
  }


}export default SubjectAsigned
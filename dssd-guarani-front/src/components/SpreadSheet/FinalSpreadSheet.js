import React, { Component } from 'react';

import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CustomGrid from '../Grid'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'
import 'moment/locale/es';

import axios from 'axios'
import { __API_CAREER, __API_FINALCALL, __API_SUBJECT, __API_USER } from '../../consts/consts';


class FinalSpreadSheet extends Component{

    state = {
        careerList : [],
        chosenCareer : '',
        careerName : '',
        subjectList : [],
        chosenPeriod : '',
        teacherList : [],
        finalList : [],
        chosenCareerFinals : [],
        chosenCareerSubjects : [],
        chosenPeriodSubjects : [],
        gridDataSource : [],
    }

    componentDidMount(){
        const getCareers = axios.get(__API_CAREER)
        const getSubjects = axios.get(__API_SUBJECT)
        const getFinals = axios.get(__API_FINALCALL)
        const getUsers = axios.get(__API_USER)

        axios.all([getCareers,getSubjects,getFinals,getUsers]).then(axios.spread((careers,subjects,finals,users) => {
            this.setState({careerList : careers.data, 
                           subjectList : subjects.data, 
                           finalList : finals.data,
                           teacherList : users.data.filter( user => user.role === 2)
                         })
        }));
    }


    onCareerChange = (ev) => {

        this.setState({chosenCareer : ev.target.value, gridDataSource : []})
        let subjectsOfCareer = this.state.subjectList.filter( subject => subject.career.id === ev.target.value)
        let careerName = this.state.careerList.find( career => career.id == ev.target.value).name
        let subjectsOfCareerIds =  []
        subjectsOfCareer.forEach( sub => {
            subjectsOfCareerIds.push(sub.id)
        })
        let finalsOfCareer = this.state.finalList.filter( final => subjectsOfCareerIds.includes(final.subject)).sort((a,b) => a.date > b.date)

        this.setState({chosenCareerFinals : finalsOfCareer,
                       chosenCareerSubjects : subjectsOfCareer,
                        careerName : careerName})
        
        if (finalsOfCareer.length !== 0)
            this.generateGridDataSource(finalsOfCareer,subjectsOfCareer);        
    }

    generateGridDataSource = (finalsOfCareer,subjectsOfCareer) =>  {
        var dataSource = []
        finalsOfCareer.forEach( final => 
            dataSource.push({
                subject : subjectsOfCareer.find( sub => sub.id === final.id).name,
                date :    this.setFinalDateTime(final.date),
                teachers :  this.getTeacherNames(final)
            })
        )
        console.log(dataSource)
        this.setState({gridDataSource : dataSource})
    }

    setSubjectName = (id) => {
        var name = this.state.chosenCareerSubjects.find( sub => sub.id === id).name
        return name
    }

    setFinalDateTime(date) {
        moment.locale('es')
        return moment(date).format('DD [de] MMMM hh:mm')
    }

    getTeacherNames(final){
        var teacherNamesConcat = ""
        final.inscriptionFinals.forEach( insc => {
            var teacher = this.state.teacherList.find(teacher => teacher.id === insc.userId)
            if(teacher !== undefined){
                teacherNamesConcat+= teacher.name + " "+teacher.surname + ", "
            }
        })
        teacherNamesConcat = teacherNamesConcat.slice(0, -2);
        return teacherNamesConcat.length === 0 ? "A definir" : teacherNamesConcat
    }


    render(){
        return (
                <Container maxWidth="md">
                    <h3>Planilla de Finales</h3>
                        <>
                        <Grid container xs={12} spacing={1}>
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Carrera</InputLabel>
                                    <Select onChange={this.onCareerChange} value={this.state.chosenCareer}>
                                        {this.state.careerList.map( career => 
                                            <MenuItem key={career.id} value={career.id}>{career.name}</MenuItem>
                                        )}
                                        
                                    </Select>
                                </FormControl>
                            </Grid>
                            {this.state.chosenCareerFinals.length !== 0 ?
                            <>
                            <CustomGrid id='finalsGrid'
                                dataSource={this.state.gridDataSource}
                                toolbar={true}
                                export={true}
                                rowHeight={30}
                                columns={[
                                    { header: "Materia", field: "subject", width: '50', textAlign: 'Center' },
                                    { header: "Día y Hora", field: "date", width: '30', textAlign: 'Center' },
                                    { header: "Docentes", field: "teachers", width: '50', textAlign: 'Center' }
                                ]}
                                headerExportText={"Finales de "+this.state.careerName}

                            />

                            </> : null
                            }
                        </Grid>
                    <br />
                    </>
                </Container>)
    }

}

export default FinalSpreadSheet;
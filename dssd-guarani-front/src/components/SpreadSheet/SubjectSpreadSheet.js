import React, { Component } from 'react';

import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import CustomGrid from '../Grid'


import moment from 'moment'


import axios from 'axios'
import { __API_CAREER, __API_SUBJECT, __API_USER } from '../../consts/consts';




class SubjectSpreadSheet extends Component{

    state = {
        careerList : [],
        chosenCareer : '',
        subjectList : [],
        teacherList : [],
        chosenPeriod : '',
        chosenCareerSubjects : [],
        chosenPeriodSubjects : [],
        dataSourceGrid : []
    }

    componentDidMount(){
        const getCareers = axios.get(__API_CAREER)
        const getSubjects = axios.get(__API_SUBJECT)
        const getUsers = axios.get(__API_USER)

        axios.all([getCareers,getSubjects,getUsers]).then(axios.spread((careers,subjects,users) => {
            this.setState({careerList  : careers.data, 
                           subjectList : subjects.data, 
                           teacherList : users.data.filter( user => user.role === 2), 
                        })
        }));
    }

    onChosenPeriodChange = (ev) => {
        debugger;
        this.setState({chosenPeriod : ev.target.value,dataSourceGrid : [], chosenPeriodSubjects : []})
        let subjectsOfPeriod = this.state.chosenCareerSubjects.filter( subject => subject.period === ev.target.value).sort((a,b) => a.year - b.year || a.shift- b.shift)
        this.setState({chosenPeriodSubjects : subjectsOfPeriod})
        if (subjectsOfPeriod.length !== 0)
            this.generateGridDataSource(subjectsOfPeriod);
    }

    generateGridDataSource = (subjectsOfPeriod) =>  {
        var dataSource = []
        subjectsOfPeriod.forEach( subject => 
            dataSource.push({
                name : subject.name,
                date :    subject.weekDay +" "+ moment(subject.startTime).format("hh:mm")+ " a " + moment(subject.endTime).format("hh:mm"),
                teachers :  this.getTeacherNames(subject),
                year : this.setSubjectYear(subject.year),
                shift : this.setSubjectShift(subject.shift)
            })
        )
        console.log(dataSource)
        this.setState({gridDataSource : dataSource})
    }

    onCareerChange = (ev) => {
        debugger;
        this.setState({dataSourceGrid : [], chosenPeriodSubjects : [], chosenPeriod : []})
        this.setState({chosenCareer : ev.target.value})
        let subjectsOfCareer = this.state.subjectList.filter( subject => subject.career.id === ev.target.value)
        this.setState({chosenCareerSubjects : subjectsOfCareer})        
    }

    setSubjectYear(intYear){
        switch(intYear){
            case 1: return "Primero"
            case 2: return "Segundo"
            case 3: return "Tercero"
            case 4: return "Cuarto"
            case 5: return "Quinto"
            default: return "Desconocido"
        }
    }

    setSubjectShift(intShift){
        switch(intShift){
            case 1: return "Mañana"
            case 2: return "Tarde"
            case 3: return "Noche"
            default: return "Desconocido"
        }
    }

    getTeacherNames(subject){
        debugger;
        var teacherNamesConcat = ""
        subject.courses.forEach( course => {
            var teacher = this.state.teacherList.find(teacher => teacher.id === course.userId)
            if(teacher !== undefined){
                teacherNamesConcat+= teacher.name + " "+teacher.surname + ", "
            }
        })
        debugger;
        teacherNamesConcat = teacherNamesConcat.slice(0, -2);

        return teacherNamesConcat.length === 0 ? "A definir" : teacherNamesConcat
    }


    render(){
        return (
                <Container maxWidth="md">
                    <h3>Planilla de Cuatrimestre</h3>
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
                            {this.state.chosenCareer.length !== 0 ? 
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Cuatrimestre</InputLabel>
                                    <Select onChange={this.onChosenPeriodChange} value={this.state.chosenPeriod}>
                                            <MenuItem value={1}>Primero</MenuItem>
                                            <MenuItem value={2}>Segundo</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid> : null}
                            {this.state.chosenCareerSubjects.length !== 0 && this.state.chosenPeriod.length !== 0 ?
                            <>
                            <CustomGrid id='subjectsGrid'
                                dataSource={this.state.gridDataSource}
                                pageSettings={{ pageCount: 1, pageSizes: [5, 10, 12, 15, 20, 50] }}
                                allowPaging={false}
                                selectionSettings={{ type: 'Multiple' }}
                                allowResizing={true}
                                allowSorting={true}
                                allowTextWrap={true}
                                searching={true}
                                export={true}
                                toolbar={true}
                                rowHeight={30}
                                columns={[
                                        { header: "Materia", field: "name", width: '20', textAlign: 'Center' },
                                        { header: "Día y Horario", field: "date", width: '20', textAlign: 'Center' },
                                        { header: "Docentes", field: "teachers", width: '20', textAlign: 'Center' },
                                        { header: "Año", field: "year", width: '10', textAlign: 'Center' },
                                        { header: "Turno", field: "shift", width: '10', textAlign: 'Center' }
                                    ]}
                                headerExportText={this.state.careerList.find(career => career.id === this.state.chosenCareer).name + 
                                                  " - "+ (this.state.chosenPeriod === 1 ? "Primer" : "Segundo")+ " Cuatrimestre"}
                                allowGrouping={false}
                                allowDeleting={false}
                            />
                            </> : null
                            }
                        </Grid>
                    <br />
                    </>
                </Container>)
    }

}

export default SubjectSpreadSheet;
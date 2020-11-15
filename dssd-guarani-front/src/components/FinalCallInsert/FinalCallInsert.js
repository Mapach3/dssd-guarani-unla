import React, { Component } from 'react';

import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip';
import axios from 'axios'
import moment from 'moment'

import {__API_SUBJECT, __API_FINALCALL, __API_USER} from '../../consts/consts'


class FinalCallInsert extends Component{

    state = {
        isLoading : false,
        errorMsg : '',
        formFinalDate : '',
        formFinalScoreUploadLimit : '',
        formSubject : '',
        subjectList : [] , 
        teacherList : [],
        selectedTeachers : [],
    }

    componentDidMount = () =>  {
        const getSubjects = axios.get(__API_SUBJECT)
        const getUsers = axios.get(__API_USER)
        axios.all([getSubjects,getUsers]).then(axios.spread((subjects, users) => {
            console.log("Valor: ",this.removeDuplicates(subjects.data))
            this.setState({subjectList : this.removeDuplicates(subjects.data),
                           teacherList : users.data.filter( user => user.role === 2)}) 
        }))
    }

    removeDuplicates(arr){
        debugger;
       for(let index in arr){
           if (arr.find(sub => sub.subjectCode === arr[index].subjectCode && sub.id !== arr[index].id)){
               arr.splice(index,1)
           }
       }
       return arr;

    }

    onFinalDateChange = (ev) => {
        console.log(ev.target.value)
        this.setState({formFinalDate : ev.target.value})
    }

    onSubjectChange = (ev) => {
        this.setState({ formSubject : ev.target.value })
    }

    onFinalScoreUploadLimitChange = (ev) => {
        console.log(ev.target.value)
        this.setState({formFinalScoreUploadLimit : ev.target.value})
    }

    onSelectedTeachersChange = (ev, values) => {
        debugger;
        this.setState({ selectedTeachers: values })
    }

    insertFinalCall = (ev) => {
        this.setState({errorMsg : ""})
        ev.preventDefault()
        ev.persist()
        const {formFinalDate, formSubject,selectedTeachers} = this.state

        if (formFinalDate.length === 0 || formSubject.length === 0 ){
                this.setState({errorMsg : "Por favor, complete todos los campos y revise las fechas"})
        }
        else if(!moment(formFinalDate).isValid()){
            this.setState({errorMsg : "El formato de fecha no es correcto"})

        }else{

            var teachers = []
            selectedTeachers.map(teacher => teachers.push({ userid: teacher.id }))

            const options = {
                url : __API_FINALCALL,
                method : "POST",
                data : {
                    date : formFinalDate,
                    subjectid : formSubject,
                    inscriptionwindowid : 2,
                    inscriptionfinals : teachers
                }
                
            }

            axios(options).then( resp => {
                if (resp.status === 200){
                    
                    this.setState({errorMsg : "Final cargado exitosamente", formFinalDate : '',formSubject : ''})
                    ev.target.reset()
                }
            }).catch(error => {
                this.setState({errorMsg : "Hubo un error cargando el llamado"})
            })

        }
        
    }

    render() {
        return (
            // <main
            //     className={clsx(this.props.classes.content, {
            //         [this.props.classes.contentShift]: this.props.open,
            //     })}
            // >
                // <div className={this.props.classes.drawerHeader} />
                <Container maxWidth="xs">
                    <h3>Ingrese datos del Llamado de Final</h3>
                    {this.state.errorMsg.length !== 0 ?
                        <>
                            <Chip
                                fullWidth
                                variant="outlined"
                                color="primary"
                                size="small"
                                label={this.state.errorMsg}
                            />
                            <br /><br />
                        </> :
                        null}
                    <form autoComplete="off" onSubmit={this.insertFinalCall}>
                        <Grid container spacing={1}>

                            <Grid item sm={12}>
                                <TextField fullWidth variant="outlined" onChange={this.onFinalDateChange} id="finalDate" label="Fecha del Examen" type="date" InputProps={{ inputProps: { min: "2010-05-01", max: "2050-12-31" } }} InputLabelProps={{ shrink: true }} />
                            </Grid>
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <InputLabel>Materia</InputLabel>
                                    <Select onChange={(ev) => this.onSubjectChange(ev)} value={this.state.formSubject}>
                                        {this.state.subjectList.map(subject => 
                                            <MenuItem key={subject.id} value={subject.id}>{subject.name}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={12}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete options={this.state.teacherList}
                                        onChange={(ev, values) => this.onSelectedTeachersChange(ev, values)}
                                        filterSelectedOptions
                                        value={this.state.selectedTeachers}
                                        getOptionLabel={(option) => option.name + " " + option.surname}
                                        renderInput={(params) => <TextField {...params} variant="outlined" label="Docentes" />}
                                        multiple id="tags-standard" noOptionsText="No hay coincidencias"
                                    />
                                </FormControl>
                            </Grid>
                        <br />
                        <Button variant="contained" disabled={this.state.isLoading} type="submit" color="primary">
                            Agregar Llamado
                        </Button>
                        </Grid>
                    </form>
                    <br />
                </Container>
                //</main>
                
                
            )
    
        }










}

export default FinalCallInsert;
import React, { Component } from 'react';
import axios from 'axios'
import { __API_FINAL } from '../../consts/consts';
import Container from '@material-ui/core/Container';

import CustomGrid from '../Grid'

import Grid from '@material-ui/core/Grid'
import moment from 'moment'
import 'moment/locale/es';
class GradesInform extends Component {

  state = {
    gradesList: [],
    loading: true,
    errorMsg: '',
    dialogOpen: false,
    average: null
  }

  componentDidMount() {
    this.updateGradesList()
  }

  updateGradesList() {
    axios.get(__API_FINAL + 'GetByUser/' + window.localStorage.getItem('userId')).then(resp => {
      var finals = [];
      console.log(resp.data);
      var grades = resp.data.filter(grade => grade.score != 0);
      for (var i = 0; i < grades.length; i++) {
        finals.push({
          id: grades[i].finalCall.id,
          subject: grades[i].finalCall.subject.name,
          date: grades[i].finalCall.date,
          score: grades[i].score
        })
      }
      this.setState({
        gradesList: finals,
        loading: false
      })
      this.generateGridDataSource(finals)
    })
  }

  generateGridDataSource = (finals) =>  {
    var dataSource = []
    finals.forEach( final => 
        dataSource.push({
            subject : final.subject,
            score: final.score,
            date : this.setFinalDateTime(final.date)
        })
    )
    console.log(dataSource)
    this.setState({gridDataSource : dataSource, average: this.getAverage(finals)})
  }

  setSubjectName = (id) => {
    var name = this.state.chosenCareerSubjects.find( sub => sub.id === id).name
    return name
  }

  setFinalDateTime(date) {
    moment.locale('es')
    return moment(date).format('DD [de] MMMM [de] YYYY [-] hh:mm')
  }

  getAverage(finals) {
    var grades = 0;
    finals.map((grade) => {
      grades = grades + Number(grade.score)
    });
    return (grades/finals.length).toFixed(2)
  }


  render() {
    const { gradesList, loading, errorMsg, average } = this.state
    return (
      <Container maxWidth="md">
          <h3>Informe Analitico</h3>
          <>
          <Grid container xs={12} spacing={1}>
              <Grid item sm={12}>
                      <h3>Promedio academico: {average}</h3>
              </Grid>
              <>
              <CustomGrid id='finalsGrid'
                  dataSource={this.state.gridDataSource}
                  toolbar={true}
                  export={true}
                  rowHeight={30}
                  columns={[
                      { header: "Materia", field: "subject", width: '50', textAlign: 'Center' },
                      { header: "Calificacion", field: "score", width: '30', textAlign: 'Center' },
                      { header: "Día y Hora", field: "date", width: '30', textAlign: 'Center' },
                  ]}
                  headerExportText={"Informe Analitico de "+window.localStorage.getItem('nameUser')+" - Promedio Academico: "+average}

              />

              </>
          </Grid>
      <br />
      </>
        </Container>
    )
  }

}

export default GradesInform
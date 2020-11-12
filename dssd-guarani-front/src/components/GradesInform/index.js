import React, { Component } from 'react';
import axios from 'axios'
import { __API_FINAL } from '../../consts/consts';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress'
import GradesGrid from './GradesGrid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


class GradesInform extends Component {

  state = {
    gradesList: [],
    loading: true,
    errorMsg: '',
    dialogOpen: false
  }

  componentDidMount() {
    this.updateGradesList()
  }

  updateGradesList() {
    axios.get(__API_FINAL + 'GetByUser/' + window.localStorage.getItem('userId')).then(resp => {
      var finals = [];
      console.log(resp.data);
      var grades = resp.data;
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
    })
  }

  handleDialog() {
    this.setState({ dialogOpen: !this.state.dialogOpen })
  }

  render() {
    const { gradesList, loading, errorMsg } = this.state
    return (
      <main
        className={clsx(this.props.classes.content, {
          [this.props.classes.contentShift]: this.props.open,
        })}
      >
        <div className={this.props.classes.drawerHeader} />
        <Container maxWidth="xs">
          <h3>Informe Analitico</h3>
          { loading ? <CircularProgress color="secondary" /> : <GradesGrid grades={gradesList} />}
          <Dialog
            open={this.state.dialogOpen}
            keepMounted
            onClose={() => this.handleDialog()}
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {errorMsg}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => this.handleDialog()} color="primary">
                Aceptar
            </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </main>
    )
  }

}

export default GradesInform
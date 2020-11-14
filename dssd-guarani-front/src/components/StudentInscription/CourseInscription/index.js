import React, { Component } from 'react';
import axios from 'axios'
import { __API_SUBJECTSTUDENT, __API_USERSTUDENT } from '../../../consts/consts';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress'
import SubjectGrid from './SubjectGrid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


class CourseInscription extends Component {

  state = {
    subjectList: [],
    loading: true,
    errorMsg: '',
    dialogOpen: false
  }

  componentDidMount() {
    this.updateSubjectList()
  }

  getNotApprovedSubjects(subjects) {
    console.log(subjects.filter(subject => this.subjectIsApproved(subject.courses) && subject.inscriptionWindow.id == 1 && subject.career.id == window.localStorage.getItem('careerId')))
    return subjects.filter(subject => !this.subjectIsApproved(subject.courses) && subject.inscriptionWindow.id == 1 && subject.career.id == window.localStorage.getItem('careerId'))
  }

  subjectIsApproved(courses) {
    return courses.find(course => course.userId == window.localStorage.getItem('userId') && Number(course.courseAverage) >= 4)
  }

  updateSubjectList() {
    axios.get(__API_SUBJECTSTUDENT).then(resp => {
      console.log(resp.data);
      this.setState({
        subjectList: this.getNotApprovedSubjects(resp.data),
        loading: false
      })
    })
  }

  handleDialog() {
    this.setState({ dialogOpen: !this.state.dialogOpen })
  }

  render() {
    const { subjectList, loading, errorMsg } = this.state
    return (
      // <main
      //   className={clsx(this.props.classes.content, {
      //     [this.props.classes.contentShift]: this.props.open,
      //   })}
      // >
        // <div className={this.props.classes.drawerHeader} />
        <Container maxWidth="md">
          <h3>Listado de cursadas</h3>
          <SubjectGrid subjects={subjectList} />
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
      // </main>
    )
  }

}

export default CourseInscription
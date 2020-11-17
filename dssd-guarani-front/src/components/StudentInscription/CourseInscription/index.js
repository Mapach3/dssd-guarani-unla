import React, { Component } from 'react';
import axios from 'axios'
import { __API_SUBJECTSTUDENT, __API_USERSTUDENT, __API_COURSESTUDENT } from '../../../consts/consts';
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
    approvedSubjectsCodes: [],
    teacherList: [],
    loading: true,
    errorMsg: '',
    dialogOpen: false
  }

  componentDidMount() {
    const getUsers = axios.get(__API_USERSTUDENT)
    axios.all([getUsers]).then(axios.spread((users) => {
        this.setState({teacherList : users.data.filter( user => user.role === 2), })
    }));
    this.updateSubjectList()
  }

  getNotApprovedSubjects(subjects) {
    this.approvedSubjectsCodes = this.getApprovedSubjectCodes(subjects)
    console.log(subjects.filter(subject => !this.isAnApprovedCode(subject.subjectCode) && subject.inscriptionWindow.id == 1 && subject.career.id == window.localStorage.getItem('careerId')))
    return subjects.filter(subject => !this.isAnApprovedCode(subject.subjectCode) && subject.inscriptionWindow.id == 1 && subject.career.id == window.localStorage.getItem('careerId'))
  }

  isAnApprovedCode(code) {
    return this.approvedSubjectsCodes.find(subjectCode => subjectCode == code)
  }

  subjectIsApproved(courses) {
    return courses.find(course => course.userId == window.localStorage.getItem('userId') && Number(course.courseAverage) >= 4)
  }

  getApprovedSubjectCodes(subjects) {
    var codes = []
    subjects.map((subject) => {
      if(this.subjectIsApproved(subject.courses)){
        codes.push(subject.subjectCode)
      }
    });
    console.log(codes);
    return codes;
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

  createInscription(userId,subjectId,active,inWindow) {
    this.setState({ errorMsg: '' })
    var id = parseInt(userId)
    var method = "POST"
    if(active){
      method = "DELETE"
    }
    if(inWindow){
      const options = {
        method : method,
        url : __API_COURSESTUDENT,
      
        data : {
            userid : Number(userId),
            subjectid : Number(subjectId)
        }
      } 
      axios(options).then(resp => {
        console.log(resp.data)
        this.setState({errorMsg : resp.data, dialogOpen : true})
        this.updateSubjectList()
      })
    }
    else{
      this.setState({errorMsg : "La ventana de inscripcion no se encuentra activa, operacion no valida.", dialogOpen : true})
      this.updateSubjectList()
    }
  }
  render() {
    const { subjectList, teacherList, loading, errorMsg } = this.state
    return (
      // <main
      //   className={clsx(this.props.classes.content, {
      //     [this.props.classes.contentShift]: this.props.open,
      //   })}
      // >
        // <div className={this.props.classes.drawerHeader} />
        <Container maxWidth="md">
          <h3>Listado de cursadas</h3>
          <SubjectGrid subjects={subjectList} teacherList={teacherList} action={(userId,subjectId,active,inWindow) => this.createInscription(userId,subjectId,active,inWindow)}/>
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
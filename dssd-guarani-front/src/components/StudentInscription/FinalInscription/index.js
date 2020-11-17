import React, { Component } from 'react';
import axios from 'axios'
import { __API_SUBJECTSTUDENT, __API_USERSTUDENT, __API_COURSESTUDENT, __API_FINALSTUDENT, __API_FINAL } from '../../../consts/consts';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress'
import SubjectGrid from './SubjectGrid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


class FinalInscription extends Component {

  state = {
    finalsList: [],
    subjectsList: [],
    approvedFinalsCodes: [],
    loading: true,
    errorMsg: '',
    dialogOpen: false
  }

  componentDidMount() {
    axios.get(__API_SUBJECTSTUDENT).then(resp => {
      console.log(resp.data);
      this.setState({
        subjectsList: resp.data
      })
      this.updateFinalsList(resp.data)
    })
  }

  getNotApprovedFinals(finals, subjects) {
    this.approvedFinalsCodes = this.getApprovedFinalCodes(finals)
    console.log(finals.filter(final => !this.isAnApprovedCode(final.subjectCode) && final.inscriptionWindow.id == 2 && this.getCareerIdOfSubject(final, subjects) == window.localStorage.getItem('careerId')))
    return finals.filter(final => !this.isAnApprovedCode(final.subjectCode) && final.inscriptionWindow.id == 2 && this.getCareerIdOfSubject(final, subjects) == window.localStorage.getItem('careerId'))
  }

  getCareerIdOfSubject(final, subjects) {
    return subjects.find(subject => subject.id == final.subject).career.id
  }

  isAnApprovedCode(code) {
    return this.approvedFinalsCodes.find(subjectCode => subjectCode == code)
  }

  finalIsApproved(finals) {
    return finals.find(final => final.userId == window.localStorage.getItem('userId') && Number(final.score) >= 4)
  }

  getApprovedFinalCodes(finals) {
    var codes = []
    finals.map((final) => {
      if(this.finalIsApproved(final.inscriptionFinals)){
        codes.push(this.subjectsList.find(subject => subject.id == final.subjectId).subjectCode)
      }
    });
    console.log(codes);
    return codes;
  }

  updateFinalsList(subjects) {
    axios.get(__API_FINALSTUDENT).then(resp => {
      console.log(resp.data);
      this.setState({
        finalsList: this.getNotApprovedFinals(resp.data, subjects),
        loading: false
      })
    })
  }

  handleDialog() {
    this.setState({ dialogOpen: !this.state.dialogOpen })
  }

  createInscription(userId,finalId,active,inWindow) {
    this.setState({ errorMsg: '' })
    var id = parseInt(userId)
    var method = "POST"
    if(active){
      method = "DELETE"
    }
    if(inWindow){
      const options = {
        method : method,
        url : __API_FINAL,
      
        data : {
            userid : Number(userId),
            finalid : Number(finalId)
        }
      } 
      axios(options).then(resp => {
        this.setState({errorMsg : "Solicitud exitosa.", dialogOpen : true})
        this.componentDidMount()
      })
    }
    else{
      this.setState({errorMsg : "La ventana de inscripcion no se encuentra activa, operacion no valida.", dialogOpen : true})
      this.componentDidMount()
    }
  }

  render() {
    const { finalsList, subjectsList, loading, errorMsg } = this.state
    return (
      // <main
      //   className={clsx(this.props.classes.content, {
      //     [this.props.classes.contentShift]: this.props.open,
      //   })}
      // >
        // <div className={this.props.classes.drawerHeader} />
        <Container maxWidth="md">
          <h3>Listado de finales</h3>
          <SubjectGrid finals={finalsList} subjectsList={subjectsList} action={(userId,finalId,active,inWindow) => this.createInscription(userId,finalId,active,inWindow)}/>
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

export default FinalInscription
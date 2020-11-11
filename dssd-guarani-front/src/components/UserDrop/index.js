import React, { Component } from 'react';
import axios from 'axios'
import { __API_USER } from '../../consts/consts';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress'
import UserGrid from './UserGrid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


class UserDrop extends Component {

  state = {
    userList: [],
    loading: true,
    errorMsg: '',
    dialogOpen: false

  }

  componentDidMount() {
    this.updateUserList()

  }

  updateUserList() {
    axios.get(__API_USER).then(resp => {
      console.log(resp.data);
      this.setState({
        userList: resp.data.filter(user => user.role !== 0),
        loading: false
      })
    })
  }

  changeUserActive(userId) {
    debugger;
    this.setState({ errorMsg: '' })
    var id = parseInt(userId)
    var user = this.state.userList.find(user => user.id === id)
    var newActive = !user.active

    axios.patch(__API_USER + userId + "/Active/" + newActive).then(response => {
      console.log(response.data)
      this.setState({ errorMsg: "El cambio fue guardado", dialogOpen: true })
      this.updateUserList()
    }).catch(error => {
      this.setState({ errorMsg: "Ha habido un error", dialogOpen: true })
    })
  }

  handleDialog() {
    this.setState({ dialogOpen: !this.state.dialogOpen })
  }

  render() {
    const { userList, loading, errorMsg } = this.state
    return (
      <main
        className={clsx(this.props.classes.content, {
          [this.props.classes.contentShift]: this.props.open,
        })}
      >
        {/* <div className={this.props.classes.drawerHeader} /> */}
        <Container maxWidth="md">
          <h3>Baja de usuario</h3>
          <UserGrid users={userList} action={(id) => this.changeUserActive(id)} />
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

export default UserDrop
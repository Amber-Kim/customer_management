import React, { Component } from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});


class CustomerUpdate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    }
  }

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0], // 하나의 파일만 선택하도록 만듦
      fileName: e.target.value
    })
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  
  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      file: null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    })
  }
  
  // handleFormSubmit에서 받은 데이터를 아래 url로 보냄
  // 파일을 서버로 전송할 때, headers: content-type: multipart/form-data 사용
  updateCustomer = (id) => {
    const url = '/api/customers/' + id
    const formData = new FormData();
    formData.append('id', this.state.id)
    formData.append('image', this.state.file)
    formData.append('name', this.state.userName)
    formData.append('birthday', this.state.birthday)
    formData.append('gender', this.state.gender)
    formData.append('job', this.state.job)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    // 데이터 전송
    return post(url, formData, config)
  }

  handleFormSubmit = (id) => {
    this.updateCustomer(id)
      .then((response) => {
        console.log(response.data)
        this.props.stateRefresh();
      })
    this.setState({
      file:null,
      userName: '',
      birthday: '',
      gender: '',
      job: '',
      fileName: '',
      open: false
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Update
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Update Customer Info</DialogTitle>
          <DialogContent>
            <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
            <label htmlFor="raised-button-file">
              <Button variant="contained" color="primary" component="span" name="file">
                {this.state.fileName === "" ? "Choose the file" : this.state.fileName}
              </Button>
            </label><br />
            <TextField label="Name" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br />
            <TextField label="DOB" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br />
            <TextField label="Gender" name="gender" value={this.state.gender} onChange={this.handleValueChange} /> <br />
            <TextField label="Job" name="job" value={this.state.job} onChange={this.handleValueChange} /> <br />
          </DialogContent>
            <DialogActions>
              <Button variant="contained" color="primary" onClick={(e) => {this.handleFormSubmit(this.props.id)}} >Update</Button>
              <Button variant="outlined" color="primary" onClick={this.handleClose}>Close</Button>
            </DialogActions>{(e) => {this.deleteCustomer(this.props.id)}}
          </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CustomerUpdate);
import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme =>({
  root: {
    width : '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
    
  },
  table:{
    minWidth:1080
  },
  progress: {
    margin: theme.spacing(2)
  }
})

class App extends Component {
 // can be changed == useState
  state = {
    customers: "",
    completed: 0
  }

 // API 서버에 접근을 해서 데이터를 받아오는 작업
 // 생명주기 있음
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    // callApi에서 받아온 데이터를 res에 넣음
    // customers: res를 통해 state라는 변수 값에 넣음
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

 // 접속해서 데이터를 받아오고자 하는 API 주소를 넣음
  callApi = async() => {
    const response = await fetch('/api/customers') 
    const body = await response.json(); // 데이터를 body 라는 변수에 넣음
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  }

  render() {
    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
          /> )}) : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress value={this.state.complated} />
            </TableCell>
          </TableRow> }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

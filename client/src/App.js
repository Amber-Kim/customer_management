import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { alpha } from '@mui/material/styles';

const styles = theme =>({
  root: {
    width: '100%',
    minWidth: 1080
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    marginLeft: 18,
    marginRight: 18
  },
  progress: {
    margin: theme.spacing(2)
  },
  grow: {
    flexGrow: 1,
  },
  tableHead: {
    fontSize: '1.0rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing(10),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  }
});

class App extends Component {
 // can be changed == useState
  constructor(props) {
    super(props);
    this.state = {
      customer: '',
      completed:0
    }
  }

  stateRefresh = () => {
    this.setState({
      customer: '',
      completed: 0
    })
    this.callApi()
    // callApi?????? ????????? ???????????? res??? ??????
    // customers: res??? ?????? state?????? ?????? ?????? ??????
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

 // API ????????? ????????? ?????? ???????????? ???????????? ??????
 // ???????????? ??????
  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    // callApi?????? ????????? ???????????? res??? ??????
    // customers: res??? ?????? state?????? ?????? ?????? ??????
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

 // ???????????? ???????????? ??????????????? ?????? API ????????? ??????
  callApi = async() => {
    const response = await fetch('/api/customers') 
    const body = await response.json(); // ???????????? body ?????? ????????? ??????
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  }

  render() {
    const cellList = ["No.", "Profile img", "Name", "DOB", "Gender", "Position", "Setting"];
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className="App-header">
          <div className="title">
            Customer Management System
          </div>
        </div>
        <div className={classes.menu}>
          <CustomerAdd stateRefresh={this.stateRefresh} />
        </div>
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow colSpan="6">
                <TableCell className={classes.tableHead}>No.</TableCell>
                <TableCell className={classes.tableHead}>Profile img.</TableCell>
                <TableCell className={classes.tableHead}>Name</TableCell>
                <TableCell className={classes.tableHead}>DOB</TableCell>
                <TableCell className={classes.tableHead}>Gender</TableCell>
                <TableCell className={classes.tableHead}>Position</TableCell>
                <TableCell colSpan="6" align="center" className={classes.tableHead}>Setting</TableCell>
                {/* {cellList.map(c => {
                  return <TableCell className={classes.tableHead}>{c}</TableCell>
                })} */}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(c => { return ( <Customer stateRefresh={this.stateRefresh} key={c.id} id={c.id} image={c.image} name={c.NAME} birthday={c.birthday} gender={c.gender} job={c.job}
            /> )}) : 
            <TableRow>
              <TableCell colSpan="7" align="center">
                <CircularProgress value={this.state.complated} />
              </TableCell>
            </TableRow> }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);

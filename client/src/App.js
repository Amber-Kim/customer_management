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

const styles = theme =>({
  root: {
    width : '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
    
  },
  table:{
    minWidth:1080
  }
})

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'amber',
  'birthday': '951120',
  'gender': 'Female',
  'job': 'developer'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'elthon',
  'birthday': '860406',
  'gender': 'male',
  'job': 'gamer'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'shawn',
  'birthday': '930621',
  'gender': 'male',
  'job': 'mid developer'
  },
]

class App extends Component {
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
            {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
          /> )})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);

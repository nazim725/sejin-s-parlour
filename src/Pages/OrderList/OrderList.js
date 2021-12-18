import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './OrderList.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const OrderList = () => {

  const [orders, setOrders] = React.useState([])
  const [status, setStatus] = React.useState('');


  React.useEffect(() => {
    fetch('http://localhost:5000/orders/all')
      .then(res => res.json())
      .then(data => {
        setOrders(data)
        console.log(data)
      })
  }, [])

  const handleDeleteOrder = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;

      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successfully');
            const remainingOrder = orders.filter(order => order._id !== id);
            setOrders(remainingOrder);
          }
        });
    }
  }


  const handleChangedStatus = id => {
    const url = `http://localhost:5000/orders/${id}`
    // console.log(id)
    console.log(url)
    fetch(url, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          alert("Update successful")
          window.location.reload(false);
        }


      })

  }



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Customer Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Service Name</StyledTableCell>
            <StyledTableCell align="center">Service Price</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
            <StyledTableCell align="center">Remove Order</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.customerName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.serviceName}</StyledTableCell>
              <StyledTableCell align="center">{row.servicePrice}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">
                <select className="button-update" onChange={e => setStatus(e.target.value)}>
                  <option value="Select" disabled selected>Select Status</option>
                  <option value="CANCEL">CANCEL</option>
                  <option value="PENDING">PENDING</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="CONFIRMED">CONFIRMED</option>

                </select>
                <button className="button-update" style={{ marginTop: '5px' }} onClick={() => handleChangedStatus(row._id)}>Update Order</button>
              </StyledTableCell>
              <StyledTableCell align="center"> <button className="button-delete" onClick={() => handleDeleteOrder(row._id)}>Remove Order</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;
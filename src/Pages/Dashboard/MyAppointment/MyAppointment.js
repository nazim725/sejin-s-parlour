import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Table, Button } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { NavLink } from 'react-router-dom';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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



const MyAppointment = () => {

    const { user } = useAuth();
    const [orders, setOrders] = React.useState([])

    React.useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            });
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

    return (

        <div>
            <h2 style={{ color: ' #ff6600' }}>My Appointments</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Customer Name</StyledTableCell>
                            <StyledTableCell align="center">Service Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Status</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                            <StyledTableCell align="center">Payment</StyledTableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.customerName}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.serviceName}</StyledTableCell>
                                <StyledTableCell align="center">{row.servicePrice}</StyledTableCell>
                                <StyledTableCell align="center">{row.status}</StyledTableCell>
                                <StyledTableCell align="center"><Button onClick={() => handleDeleteOrder(row._id)}>Cancel Order</Button></StyledTableCell>
                                <StyledTableCell align="center">{row.payment ? 'Paid' :
                                    <NavLink style={{ textDecoration: 'none' }} to={`dashboard/payment/${row._id}`}><button className="button-update">Pay</button></NavLink>}</StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
};

export default MyAppointment;
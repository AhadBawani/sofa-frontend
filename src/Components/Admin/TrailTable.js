import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ConfirmationDialog from './ConfirmationDialog';
import RenderTableRow from './RenderTableRow';

export default function TrailTable({ order, currentState }) {
    const [open, setOpen] = React.useState(false);
    const [action, setAction] = React.useState();
    const [orderId, setOrderId] = React.useState();
    
    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>
                                Order ID
                            </TableCell>
                            <TableCell align="center">
                                Order Invoice
                            </TableCell>
                            <TableCell align="center">
                                Username
                            </TableCell>
                            <TableCell align="center">
                                Phone Number
                            </TableCell>
                            <TableCell align="center">
                                Product Count
                            </TableCell>
                            <TableCell align="center">
                                Total
                            </TableCell>
                            <TableCell align="center">
                                Address
                            </TableCell>
                            <TableCell align="center">
                                City
                            </TableCell>
                            <TableCell align="center">
                                Delivered
                            </TableCell>
                            <TableCell align="center">
                                Delete
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            order?.map((row, index) => {
                                return <>
                                    <RenderTableRow key={index} row={row}
                                        currentState={currentState} openDialog={setOpen} 
                                        setAction={setAction} setOrderId={setOrderId}/>
                                </>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <ConfirmationDialog open={open} currentState={action} setOpen={setOpen} orderId={orderId}/>
            </div>
        </>
    );
}

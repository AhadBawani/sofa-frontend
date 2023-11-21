import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from
    '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from
    '@mui/icons-material/KeyboardArrowUp';

import Request from '../../RequestHandlers/Request/Request';
import { Button } from '@mui/material';



const RenderTableRow = (props) => {
    const { row, currentState, openDialog, setAction, setOrderId } = props;
    const [open, setOpen] = React.useState(false);

    const handleOrderDelivered = (orderId) => {
        openDialog(true);
        setAction('delivered');
        setOrderId(orderId);
    }

    const handleDeleteOrder = (orderId) => {        
        openDialog(true);
        setAction('delete');
        setOrderId(orderId);
    }
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> :
                            <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row?.orderId}
                </TableCell>
                <TableCell align="center">{row?.orderInvoice}</TableCell>
                <TableCell align="center">
                    {row?.username}
                </TableCell>
                <TableCell align="center">
                    {row?.phoneNumber}
                </TableCell>
                <TableCell align="center">
                    {row?.product?.length}
                </TableCell>
                <TableCell align="center">{row?.total}</TableCell>
                <TableCell align="center">{row?.address}</TableCell>
                <TableCell align="center">{row?.city}</TableCell>
                <TableCell align="center">
                    <Button variant='contained'
                        color='warning'
                        disabled={currentState === 'DeliveredOrder'}
                        onClick={() => handleOrderDelivered(row?.orderId)}>
                        Delivered
                    </Button>
                </TableCell>
                <TableCell align="center">
                    <Button variant='contained'
                        color='error'                        
                        onClick={() => handleDeleteOrder(row?.orderId)}>
                        Delete
                    </Button>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }} >
                            <div className='flex justify-center'>
                                <Typography variant="h5"
                                    gutterBottom component="div">
                                    Details
                                </Typography>
                            </div>
                            <div>
                                <Table size="small"
                                    aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                ID
                                            </TableCell>
                                            <TableCell align="center">
                                                Product Image
                                            </TableCell>
                                            <TableCell>
                                                Product Name
                                            </TableCell>
                                            <TableCell align="center">
                                                Quantity
                                            </TableCell>
                                            <TableCell align="center">
                                                Product Price
                                            </TableCell>
                                            <TableCell align="center">
                                                Total
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            row?.product?.map((productItem, index) => {
                                                return <>
                                                    <TableRow key=
                                                        {index}>
                                                        <TableCell
                                                            component="th"
                                                            scope="row">
                                                            {productItem?.id}
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            <div className='flex justify-center'>
                                                                <img
                                                                    src={Request.PRODUCT_IMAGE + productItem?.productImage}
                                                                    style={{ width: '90px', height: '60px', borderRadius: '8px' }}
                                                                />
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            {productItem?.productName}
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            {row?.quantity[index]}
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            {row?.productPrice[index]}
                                                        </TableCell>
                                                        <TableCell align="center">
                                                            {row?.quantity[index] * row?.productPrice[index]}
                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </div>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

export default RenderTableRow;
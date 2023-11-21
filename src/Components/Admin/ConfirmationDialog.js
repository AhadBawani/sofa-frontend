import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOrderHandler, DeliveredOrderHandler } from '../../RequestHandlers/RequestHandler/RequestHandler';

const ConfirmationDialog = ({ open, currentState, setOpen, orderId }) => {
    const user = useSelector((state) => state?.User?.user);
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(!open)
    };

    const handleConfirmDelete = () => {        
        DeleteOrderHandler(orderId, user?._id, dispatch, setOpen);
    }

    const handleConfirmDelivered = () => {
        DeliveredOrderHandler(orderId, user?._id, dispatch, setOpen);
    }
    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {currentState === "delivered" ?
                        "Are you sure you want to Delivered Order ?"
                        :
                        "Are you sure you want to Delete Order ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {currentState === "delivered" ?
                            "Once order is delivered it cannot be revorted."
                            :
                            "Once order is deleted it cannot be undo."}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    {
                        currentState === "delivered"
                            ?
                            <Button variant='contained'
                                onClick={handleConfirmDelivered}
                                color='warning'>
                                Delivered
                            </Button>
                            :
                            <Button variant='contained'
                                onClick={handleConfirmDelete}
                                color='error'>
                                Delete
                            </Button>
                    }
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default ConfirmationDialog;
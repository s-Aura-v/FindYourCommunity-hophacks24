import {Button, Dialog, DialogActions, DialogContent, DialogTitle, styled} from "@mui/material";
import {useState} from "react";
import '../styles/createEvent.css'


const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export function CreateEvents() {
    const [isEventOpen, setEventOpen] = useState(false);
    const [date, setDate] = useState(new Date());

    const handleEventOpen = () => {
        setEventOpen(true);
    };
    const handleEventClose = () => {
        setEventOpen(false);
    };

    return (
        <>
            <div onClick={handleEventOpen}>
                Hey
            </div>
            <BootstrapDialog
                onClose={handleEventClose}
                open={isEventOpen}
                maxWidth='sm' x
                fullWidth
            >
                <DialogTitle className="popup-title">
                    <span> Create Events  </span>
                </DialogTitle>
                <DialogContent className="overflow-clip" dividers>
                    <div className="forms-container">
                        <form>
                            <label htmlFor="ename">Event Name:</label><br/>
                            <input type="text" id="ename" name="ename" placeholder="Enter the event name "
                                   size="32"/><br/>

                            <label htmlFor="tags">Event Description:</label><br/>
                            <input type="text" className="description" id="description" name="description"
                                   size="54"/><br/>

                            <label htmlFor="street">Street Address</label><br/>
                            <input type="text" id="street" name="street"/><br/>

                            <label htmlFor="postal-code">ZIP Code</label><br/>
                            <input type="text" className="postal-code" id="postal-code" name="postal-code"
                                   autoComplete="postal-code"/><br/>

                            <label htmlFor="city">City</label><br/>
                            <input type="text" className="city" id="city" name="city"/><br/>

                            <label htmlFor="country">Country</label><br/>
                            <input type="text" className="country" id="country" name="country"
                                   autoComplete="country"/><br/>

                            <label htmlFor="date">Date</label><br/>
                            <input type="date" id="date" name="date"/><br/>


                            <label htmlFor="tags">Maximum Participants</label><br/>
                            <input type="text" className="max-participants" id="max-participants"
                                   name="max-participants"/><br/>
                        </form>
                    </div>


                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleEventClose}>
                        Close
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}

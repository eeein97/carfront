import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';

function AddCar({addCar}) {
    const [open, setOpen] = useState(false);
    //인풋입력값 상태관리
    const [car, setCar] = useState({
       brand: "",
       model: "",
       color: "",
       year: "",
       price: "" 
    });
    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        })
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setCar({
            brand: "",
            model: "",
            color: "",
            year: "",
            price: "" 
         })
    }
    const handleSave = () => {
        addCar(car);
        handleClose();
    }
    return (
        <div>
            <Button variant='contained' onClick={handleOpen}>New Car</Button>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <input placeholder='Brand' name='brand' 
                    value={car.brand} onChange={handleChange}/>
                    <br/>
                    <input placeholder='Model' name='model' 
                    value={car.model} onChange={handleChange}/>
                    <br/>
                    <input placeholder='Color' name='color' 
                    value={car.color} onChange={handleChange}/>
                    <br/>
                    <input placeholder='Year' name='year' 
                    value={car.year} onChange={handleChange}/>
                    <br/>
                    <input placeholder='Price' name='price' 
                    value={car.price} onChange={handleChange}/>
                    <br/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCar;
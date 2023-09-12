import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';

function EditCar({data, updateCar}) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: data.row.brand,
        model: data.row.model,
        color: data.row.color,
        year: data.row.year,
        price: data.row.price 
    })
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const handleChange = (e) => {
        setCar({
            ...car,
            [e.target.name]: e.target.value
        })
    }
    //자동차 업데이트 하고 모달폼 닫기
    const handleSave = () => {
        updateCar(car, data.id);
        handleClose();
    }
    return (
        <div>
            <button onClick={handleOpen}>Edit</button>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description" maxWidth="sm" fullWidth={true} >
                <DialogTitle>Edit Car</DialogTitle>
                <DialogContent>
                    <input placeholder='Brand' name='brand' 
                    value={car.brand} onChange={handleChange} style={{width: "90%", padding: "10px", margin: "6px"}}/>
                    <br/>
                    <input placeholder='Model' name='model' 
                    value={car.model} onChange={handleChange} style={{width: "90%", padding: "10px", margin: "6px"}}/>
                    <br/>
                    <input placeholder='Color' name='color' 
                    value={car.color} onChange={handleChange} style={{width: "90%", padding: "10px", margin: "6px"}}/>
                    <br/>
                    <input placeholder='Year' name='year' 
                    value={car.year} onChange={handleChange} style={{width: "90%", padding: "10px", margin: "6px"}}/>
                    <br/>
                    <input placeholder='Price' name='price' 
                    value={car.price} onChange={handleChange} style={{width: "90%", padding: "10px", margin: "6px"}}/>
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

export default EditCar;

import React from 'react';

import { Container, Typography, Button, Grid } from '@material-ui/core'

function Cart() {

    const isEmpty = true;
    const EmptyCart  = () => {
        <Typography variant="subtitle1" >Your Cart Is Empty. Add Items To Chagne That</Typography>
    }

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title}> Your Shopping Cart </Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart

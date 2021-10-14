import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField'

function AddressForm() {
    const methods = useForm();;

    return (
        <div>
            <Typography variant="h6" gutterBottom>Shipping</Typography>
            <FormProvider {...methods} >
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First Name' />
                    </Grid>
                </form>

            </FormProvider>
        </div>
    )
}

export default AddressForm

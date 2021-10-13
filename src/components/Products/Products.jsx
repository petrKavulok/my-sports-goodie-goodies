import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles'

const products = [
    {id:1, name: 'Shoes', description: 'Running shoes.', price:'$175', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4aa761ac-8687-4f1a-bc36-60fd3a9e6c4c/air-zoom-pegasus-38-womens-road-running-shoes-sCLHp5.png'}, 
    {id:2, name: 'Jacket', description: 'Everyday jacket.', price:'$80', image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e2da6bd-7c77-4182-b0d5-aa0cc91dcbf4/acg-cinder-cone-all-over-print-jacket-p7ShbX.png'} 
]

const Products = () => {

    const classes = useStyles();

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </ Grid>
                ))}
            </Grid>        
        </main>
    )
} 

export default Products
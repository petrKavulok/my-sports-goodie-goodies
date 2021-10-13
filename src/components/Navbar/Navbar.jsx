import React from 'react'
import { Appbar, Toolbar, IconButton, Badge, MenuItem, Item, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/pngegg.png';
import useStyles from './styles';

function NavbarNav() {

    const styles = useStyles();

    return (
        <>
            <Appbar position="fixed" className={classes.appBar} colo="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="My Sports Goodie Goodies" height="25px" className={classes.image} />
                        My Sports Goodie Goodies
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit"> 
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>

            </Appbar>
        </>
    )
}

export default NavbarNav

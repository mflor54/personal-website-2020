import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({ palette }) => ({
    container : {}
}), { name : 'Company' });

export default function Company() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            
        </div>
    );
}

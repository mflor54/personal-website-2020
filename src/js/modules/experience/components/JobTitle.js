import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({ palette }) => ({
    container : {}
}), { name : 'JobTitle' });

export default function JobTitle() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            
        </div>
    );
}

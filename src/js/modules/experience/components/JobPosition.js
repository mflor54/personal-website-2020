import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        fontSize : '1.5rem',
        fontWeight : 'bolder',
        fontStyle : 'italic',
        marginBottom : '16px'
    }
}), { name : 'JobPosition' });

export default function JobTitle({ position }) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            { position }
        </div>
    );
}

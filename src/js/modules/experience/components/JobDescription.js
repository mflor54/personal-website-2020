import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({ palette }) => ({
    container : {}
}), { name : 'JobDescription' });

export default function JobDescription({ description }) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            { description() }
        </div>
    );
}

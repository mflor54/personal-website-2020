import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({ palette }) => ({
    container : {}
}), { name : 'JobDate' });

export default function JobDate({ date }) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            { date }
        </div>
    );
}

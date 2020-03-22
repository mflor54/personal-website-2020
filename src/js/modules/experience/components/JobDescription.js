import React from 'react';
import { createUseStyles } from 'react';

const useStyles = createUseStyles(({ palette }) => ({
    container : {}
}), { name : 'JobDescription' });

export default function JobDescription() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>

        </div>
    );
}

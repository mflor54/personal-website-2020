import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        fontSize : '1.8rem'
    }
}), { name : 'Company' });

export default function CompanyName({ name }) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            { name }
        </div>
    );
}

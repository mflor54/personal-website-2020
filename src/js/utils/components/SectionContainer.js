import React from 'react';
import { createUseStyles } from 'react-jss';
import SectionHeader from './SectionHeader';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        width : '100vw',
        minHeight : '100vh',
        position : 'relative',
        display : 'flex',
        flexDirection : 'column',
        padding : '8px'
    }
}), { name : 'SectionContainer' });

export default function SectionContainer({
    children, sectionName ,classNames
}) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            { sectionName && <SectionHeader title={ sectionName }/> }
            { children }
        </div>
    );
};

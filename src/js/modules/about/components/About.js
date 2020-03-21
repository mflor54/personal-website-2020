import React from 'react';
import { createUseStyles } from 'react-jss';
import { SectionContainer } from 'components';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        // Subtracting 80px to take in AppBar height into consideration
        width : '100%',
        height : '100%',
        position : 'relative',
        display : 'flex'
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <SectionContainer>
            ABOUT ME
        </SectionContainer>
    );
}
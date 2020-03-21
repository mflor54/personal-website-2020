import React from 'react';
import { createUseStyles } from 'react-jss';
import { SectionContainer } from 'components';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        width : '100%',
        height : '100%',
        display : 'flex'
    }
}));

export default function Experience() {
    const classes = useStyles();

    return (
        <SectionContainer sectionName={ 'experience' }>
            EXPERIENCE
        </SectionContainer>
    );
}

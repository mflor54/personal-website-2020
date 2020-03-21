import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { mdiHumanGreeting } from '@mdi/js';
import Icon from '@mdi/react';
import { SectionContainer } from 'components';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        // Subtracting 80px to take in AppBar height into consideration
        width : '100%',
        position : 'relative',
        display : 'flex',
        flexGrow : '1',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center'
    },
    greeting : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        top : '0',
        fontSize : '2.5rem',
        textAlign : 'center'
    }
}));

export default function About() {
    const theme = useSelector( s => s.core.theme);
    const classes = useStyles();

    return (
        <SectionContainer>
            <div className={ classes.container }>
                <div className={ classes.greeting }>
                    Hey there! I'm Mike :)
                </div>
                <div className={ classes.about }>

                </div>
            </div>
        </SectionContainer>
    );
}

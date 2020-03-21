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
        top : '24px',
        fontSize : '3.5rem',
        fontWeight : 'bolder',
        textAlign : 'center',
        '@media (max-width : 425px)' : {
            top : '8px',
            fontSize : '2.5rem'
        }
    },
    about : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        position : 'relative',
        alignItems : 'center',
        textAlign : 'center',
        fontSize : '1.5rem'
    },
    italic : {
        fontStyle : 'italic',
        fontWeight : 'bolder'
    }
}), { name : 'About' });

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
                    <p>
                        I'm a front end engineer from NYC
                        (who dabbles on the server side every now and then).
                        I <span className={ classes.italic }>love</span> creating
                        wonderful products and even more so, collaborating on those
                        projects with awesome people.
                    </p>
                    <p>
                        Want to learn more about my skillset? Check it about below!
                    </p>
                </div>
            </div>
        </SectionContainer>
    );
}

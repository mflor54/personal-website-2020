import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { SectionContainer } from 'components';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        // Subtracting 80px to take in AppBar height into consideration
        width : '100%',
        position : 'relative',
        display : 'flex',
        flexGrow : '1',
        flexDirection : 'column',
        justifyContent : 'space-evenly',
        alignItems : 'center'
    },
    name : {
        height: 'auto',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        fontSize : '3.5rem',
        fontWeight : 'bolder',
        textAlign : 'center',
        '@media (max-width : 425px)' : {
            top : '8px',
            fontSize : '2.5rem'
        }
    },
    about : {
        width : '80%',
        display : 'flex',
        flexGrow : '1',
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
                <div className={ classes.name }>
                    Michael Flor
                </div>
                <div className={ classes.about }>
                    <p>
                        I'm a self-taught web developer from NYC with a <span className={ classes.italic }>strong</span> passion
                        for building impactful applications and teaching others how to code. My goal is to help beginners learn how to code
                        like professionals do and instill in them that you don't need to be a computer science
                        wizard to get into the field of software engineering.
                    </p>
                    <p>
                        If you want to learn more about my skillset please continue scrolling!
                        Want to get in touch? Feel free email me at mflor54@gmail.com or visit one of
                        some of my profiles by clicking on the links above :D
                    </p>
                </div>
            </div>
        </SectionContainer>
    );
}

import React, { useMemo, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-evenly',
        flexGrow : '1',
        width : '100%'
    },
    title : {
        fontSize : '2rem'
    },
    skills : {
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly',

        '@media (max-width : 425px)' : {
            flexDirection : 'column'
        }
    },
    skill : {
        border : '1px solid',
        padding : '8px 16px',
        boxShadow : '0 0 10px #888',
        marginBottom : '8px'
    }
}), { name : 'SkillsList' });

const skillsDict = {
    'Frontend' : {
        color : '',
        skills : [
            'Javascript (ES6+)', 'React', 'Redux',
            'Sass', 'CSS-in-JS', 'Webpack'
        ]
    },
    'Backend' : {
        color : '',
        skills : ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
    },
    'Testing and Version Control' : {
        color : '',
        skills : [
            'Mocha', 'Chai', 'Jest',
            'Enzyme', 'Git', 'Puppeteer',
            'SourceTree'
        ]
    }
}

export default function SkillsList({ children, keyName }) {
    const classes = useStyles();

    const skillsDictForTitle = useMemo(() => (
        skillsDict[keyName].skills
    ), [keyName, skillsDict]);

    useEffect(() => {
        console.log('dict', skillsDictForTitle);
    }, [keyName]);

    return (
        <div className={ classes.container }>
            <div className={ classes.title }>{ keyName }</div>
            <div className={ classes.skills }>
                { skillsDictForTitle.map((k, i) => (
                    <div className={ classes.skill }>{skillsDictForTitle[i]}</div>
                )) }
            </div>
        </div>
    );
}

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
        border : '0px solid',
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
        skills : ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python/Django', 'Ruby on Rails']
    },
    'Testing and Version Control' : {
        color : '',
        skills : [
            'Mocha', 'Chai', 'Jest',
            'Enzyme', 'Puppeteer',
            'Git', 'SourceTree'
        ]
    }
}

export default function SkillsList({ children, keyName }) {
    const classes = useStyles();

    const skillsDictForTitle = useMemo(() => (
        skillsDict[keyName].skills
    ), [keyName, skillsDict]);

    return (
        <div className={ classes.container }>
            <div className={ classes.title }>{ keyName }</div>
            <div className={ classes.skills }>
                { skillsDictForTitle.map((k, i) => (
                    <div
                        key={ `${skillsDictForTitle[i]}` }
                        className={ classes.skill }
                    >
                        {skillsDictForTitle[i]}
                    </div>
                )) }
            </div>
        </div>
    );
}

import React from 'react';
import { createUseStyles } from 'react-jss';
import { SectionContainer } from 'components';
import JobContainer from './JobContainer';

const jobHistoryDict = {
    'greystone' : {
        name : 'Greystone Labs',
        date : '2018',
        position : 'Frontend Engineer',
        description : () => (
            <>
                <p>
                    Currently building a tool that simplifies the process of closing a loan
                    by centralizing all loan related tasks, files, and communications. This
                    app was built using React, Redux, CSS-in-JS, backed by unit and integration
                    tests written with Mocha, Chai, and Puppeteer. On the server side, Ruby on
                    Rails with a PostgreSQL database.
                </p>
                <p>
                    In addition, I've built and maintained a web-based underwriting application that allows
                    originators and borrowers instant access to updated financial quotes
                    and loan details. Built using React, Redux, Sass. Backed by Ruby on Rails
                    with a MySQL database.
                </p>
            </>
        )
    },
    'experience-interaction' : {
        name : 'Experience-Interaction',
        date : '2018',
        position : 'Web Developer Intern',
        description : () => (
            <p>
                Maintained over a dozen sites for brands such as 1800 Tequila, Kraken, and
                Jose Cuervo using Javascript, jQuery, and PHP. Worked with designers, project managers to
                satisfy client expectations and meet deadlines.
            </p>
        )
    },
    'c4q' : {
        name : 'Pursuit (formerly known as Coalition For Queens)',
        date : '2017-2018',
        position : 'Full Stack Developer Fellow',
        description : () => (
            <p>
                Enrolled in an intensive nine month program where I gained
                hands on experience with in demand technologies such as React,
                Node.js, SQL databases, and Git. I also learned core technical
                concepts that includes data structures, algorithms, and
                software design principles.
            </p>
        )
    }
}

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
        <SectionContainer
            sectionName={ 'Where I\'ve worked' }
            iconKey={ 'experience' }
        >
            { Object.keys(jobHistoryDict).map((k ,i) => (
                <JobContainer
                    key={ `${jobHistoryDict[k].name}` }
                    name={ jobHistoryDict[k].name }
                    date={ jobHistoryDict[k].date }
                    position={ jobHistoryDict[k].position }
                    description={ () => jobHistoryDict[k].description() }
                />
            )) }
        </SectionContainer>
    );
}

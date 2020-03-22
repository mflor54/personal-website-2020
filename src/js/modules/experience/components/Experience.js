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
                    Building a tool that simplifies the process of closing a loan
                    by centralizing all loan related tasks, files, and communications.
                    Built using React, Redux, CSS-in-JS and Ruby on Rails with a PostgreSQL
                    database on the backend.
                </p>
                <p>
                    Built and maintained a web-based underwriting application that allows
                    originators and borrowers instant access to updated financial quotes
                    and loan details. Built using React, Redux, Sass. Backed by Ruby on Rails
                    and a MySQL database.
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
                Maintained over a dozen websites for companies such as Jose Cuervo, and
                1800 Tequila using technologies such as Javascript, PHP, MySQL, and Wordpress.
                I also collaborated with designers and project managers to meet an
            </p>
        )
    },
    'c4q' : {
        name : 'Pursuit (formerly known as Coalition For Queens)',
        date : '2017',
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
                    name={ jobHistoryDict[k].name }
                    date={ jobHistoryDict[k].date }
                    position={ jobHistoryDict[k].position }
                    description={ () => jobHistoryDict[k].description() }
                />
            )) }
        </SectionContainer>
    );
}

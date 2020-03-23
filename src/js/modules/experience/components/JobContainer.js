import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import CompanyName from './CompanyName';
import JobDate from './JobDate';
import JobPosition from './JobPosition';
import JobDescription from './JobDescription';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        width : '80%',
        margin : '24px 0px',
        '& hr' : {
            width : '80%',
            border : p => `1px solid ${p.barColor}`,
            boxShadow : '0 0 10px #888'
        },
    }
}), { name : 'JobContainer' });

export default function JobContainer({
    name, date, position, description
}) {
    const theme = useSelector( s => s.core.theme);
    const barColor = theme == 'light' ? '#FFF' : '#000'
    const classes = useStyles({ barColor });

    return (
        <div className={ classes.container }>
            <CompanyName name={ name }/>
            <JobDate date={ date }/>
            <JobPosition position={ position }/>
            <JobDescription description={ () => description() }/>
        </div>
    );
}

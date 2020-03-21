import React from 'react';
import { createUseStyles } from 'react-jss';
import { mdiBriefcaseOutline, mdiCodeTags } from '@mdi/js';
import Icon from '@mdi/react'

const sectionIconDict = {
    'experience' : mdiBriefcaseOutline,
    'skills' : mdiCodeTags,
};

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        width : '100%',
        minHeight : '56px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        textTransform : 'uppercase',
        fontSize : '2rem',
        '& svg' : {
            marginLeft : '8px'
        }
    }
}), { name : 'SectionHeader' });

export default function SectionHeader({ children, title }) {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            { title }
            <Icon
                path={ sectionIconDict[title] }
                size={ 2 }
            />
        </div>
    );
}

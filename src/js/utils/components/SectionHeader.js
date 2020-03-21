import React from 'react';
import { useSelector } from 'react-redux';
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
        justifyContent : 'center',
        alignItems : 'center',
        // textTransform : 'uppercase',
        fontSize : '2rem',
        '& svg' : {
            marginLeft : '8px'
        }
    }
}), { name : 'SectionHeader' });

export default function SectionHeader({ children, title, iconKey }) {
    const theme = useSelector( s => s.core.theme);
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            { title }
            {/* <Icon
                path={ sectionIconDict[iconKey] }
                size={ 2 }
                color={ theme == 'light' ? 'black' : 'white' }
            /> */}
        </div>
    );
}

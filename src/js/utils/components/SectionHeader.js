import React from 'react';
import { useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { mdiBriefcaseOutline, mdiCodeTags } from '@mdi/js';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        width : '100%',
        minHeight : '56px',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        fontSize : '2rem',
        '& hr' : {
            width : '80%',
            border : p => `1px solid ${p.barColor}`,
            boxShadow : '0 0 10px #888'
        },
    }
}), { name : 'SectionHeader' });

export default function SectionHeader({ title }) {
    const theme = useSelector( s => s.core.theme);
    const barColor = theme == 'light' ? '#000' : '#FFF'
    const classes = useStyles({ barColor });

    return (
        <div className={ classes.container }>
            { title }
            <hr />
        </div>
    );
}

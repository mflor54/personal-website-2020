import React from 'react';
import { createUseStyles } from 'react-jss';
import { mdiWhiteBalanceSunny, mdiWeatherNight } from '@mdi/js';
import Icon from '@mdi/react'

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        width : '100%',
        minHeight : '64px',
        display : 'flex',
        flexDirection : 'row',
        // TODO : Make this a fixed header on scroll
        // position : 'sticky',
        // top : '0px'
    }
}), { name : 'AppBar' });

export default function AppBar() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <div className={ classes.name }>
                MICHAEL FLOR
            </div>
            <div className={ classes.socialMedia }>
                {/* Linkedin and Github */}
            </div>
            <div className={ classes.themeToggle }>
                <Icon
                    path={ mdiWeatherNight }
                    size={ 1 }
                />
            </div>
        </div>
    );
}

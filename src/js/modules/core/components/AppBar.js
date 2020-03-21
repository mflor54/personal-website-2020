import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import {
    mdiWhiteBalanceSunny, mdiWeatherNight,
    mdiLinkedin, mdiGit
} from '@mdi/js';
import Icon from '@mdi/react'
import { toggleTheme } from '../coreActions';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        width : '100%',
        minHeight : '64px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : '8px',
        // boxShadow : '0 0 10px #888',
        // TODO : Make this a fixed header on scroll
        // position : 'sticky',
        // top : '0px'
    },
    name : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center'
    },
    media : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        '& > *' : {
            marginLeft : '8px'
        }
    }
}), { name : 'AppBar' });

export default function AppBar() {
    const dispatch = useDispatch();
    const theme = useSelector( s => s.core.theme);
    const classes = useStyles();

    const onToggleTheme = useCallback(() => {
        dispatch(toggleTheme());
    }, [theme]);

    return (
        <div className={ classes.container }>
            <div className={ classes.name }>
                MICHAEL FLOR
            </div>
            <div className={ classes.media }>
                <Icon
                    path={ mdiLinkedin }
                    size={ 1 }
                    color={ theme == 'light' ? 'black' : 'white' }
                />
                <Icon
                    path={ mdiGit }
                    size={ 1 }
                    color={ theme == 'light' ? 'black' : 'white' }
                />
                <Icon
                    onClick={ onToggleTheme }
                    path={ theme == 'light' ? mdiWhiteBalanceSunny : mdiWeatherNight }
                    size={ 1 }
                    color={ theme == 'light' ? 'black' : 'white' }
                />
            </div>
        </div>
    );
}

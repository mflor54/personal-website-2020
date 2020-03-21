import React, { useCallback, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector, useDispatch } from 'react-redux';
import {
    mdiWhiteBalanceSunny, mdiWeatherNight,
    mdiLinkedin, mdiGit
} from '@mdi/js';
import Icon from '@mdi/react';
import window from 'global/window';
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
        color : palette.text.light,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        fontSize : '1.2rem'
    },
    media : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        '& > svg' : {
            marginLeft : '8px',
            cursor : 'pointer'
        }
    }
}), { name : 'AppBar' });

export default function AppBar() {
    const dispatch = useDispatch();
    const theme = useSelector( s => s.core.theme);
    const classes = useStyles();

    const onClickLink = useCallback( url => {
        window.open(url, '_blank');
    }, []);

    const onToggleTheme = useCallback(() => {
        dispatch(toggleTheme());
    }, [theme]);

    const iconDictionary = useMemo(() => ({
        linkedin : {
            onClick : () => {
                const url = 'https://linkedin.com/in/michael-flor/';
                return onClickLink(url);
            },
            path : mdiLinkedin,
            color : 'blue'
        },
        git : {
            onClick : () => {
                const url = 'https://github.com/mflor54';
                return onClickLink(url);
            },
            path : mdiGit,
            color : 'red'
        },
        theme : {
            onClick : () => onToggleTheme(),
            path : theme == 'light' ? mdiWhiteBalanceSunny : mdiWeatherNight,
            color : theme == 'light' ? 'black' : 'white',
        }
    }), [theme]);

    return (
        <div className={ classes.container }>
            <div className={ classes.name }>
                MICHAEL FLOR
            </div>
            <div className={ classes.media }>
                { Object.keys(iconDictionary).map((k, i) => (
                    <Icon
                        key={ `${k+i}` }
                        onClick={ iconDictionary[k].onClick }
                        path={ iconDictionary[k].path }
                        size={ 1 }
                        color={ iconDictionary[k].color }
                    />
                )) }
            </div>
        </div>
    );
}

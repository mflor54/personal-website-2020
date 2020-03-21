import React, { useState, useEffect, useMemo } from 'react';
import { actions as a } from 'core';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'react-jss';
import themes from './Themes';

const DARK_THEME_Q = '(prefers-color-scheme: dark)';
const mediaQ = window.matchMedia(DARK_THEME_Q);

export default function ThemeContextProvider({ children }) {
    const dispatch = useDispatch();
    const theme = useSelector( s => s.core.theme );
    const [themeKey, setThemeKey] = useState(() =>
        mediaQ?.matches ? 'dark' : 'light'
    );

    useEffect(() => {
        // expose window.theme for easy debugging purposes
        if(process.env.NODE_ENV == 'development') {
            window.theme = theme;
        }

        dispatch(a.setThemeOnLoad({ theme : themeKey }));
    }, []);

    const themeDef = useMemo(() => (
        themes[theme]
    ), [theme]);

    return (
        <ThemeProvider theme={ themeDef }>
            { children }
        </ThemeProvider>
    );
}
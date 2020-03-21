import React from 'react';
import { Provider } from 'react-redux';
import { createUseStyles } from 'react-jss';
import AppBar from './modules/core/components/AppBar';
import { About } from './modules/about';
import { Experience } from './modules/experience';
import { Skills } from './modules/skills';
import ThemeProvider from './utils/styles/ThemeProvider';
import store from './store';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        position : 'relative',
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : palette.common.background,
        color : palette.text.main
    },
    content : {
        width : '100%',
        height : '100%',
    }
}), { name : 'RoutingApp' });

function RoutingApp() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <AppBar />
            <div className={ classes.content }>
                <About />
                <Skills />
                <Experience />
            </div>
        </div>
    );
}

export default function App() {
    return (
        <Provider store={ store }>
            <ThemeProvider>
                <RoutingApp />
            </ThemeProvider>
        </Provider>
    );
}

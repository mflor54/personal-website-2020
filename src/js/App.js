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
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column'
    }
}), { name : 'RoutingApp' });

function RoutingApp() {
    const classes = useStyles();

    return (
        <div className={ classes.container }>
            <AppBar />
            <About />
            <Skills />
            <Experience />
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

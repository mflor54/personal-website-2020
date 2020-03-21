import { TOGGLE_THEME, SET_THEME_ON_LOAD } from './coreConstants';

export const setThemeOnLoad = ({ theme }) => (dispatch, getState) => {
    console.log('setting theme on load', theme);
    dispatch({ type : SET_THEME_ON_LOAD, payload : { theme } });
};

export const toggleTheme = () => (dispatch, getState) => {
    const theme = getState().core.theme == 'dark' ? 'light' : 'dark';

    dispatch({ type : TOGGLE_THEME, payload : { theme } });
};

export default {
    toggleTheme,
    setThemeOnLoad
};

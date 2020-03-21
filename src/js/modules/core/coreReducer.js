import { TOGGLE_THEME, SET_THEME_ON_LOAD } from './coreConstants';

const initialState = {
    /** TODO : Find out how to get the theme from the system and add it here */
    theme : 'light'
};

export default function coreReducer(state=initialState, { type, payload }) {
    switch (type) {
        case TOGGLE_THEME : {
            const { theme } = payload;
            return {
                theme
            };
        }

        case SET_THEME_ON_LOAD : {
            const { theme  } = payload;
            return {
                theme
            };
        }

        default :
            return {
                ...state
            };
    }
};

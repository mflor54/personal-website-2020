const themesObj = {}

themesObj.light = {
    palette : {
        primary : {
            main : '#00479E',
            white : '#FFFFFF',
            green : '#5BA392',
            red : '#F90018',
            yellow : '#FFFF3A'
        },
        secondary : {
            main : '#050505'
        },
        common : {
            black: '#050505',
            white : '#FFFFFF',
            background : '#FFFFFF',
            icon : '#FFFFFF',
            // For rows or buttons
            boxShadow : '0 0 10px #888',
            // Box shadow based off Hulu components
            // rgba(0, 0, 0, 0.08) 0px 10px 20px -5px
        },
        text : {
            main : '#00479E',
            light : '',
            disabled : '',
        },
    }
}

themesObj.dark = {
    palette : {
        primary : {
            main : '#333', // Should be main
            white : '#F0F0F0',
            green : '#053B06',
            red : '#DE5E5E',
            yellow : '#FFFF3A'
        },
        secondary : {
            main : '#FFF'
        },
        common : {
            black: '#050505',
            white : '#FFFFFF',
            background : '#212121',
            icon : '#FFFFFF',
        },
        text : {
            main : '#FFFFFF',
            light : '',
            disabled : ''
        }
    }
}

export default themesObj;

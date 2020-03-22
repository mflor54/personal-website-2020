import React from 'react';
import { createUseStyles } from 'react-jss';
import { SectionContainer } from 'components';
import SkillsList from './SkillsList';

const useStyles = createUseStyles(({ palette }) => ({
    container : {
        width : '80%',
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
        flexWrap : 'wrap',
        flexGrow : '1',
        // alignItems : 'center'
    }
}), { name : 'Skills' });

export default function Skills() {
    const classes = useStyles();

    return (
        <SectionContainer
            sectionName={ 'What I work with' }
            iconKey={ 'skills' }
        >
            <div className={ classes.container }>
                <SkillsList keyName={ 'Frontend' }/>
                <SkillsList keyName={ 'Backend' }/>
                <SkillsList keyName={ 'Testing and Version Control' }/>
            </div>
        </SectionContainer>
    );
}

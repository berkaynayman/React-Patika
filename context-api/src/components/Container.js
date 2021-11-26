import {useContext} from 'react'
import Button from './Button';
import Header from './Header';
import Profile from './Profile';

import {useTheme} from '../context/ThemeContext';

function Container() {
    const {theme} = useTheme()
    console.log(theme);


    return (
        <div className={`app ${theme}`}>
            <Header/>
            <hr/>
            <Button/>
            <hr/>
            <Profile/>
        </div>
    )
}

export default Container

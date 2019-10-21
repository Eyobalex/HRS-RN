import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {BottomTabNavigator, MainTabNav} from './index';

const AuthSwitchNav = createSwitchNavigator({
    Login: {screen :BottomTabNavigator},
    Main: {screen: MainTabNav}
});

export default createAppContainer(AuthSwitchNav);

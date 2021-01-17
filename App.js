import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as ForrmProvider} from './src/context/BlogContext';
import {setNavigator} from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {View} from 'react-native';
import { ToastProvider } from 'react-native-styled-toast'
import {ThemeProvider} from 'styled-components';
import Meeting from './src/screens/Meetings';
import { BottomNavigation, Text } from 'react-native-paper';
import BottomNavigationComponent from './src/components/BottomNavigation';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import ResolveAuthScreen from './src/screens/ResolveAuthScreen';


const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen,
    }),
    mainFlow: createBottomTabNavigator({
            trackListFlow: createStackNavigator({
                TrackList: TrackListScreen,
                Meeting:Meeting,
            }, {headerMode: 'none'}),
            TrackCreate: TrackCreateScreen,
            Account: AccountScreen,
            TrackDetail: TrackDetailScreen,
        },
        {

            tabBarComponent: () => <BottomNavigationComponent />,
            tabBarOptions: {
                activeTintColor: '#cb97a8',
                labelStyle: {
                    fontSize: 12,
                },
                style: {
                    backgroundColor: '#724557',
                },
                showIcon: false,
            },
        },
    ),
});


const App = createAppContainer(switchNavigator);

const theme = {
    space: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48],
    colors: {
        text: '#0A0A0A',
        background: '#FFF',
        border: '#E2E8F0',
        muted: '#F0F1F3',
        success: '#7DBE31',
        error: '#FC0021',
        info: '#00FFFF'
    }
};

export default () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <ToastProvider position={'BOTTOM'}>
                    <ForrmProvider>
                        <App
                            ref={(navigator) => {
                                setNavigator(navigator);
                            }}
                        />
                    </ForrmProvider>
                </ToastProvider>
            </ThemeProvider>
        </AuthProvider>
    );
};

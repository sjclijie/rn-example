import React, { Component } from 'react';
import {Navigator, View, Text} from 'react-native';

import IndexView from "../Views/IndexView";

const styles = {
    container: {
        flex: 1,
        paddingTop: 20,
        borderWidth: 1,
        borderColor: 'red'
    }
};

export default class NavigatorComp extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Navigator
                    initialRoute={{ name: 'indexView', index: 0, id: 'index' }}
                    configureScene={this._configureScene}
                    renderScene={this._renderScene}
                    style={ styles.container }
                />
            </View>
        );
    }

    _configureScene( route, routeStack ) {
        switch (route.id) {
            case 'index':
                return Navigator.SceneConfigs.FloatFromLeft;
            default:
                break;
        }
    }

    _renderScene( route, navigator ) {
        switch (route.id) {
            case 'index':
                return (
                    <IndexView navitagor={navigator} route={route}></IndexView>
                );
            default:
                break;
        }
    }
}

import React, {Component} from 'react';
import {Navigator, View, Text} from 'react-native';

import IndexView from "../Views/IndexView";
import WorksDetailView from '../Views/WorksDetailView';

const styles = {
    container: {
        flex: 1
    }
};

export default class NavigatorComp extends Component {

    render() {
        return (
            <View style={ styles.container }>
                <Navigator
                    initialRoute={{name: 'indexView', index: 0, id: 'index'}}
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
                return Navigator.SceneConfigs.FloatFromRight;
                break;
        }
    }

    _renderScene( route, navigator ) {
        switch (route.id) {
            case 'index':
                return (
                    <IndexView navigator={navigator} route={route}></IndexView>
                );
            case 'works_detail':
                return (
                    <WorksDetailView navigator={navigator} route={route}></WorksDetailView>
                );
            default:
                break;
        }
    }
}

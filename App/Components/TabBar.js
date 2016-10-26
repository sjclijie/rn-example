import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import HomeView from '../Views/HomeView';
import CheckView from '../Views/CheckView';
import AuthView from '../Views/AuthView';
import ApplyCashView from '../Views/ApplyCashView';

const styles = {
    tarBarStyle: {},

    sceneStyle: {
        backgroundColor: '#efeff4',
        flex           : 1,
    },

    titleStyle: {
        color   : "#929292",
        fontSize: 12
    },

    selectedTitleStyle: {
        color: '#ff9630'
    }
};

const tagNameMap = {
    'works'       : {
        "text": '作品',
        "icon": "https://static.suiyueyule.com/music.png"
    },
    "check"       : {
        "text": '审核',
        "icon": 'https://static.suiyueyule.com/%E5%AE%A1%E6%A0%B8.png'
    },
    "authenticate": {
        'text': '认证',
        'icon': 'https://static.suiyueyule.com/%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81.png'
    },
    "withdrawCash": {
        'text': '提现',
        'icon': 'https://static.suiyueyule.com/%E6%8F%90%E7%8E%B0%20%281%29.png'
    }
};

export default class TabBar extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            selectedTab: 'works'
        }
    }

    _renderTabItemIcon( tag ) {
        return (
            <Image
                source={{uri: tagNameMap[tag]["icon"]}}
                style={{width: 24, height: 24}}
            />
        )
    }

    _renderTabItem( tagName, childView ) {

        return (
            <TabNavigator.Item
                selected={ this.state.selectedTab === tagName }
                title={ tagNameMap[tagName]["text"] }
                titleStyle={ styles.titleStyle }
                selectedTitleStyle={ styles.selectedTitleStyle }
                renderIcon={ () => this._renderTabItemIcon( tagName ) }
                onPress={ () => this.setState( {selectedTab: tagName} ) }
            >
                {childView}
            </TabNavigator.Item>
        );
    }

    render() {

        return (
            <TabNavigator hidesTabTouch={true} sceneStyle={ styles.sceneStyle } tabBarStyle={ styles.tabBarStyle }>
                {this._renderTabItem( "works", <HomeView navigator={this.props.navigator}/> )}
                {this._renderTabItem( "check", <CheckView navigator={this.props.navigator}/> )}
                {this._renderTabItem( "authenticate", <AuthView navigator={this.props.navigator}/> )}
                {this._renderTabItem( "withdrawCash", <ApplyCashView navigator={this.props.navigator}/> )}
            </TabNavigator>
        );
    }

}




import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import IconFontConf from '../Utils/IconFontConf';

import TabNavigator from 'react-native-tab-navigator';


const styles = {

    tarBarStyle: {
    },

    sceneStyle: {
        backgroundColor: '#efeff4',
        flex: 1,
    },

    titleStyle: {
        color: "#929292",
        fontSize: 12
    },

    selectedTitleStyle: {
        color: '#ff9630'
    }
};

export default class TabBar extends Component {

    constructor( props ){
        super( props );
        this.state = {
            selectedTab: 'Home'
        }
    }

    _renderTabItemIcon( tag ){
        return (
            <Image
                source={{uri: 'https://static.suiyueyule.com/1477342113_icon-6-mail-envelope-closed.png'}}
                style={{width: 24, height: 24}}
            />
        )
    }

    render() {
        return (
            <TabNavigator hidesTabTouch={true} sceneStyle={ styles.sceneStyle } tabBarStyle={ styles.tabBarStyle }>
                <TabNavigator.Item
                    title="作品"
                    titleStyle={ styles.titleStyle }
                    selectedTitleStyle={ styles.selectedTitleStyle }
                    renderIcon={ () => this._renderTabItemIcon( 'works' ) }
                    badgeText="1"
                >
                    作品
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="审核"
                    titleStyle={ styles.titleStyle }
                    selectedTitleStyle={ styles.selectedTitleStyle }
                    renderIcon={ () => this._renderTabItemIcon( 'works' ) }
                    badgeText="2"
                >
                    审核
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="认证"
                    titleStyle={ styles.titleStyle }
                    selectedTitleStyle={ styles.selectedTitleStyle }
                    renderIcon={ () => this._renderTabItemIcon( 'works' ) }
                >
                    认证
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="提现"
                    titleStyle={ styles.titleStyle }
                    selectedTitleStyle={ styles.selectedTitleStyle }
                    renderIcon={ () => this._renderTabItemIcon( 'works' ) }
                >
                     提现
                </TabNavigator.Item>
            </TabNavigator>
        );
    }

}




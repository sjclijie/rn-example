import React, {Component} from "react";
import {View, Text} from 'react-native';

import GiftedListView from 'react-native-gifted-listview';

export default class AppyCashView extends Component{

    constructor( props ) {
        super( props );
        this.state = {};
    }

    render(){
        return (
            <View>
                <Text>Hello AppyCashView</Text>
            </View>
        );
    }

}
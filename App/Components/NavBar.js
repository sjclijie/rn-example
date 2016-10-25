import React, {Component} from 'react';
import {View, Text} from 'react-native';

import NavigationBar from 'react-native-navbar';

const styles = {
    navBarStyles: {
        borderBottomWidth:1,
        borderColor: '#e1e1e1'
    }
};

export default class NavBar extends Component {

    render() {
        return (
            <View style={{flex: 1}}>
                <NavigationBar
                    title={{title: '碎乐'}}
                    rightButton={ {
                        title  : 'Next',
                        handler: () => {
                            alert( "Next!" )
                        },
                        tintColor: 'blue'
                    } }
                    leftButton={{
                        title  : 'Prev',
                        handler: () => {
                            alert( "Prev!" )
                        },
                        tintColor: 'red'
                    }}
                    style={styles.navBarStyles}
                />
            </View>
        );
    }
}


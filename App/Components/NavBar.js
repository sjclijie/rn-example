import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import NavigationBar from 'react-native-navbar';

const styles = {
    navBar  : {
        borderBottomWidth: 1,
        borderWidth: 1,
        borderColor      : '#e1e1e1',
        height           : 45,
    },
    navTitle: {
        alignItems    : 'center',
        justifyContent: 'center',
        fontSize: 18,
        marginBottom: 4
    },
    button: {
        flex          : 1,
        width         : 65,
        alignItems    : 'center',
        justifyContent: 'center'
    },
    text  : {
        fontSize: 16,
        color   : '#333'
    }
};

export default class NavBar extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    _rightButton() {
        switch (this.props.route.id) {
            case 'index':
                return this._renderButton( 'Right', () => {
                    alert( 'right' )
                } );
            case 'works_detail':
                break;
            default:
                break;
        }
    }

    _leftButton() {
        switch (this.props.route.id) {
            case 'index':
                return this._renderButton( "Left", () => {
                    alert( "left" )
                } );
            case 'works_detail':
                return this._renderButton();
            default:
                break;
        }
    }

    _renderButton( text, handler ) {
        return (
            <TouchableOpacity
                onPress={handler}
                style={styles.button}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        );
    }

    _title() {
        return (
            <Text style={styles.navTitle}>{ this.props.route.title ? this.props.route.title : '碎乐' }</Text>
        );
    }

    render() {
        return (
            <NavigationBar
                title={this._title()}
                rightButton={ this._rightButton() }
                leftButton={ this._leftButton() }
                style={styles.navBar}
            />
        );
    }
}


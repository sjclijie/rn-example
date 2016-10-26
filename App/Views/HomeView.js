import React, {Component} from "react";
import {View, Text, TouchableHighlight} from 'react-native';

import GiftedListView from 'react-native-gifted-listview';
//import SortableListView from 'react-native-sortable-listview';

const styles = {

    navBar: {
        backgroundColor: '#ccc'
    },

    row: {
        borderWidth   : 1,
        borderColor   : 'red',
        height        : 50,
        alignItems    : 'center',
        justifyContent: 'center'
    },

    paginationView: {
        height         : 44,
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#eee',
    },

    actionLabel: {
        fontSize: 13,
        color   : '#666'
    }
};

export default class HomeView extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            data: []
        };
    }

    _renderRowView( rowData ) {
        return (
            <TouchableHighlight
                underlayColor='transparent'
                onPress={ this._gotoDetails.bind( this, rowData ) }
            >
                <View style={styles.row}>
                    <Text>{rowData}</Text>
                    <Text>{rowData}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    _onFetch( page = 1, callback, options ) {

        let rows = ['row ' + ((page - 1) * 3 + 1), 'row ' + ((page - 1) * 3 + 2), 'row ' + ((page - 1) * 3 + 3)];

        console.log( rows );

        if (page == 100) {
            callback( rows, {
                allLoaded: true
            } );
        } else {
            callback( rows );
        }
    }

    _onPress( rowData ) {
        alert( rowData );
    }


    _paginationWaitingView( paginateCallback ) {
        return (
            <TouchableHighlight
                underlayColor='#c8c7cc'
                onPress={paginateCallback}
                style={styles.paginationView}
            >
                <Text style={ styles.actionLabel }>
                    点击加载更多
                </Text>
            </TouchableHighlight>
        );
    }

    _gotoDetails( row ) {
        this.props.navigator.push( {
            title : '详情',
            id    : 'works_detail',
            params: {
                works: row
            }
        } );
    }

    render() {

        return (
            <GiftedListView
                paginationWaitingView={this._paginationWaitingView}
                rowView={this._renderRowView.bind( this ) }
                onFetch={this._onFetch.bind( this ) }
                firstLoader={true} // display a loader for the first fetching
                pagination={true} // enable infinite scrolling using touch to load more
                refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                enableEmptySections={true}
                withSections={false} // enable sections
            />
        );
    }
}
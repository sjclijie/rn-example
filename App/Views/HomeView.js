import React, {Component} from "react";
import {View, Text, TouchableHighlight} from 'react-native';

import GiftedListView from 'react-native-gifted-listview';

const styles = {

    navBar: {
        backgroundColor: '#ccc'
    }

};

export default class HomeView extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    _renderRowView( rowData ) {

        return (
            <TouchableHighlight
                underlayColor='#c8c7cc'
                onPress={ () => { alert(1) } }
            >
                <Text>{rowData}</Text>
            </TouchableHighlight>
        );
    }

    _onFetch( page = 1, callback, options ) {

        let rows = ['row ' + ((page - 1) * 3 + 1), 'row ' + ((page - 1) * 3 + 2), 'row ' + ((page - 1) * 3 + 3)];

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

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <GiftedListView
                    rowView={this._renderRowView}
                    onFetch={this._onFetch}
                    firstLoader={true} // display a loader for the first fetching
                    pagination={true} // enable infinite scrolling using touch to load more
                    refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                    withSections={false} // enable sections
                    customStyles={{
                        paginationView: {
                            backgroundColor: '#eee',
                        },
                    }}
                    refreshableTintColor="blue"
                />
            </View>
        );
    }

}
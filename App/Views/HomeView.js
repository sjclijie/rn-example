import React, {Component} from "react";
import {View, Text, TouchableHighlight, RefreshControl, Image} from 'react-native';
import moment from 'moment';
import uuid from 'uuid';
import qs from 'qs';

import GiftedListView from 'react-native-gifted-listview';

//import {FetchingView} from '../Utils/AnimationRotation';
//import SortableListView from 'react-native-sortable-listview';

import TimeAgo from '../Utils/TimeAgo';

const NEW_FEED_API = 'https://api.suiyueyule.com/1.0.2/feed/new';

const styles = {

    navBar: {
        backgroundColor: '#ccc'
    },

    container: {
        justifyContent : 'center',
        backgroundColor: '#fff'
    },

    paginationView: {
        height         : 44,
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#eee'
    },

    refreshableView: {
        height         : 80,
        backgroundColor: '#fff',
        justifyContent : 'center',
        alignItems     : 'center'
    },

    actionLabel: {
        fontSize: 13,
        color   : '#666'
    },

    separator: {
        flex  : 1,
        height: 10
    },

    header: {
        flex             : 1,
        height           : 60,
        flexDirection    : 'row',
        alignItems       : 'center',
        borderBottomWidth: 1,
        borderColor      : '#ddd',

        shadowColor  : "#ccc",
        shadowOffset : {width: 0, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 3
    },

    avatar: {
        width          : 45,
        height         : 45,
        backgroundColor: 'gray',
        borderRadius   : 22.5,
        marginRight    : 5,
        marginLeft     : 10
    },

    nickname: {
        fontSize    : 13,
        marginBottom: 2,
        color       : '#333'
    },

    create_time: {
        fontSize : 10,
        marginTop: 2,
        color    : '#333'
    },

    works_info: {
        borderWidth: 1,
        borderColor: 'gray',
    },

};

export default class HomeView extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            lastRefreshDate : '',
            waitingTitle    : ' 下拉可以刷新',
            willRefreshTitle: ' 松开即可刷新',
            fetchingTitle   : ' 正在加载, 请稍候'
        };
    }

    _renderRowView( row ) {

        switch ( row["type"] ){

            case "0":
                break;
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;


        }

        console.log( row );

        return (
            <TouchableHighlight
                underlayColor='transparent'
                onPress={ this._gotoDetails.bind( this, row ) }
            >
                <View style={styles.container}>
                    <View style={ styles.header }>
                        <Image source={{uri: row["user_info"]["avatar"]}} style={ styles.avatar }/>
                        <View style={styles.user_info}>
                            <Text style={ styles.nickname }>{row["user_info"]["nickname"]}</Text>
                            <Text style={ styles.create_time }>{ TimeAgo( row["create_time"] * 1000 ) }</Text>
                        </View>
                    </View>

                    <View style={styles.content}>
                    </View>

                </View>
            </TouchableHighlight>
        );
    }

    async _onFetch( page = 1, callback ) {

        try {

            let query_string = qs.stringify( {page: page} );
            let feed_url     = `${NEW_FEED_API}?${query_string}`;

            console.log( feed_url );

            let result = await fetch( feed_url );
            let data   = await result.json();

            let feed_data   = data.data;
            let feed_status = data.status;
            let feed_msg    = data.msg;

            if (feed_data.length == 0) {
                return callback( feed_data, {
                    allLoaded: true
                } );
            }

            return callback( feed_data );

        } catch (e) {

            console.log( e );
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

    _renderEmptyView() {
        return (
            <View><Text>Empty Data.</Text></View>
        );
    }

    _renderSeparatorView() {
        return (
            <View key={ uuid.v4() } style={ styles.separator }></View>
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
                emptyView={ this._renderEmptyView.bind( this ) }
                renderSeparator={ this._renderSeparatorView.bind( this ) }

                refreshable={true}
                refreshableViewHeight={50}
                refreshableDistance={40}

                firstLoader={true} // display a loader for the first fetching
                pagination={true} // enable infinite scrolling using touch to load more
                enableEmptySections={true}
                withSections={false} // enable sections

                rowHasChanged={ ( r1, r2 )=> r1 !== r2 }
            />
        );
    }
}
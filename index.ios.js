import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ListView
} from 'react-native';

const REQUEST_URI = "https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json";

export default class AwesomeProject extends Component {

    constructor( props ){

        super( props );

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false
        };

        this.fetchData = this.fetchData.bind( this );
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){

        fetch( REQUEST_URI ).then( response => response.json() ).then( responseData => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                loaded: true
            });

        }).done();
    }

    render() {

        if ( !this.state.loaded ){
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
        );

        /*
        let movie = this.state.movies[0];

        return this.renderMovie( movie );
        */
    }

    renderLoadingView(){

        return (
            <View style={styles.container}>
                <Text>
                     正在加载电影数据...
                </Text>
            </View>
        )
    }

    renderMovie( movie ){

        console.log( movie.posters.thumbnail );

        return (
            <View style={styles.container}>
                <Image
                    source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
                    //source={{uri: movie.posters.thumbnail }}
                    //source={{uri: "http://resizing.flixster.com/DeLpPTAwX3O2LszOpeaMHjbzuAw=/53x77/dkpu1ddg7pbsk.cloudfront.net/movie/11/16/47/11164719_ori.jpg"}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create( {
    container: {
        flex           : 1,
        flexDirection  : "row",
        justifyContent : 'center',
        alignItems     : 'center',
        backgroundColor: '#F5FCFF'
    },


    rightContainer: {
        flex: 1
    },

    thumbnail: {
        width : 53,
        height: 81
    },

    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },

    year: {
        textAlign: 'center'
    },

    listView: {
        paddingTop: 20,
        backgroundColor: '#f5fcff'
    }
} );

AppRegistry.registerComponent( 'AwesomeProject', () => AwesomeProject );

//http://reactnative.cn/docs/0.31/sample-application-movies.html

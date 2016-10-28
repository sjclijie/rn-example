import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

import NavBar from '../Components/NavBar';
import ImageFormat from "../Utils/ImageFormat";

const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create( {
    container: {
        flex           : 1,
        borderColor    : 'blue',
        backgroundColor: 'blue'
    }
} );

export default class WorksDetailView extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    _renderImage() {

        let image_url = ImageFormat( this.props.route.params["works"]["works"]["cover_photo"] );

        return (
            <Image
                source={{
                    uri: image_url
                }}
                style={{
                    width: WIDTH,
                    height: WIDTH
                }}
            />
        );
    }

    render() {
        return (
            <View style={ styles.container }>
                <NavBar route={this.props.route} navigator={this.props.navigator}></NavBar>
                <View style={{flex: 1, backgroundColor: 'red'}}>
                    { this._renderImage.call( this ) }
                </View>
            </View>
        );
    }
}
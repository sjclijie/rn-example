//import React, { Component } from "react";
//import { AppRegistry, View, Text, TextInput, Image, ScrollView, ListView } from "react-native";

/*
 class FixedDimensionsBasics extends Component {

 render(){
 return (
 <View style={{
 flex: 1,
 flexDirection: 'column',
 //justifyContent: 'space-around',
 justifyContent: 'space-between',
 //justifyContent: 'flex-start',
 //justifyContent: 'center',
 //justifyContent: 'flex-end'

 //alignItems: 'center',
 //alignItems: 'flex-start',
 //alignItems: 'flex-end',
 alignItems: 'stretch' //子元素在次轴上不能有固定尺寸

 }}>
 <View style={{  height: 100, backgroundColor: "powderblue" }}/>
 <View style={{  height: 100, backgroundColor: "skyblue" }}/>
 <View style={{  height: 100, backgroundColor: "steelblue" }}/>
 </View>
 );
 }
 }

 AppRegistry.registerComponent("AwesomeProject", () => FixedDimensionsBasics );
 */

// TextInput
/*
 class PizzaTranslator extends Component {

 constructor( props ){
 super( props );
 this.state = { text: '' };
 }

 render(){
 return (
 <View style={{ padding: 50}}>

 <TextInput
 style={{ height: 40 }}
 placeholder="Type here to translate!"
 onChangeText={ text => this.setState( {text} ) }
 />

 <Text style={{ padding: 10, fontSize: 42 }}>
 { this.state.text.split(" ").map( world => world && '🍕').join( ' ' ) }
 </Text>

 </View>
 );
 }
 }

 AppRegistry.registerComponent( "AwesomeProject", () => PizzaTranslator );
 */

//ScrollView
/*
 class IScrolledDown extends Component {

 render(){
 return (
 <ScrollView>
 <Text style={{ fontSize: 58 }} > Scroll me plz </Text>
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />

 <Text style={{ fontSize: 58 }} > If you like </Text>
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />

 <Text style={{ fontSize: 58 }} > Scrolling down </Text>
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />
 <Image
 source={{uri: "https://static.suiyueyule.com/13609529268-01.jpg"}}
 style={{ width: 100, height: 100 }}
 />

 </ScrollView>
 );
 }
 }

 AppRegistry.registerComponent( "AwesomeProject", () => IScrolledDown ) ;
 */

// ListView

/*
 class ListViewBasics extends Component {
 constructor( props ){
 super( props );
 const ds = new ListView.DataSource( { rowHasChanged: ( r1, r2) => r1 !== r2 } );
 this.state = {
 dataSource: ds.cloneWithRows( [
 'John',
 'Joel',
 'James',
 'Jimmy',
 'Jackson',
 'Jill',
 'Devin'
 ] )
 };

 let data = this.getMoviesFromServer();

 console.log( '##########################' );
 console.log( data );
 console.log( '##########################' );
 }

 async getMoviesFromServer(){

 try {

 let response = await fetch('https://api.suiyueyule.com/1.0.0/feed/navigation');

 return JSON.parse( response._bodyInit );

 } catch ( e ) {

 console.log( e );
 }
 }

 render() {
 return (
 <View style={{padding: 22}}>
 <ListView
 style={{ flex: 1 }}
 dataSource={this.state.dataSource}
 renderRow={ rowData => <Text style={{ fontSize: 40, alignItems: 'center', justifyContent: 'center' }}>{rowData}</Text> }
 />
 </View>
 );
 }
 }

 AppRegistry.registerComponent( 'AwesomeProject', () => ListViewBasics  );

 */


import React, { Component, PropTypes } from 'react';
import { AppRegistry } from 'react-native';

import NavigatorComp from './App/Components/Navigator';

AppRegistry.registerComponent( 'AwesomeProject', () => NavigatorComp );




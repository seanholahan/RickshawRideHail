/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View,
   AppRegistry, Dimensions, Image,  StatusBar, TouchableOpacity,SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import { Container,Text, Header, Content, Item, Input } from 'native-base';
import SearchBox from '../components/searchbox';
import SearchResults from '../components/searchResults';
import {connect} from 'react-redux';


function mapStateToProps(state) {
  return {
    latitude: state.latitude,
    longitude: state.longitude,
    latitudeDelta: state.latitudeDelta,
    longitudeDelta: state.longitudeDelta,
    cordLatitude:state.cordLatitude,
  ordLongitude:state.cordLongitude,
  error: null,
  concat: null,
  coords:state.coords,
  x: state.x,
  userInput: state.userInput
  }
}



type Props = {};
class RickshawApp extends Component<Props> {

  constructor(props) {
    super(props);
  // this.state = {
  //       latitude: 20.9948891,
  //       longitude: 105.799677,
  //       latitudeDelta: 0.002,
  //       longitudeDelta: 0.002,
  //       cordLatitude:"37.785",
  //     cordLongitude:"-122.4",
  //     error: null,
  //     concat: null,
  //     coords:[],
  //     x: 'false',
  //
  //   }

    this.mergeLot = this.mergeLot.bind(this);
    this.mapRef = null;
  }




 getMapRegion = () => ({
latitude: this.props.latitude,
longitude: this.props.longitude,
latitudeDelta: 0.002,
longitudeDelta: 0.002
});



    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("wokeeey");
          console.log(position);

          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 20.002,
            longitudeDelta: 20.002,
            error: null,
          });
          this.mergeLot();

        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
  }





  mergeLot(){
    if (this.props.latitude != null && this.props.longitude!=null)
     {
       let concatLot = this.props.latitude +","+this.props.longitude
       this.setState({
         concat: concatLot
       }, () => {
         console.log('hi',concatLot);
         this.getDirections(concatLot, "37.7,-122.40");
       });
     }

   }



   async getDirections(startLoc, destinationLoc) {

       try {
            let  google_api_key = '&key=AIzaSyDjQMsmEjXWhtF4_VzETQQ4oK5MWyb8sdY'
           let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }${google_api_key}`)
           let respJson = await resp.json();
           console.log('yo',respJson)
           let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
           let coords = points.map((point, index) => {
               return  {
                   latitude : point[0],
                   longitude : point[1]
               }
           })
           this.setState({coords: coords})
           return coords
       } catch(error) {
           alert(error)
           return error
       }
   }

  render() {

    return (

      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <SearchBox
      getUserInputData={this.props.getUserInputData}
      style={styles.searchContainer}/>
        <SearchResults/>
                <Text style={styles.text}>{this.props.userInput}</Text>


                <MapView style={styles.map}
                              showUserLocation
                              followUserLocation
                              loadingEnabled
                              initialRegion={this.props}
                              region={this.getMapRegion()}>
                                   {/* <MapView.Marker coordinate={this.state} /> */ }
                                   <MapView.Marker coordinate={this.props} image={require('../assets/img/userLocation.png')} />
                                   <MapView.Marker coordinate={this.props} />

                                   <MapView.Polyline
                                   coordinates={this.props.coords}
                                   strokeWidth={2}
                                   strokeColor="red"/>

                                   {!!this.props.latitude && !!this.props.longitude && this.props.x == 'true' &&
                             <MapView.Polyline
                                 coordinates={this.props.coords}
                                 strokeWidth={2}
                                 strokeColor="red"/>
                             }

                             {!!this.props.latitude && !!this.props.longitude && this.props.x == 'error' &&
                             <MapView.Polyline
                               coordinates={[
                                   {latitude: this.props.latitude, longitude: this.props.longitude},
                                   {latitude: this.props.cordLatitude, longitude: this.props.cordLongitude},
                               ]}
                               strokeWidth={2}
                               strokeColor="red"
                             />
                             }
                              </MapView>




            </View>
            </SafeAreaView>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RickshawApp)

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

        backgroundColor: 'red'
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        color: '#59656C',
        marginBottom: 10,
        paddingTop:40,
        position: 'absolute',
        zIndex: 12
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        alignSelf: 'stretch',
        zIndex: -1,
        flex: 1
    },
    box: {
      width:20, height:20, backgroundColor:'red',position:'absolute',
      zIndex:14
    },

    searchContainer: {
      flex: 1,
      alignSelf: 'stretch',


    },
    safeArea: {
    flex: 1,
    backgroundColor: 'white'
  }
};

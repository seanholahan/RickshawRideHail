
import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";

import SearchBox from "../SearchBox";
import SearchResults from "../SearchResults";

import styles from "./MapContainerStyles.js";

export const MapContainer = ({
		region,
		getInputData,
		toggleSearchResultModal,
		getAddressPredictions,
		resultTypes,
		predictions,
		getSelectedAddress,
		selectedAddress,
		carMarker,
		nearByDrivers
	})=>{

	const { selectedPickUp, selectedDropOff } = selectedAddress || {};

	return(
		<SafeAreaView style={styles.safeArea}>
		<View style={styles.container}>
		<SearchBox
		getInputData={this.props.getInputData}
		style={styles.searchContainer}/>
			<SearchResults/>
							<Text style={styles.text}> {this.state.latitudeDelta} , {this.state.longitudeDelta}</Text>


							<MapView style={styles.map}
														showUserLocation
														followUserLocation
														loadingEnabled
														initialRegion={this.state}
														region={this.getMapRegion()}>
																 {/* <MapView.Marker coordinate={this.state} /> */ }
																 <MapView.Marker coordinate={this.state} image={require('./assets/img/userLocation.png')} />
																 <MapView.Marker coordinate={this.state} />

																 <MapView.Polyline
																 coordinates={this.state.coords}
																 strokeWidth={2}
																 strokeColor="red"/>

																 {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' &&
													 <MapView.Polyline
															 coordinates={this.state.coords}
															 strokeWidth={2}
															 strokeColor="red"/>
													 }

													 {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' &&
													 <MapView.Polyline
														 coordinates={[
																 {latitude: this.state.latitude, longitude: this.state.longitude},
																 {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
														 ]}
														 strokeWidth={2}
														 strokeColor="red"
													 />
													 }
														</MapView>




					</View>
					</SafeAreaView>
	)
}

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


export default MapContainer;

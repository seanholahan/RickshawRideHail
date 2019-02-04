import React, {Component} from 'react';
import { Text} from 'react-native';
import { View, InputGroup, Input } from "native-base";
export default class SearchBox extends React.Component {
render() {
  return (
    <View style={styles.searchBox}>
  				<View style={styles.inputWrapper}>
  					<Text style={styles.label}>PICK-UP</Text>
  					<InputGroup>
  						<Input
  							onFocus={()=>toggleSearchResultModal("pickUp")}
  							style={styles.inputSearch}
  							placeholder={this.props.pickupTitle}
                placeholderTextColor ={'blue'}

  						/>
  					</InputGroup>
  				</View>
  				<View style={styles.secondInputWrapper}>
  					<Text style={styles.label}>DROP-OFF</Text>
  					<InputGroup>


  						<Input
  							onFocus={()=>toggleSearchResultModal("dropOff")}
  							style={styles.inputSearch}
  							placeholder="Choose drop-off location"

  						/>
  					</InputGroup>
  				</View>
  			</View>
  )

}

}


const styles = {
    searchBox:{
        top:0,
        position:"absolute",
        width:300
    },
    inputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:10,
        marginBottom:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    secondInputWrapper:{
        marginLeft:15,
        marginRight:10,
        marginTop:0,
        backgroundColor:"#fff",
        opacity:0.9,
        borderRadius:7
    },
    inputSearch:{
        fontSize:14
    },
    label:{
        fontSize:10,
        fontStyle: "italic",
        marginLeft:10,
        marginTop:10,
        marginBottom:0
    }
};

import React, {Component} from 'react';
import { Text} from 'react-native';
import { View, InputGroup, Input } from "native-base";
import {getUserInputData} from '../modules/main';



export const SearchBox =({getUserInputData})=> {
  function handleInput(key, val) {
    getUserInputData({
			key,
			value:val
		});
  }

  return (
    <View style={styles.searchBox}>
  				<View style={styles.inputWrapper}>
  					<Text style={styles.label}>PICK-UP</Text>
  					<InputGroup>
  						<Input

  							style={styles.inputSearch}
  							placeholder={'current location'}
                placeholderTextColor ={'blue'}
                onChangeText={handleInput.bind(this,'pickUp')}

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
                onChangeText={handleInput.bind(this,'dropOff')}

  						/>
  					</InputGroup>
  				</View>
  			</View>
  )



}


const styles = {
    searchBox:{
        top:0,

        flex: 1,

        alignSelf: 'stretch'
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

export default SearchBox;

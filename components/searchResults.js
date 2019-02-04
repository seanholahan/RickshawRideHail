import React, {Component} from 'react';
import { Text} from 'react-native';
import { View, InputGroup, Input, List, ListItem, Left } from "native-base";
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
var width = Dimensions.get("window").width;


export default class SearchResults extends React.Component {
render() {
  return (
    <View style={styles.searchResultsWrapper} >
							<ListItem style={styles.searchItem}  button avatar bordered>
              <Icon name="search" style={styles.icon} size={27} color="orange" />

                <View style={styles.textContainer}>
									<Text style={styles.primaryText}>906 S Windsor Blvd</Text>
									<Text style={styles.secondaryText}>Los Angeles, CA</Text>
                </View>
							</ListItem>



			</View>
  )

}
}


const styles = {
  searchResultsWrapper:{
      top:160,
      position:"absolute",
      width:width,
      height:1000,
      backgroundColor:"#fff",
      opacity:0.9
  },
  searchItem: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 20
  },
  primaryText:{
      fontWeight: "bold",
      color:"#373737"
  },
  secondaryText:{
      fontStyle: "italic",
      color:"#7D7D7D",
  },
  leftContainer:{

      borderLeftColor:"#7D7D7D",
  },
  textContainer : {

  },
  leftIcon:{
      fontSize:20,
      color:"#7D7D7D",
  },
  distance:{
      fontSize:12,
  }
};

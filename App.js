import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Homepage extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
          <Image style={styles.avatar} source={require("./assets/user.png")}/>
          <Text style={styles.name}>Welcome, Rohit</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              
             <TouchableOpacity style={styles.buttonContainer}>
             <Image style={styles.lock} source={require("./assets/user.png")} />
                <Text style={styles.info}>Profile</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
       <Image style={styles.lock} source={require("./assets/contact-book.png")} />
                <Text style={styles.info}>Contact</Text> 
              </TouchableOpacity>
            </View>
        </View>
         <View style={styles.body}>
            <View style={styles.bodyContent}>
              
             <TouchableOpacity style={styles.buttonContainer}>
    <Image style={styles.lock} source={require("./assets/payment-method.png")} />
                <Text style={styles.info}>Payment</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
          <Image style={styles.lock} source={require("./assets/settings.png")} />
                <Text style={styles.info}>Setting</Text> 
              </TouchableOpacity>
            </View>
        </View>
         <View style={styles.body}>
            <View style={styles.bodyContent}>
              <TouchableOpacity style={styles.buttonContainer}>
              <Image style={styles.lock} source={require("./assets/logout.png")} />
                <Text style={styles.info}>Logout</Text>  
              </TouchableOpacity>              
              
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "pink",
    height:150,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: "blue",
    marginBottom:10,
    alignSelf:'left',
    position: 'absolute',
    marginTop:30,
    marginLeft: 30,
  },
 
 
  body:{
    marginTop:10,
    alignContent: 'coloum',
  
  },
  bodyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft:30,
    paddingRight:30,
  },
   lock:{
    height:40,
    width:40,
    marginLeft:35,
    marginTop: 10,
    backgroundColor: 'whitw',
    alignItems: 'center',
  },
  name:{
    fontSize:25,
    color: "blue",
    fontWeight: "600",
    marginTop: 90,
    marginLeft: 30,
  },
  info:{
    fontSize:16,
    color: "blue",
    marginTop: 1,
    marginLeft: 30,

   
  },
 
  buttonContainer: {
    marginTop: 6,
    height:80,
    flexDirection: 'coloum',
    justifyContent: 'center',
   // alignItems: 'center',
    marginBottom:8,
    borderRadius: 5,
    width:120,
    backgroundColor: "yellow",
   // textAlign: 'coloum'
  },
});

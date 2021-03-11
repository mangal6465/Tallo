import React , {Component} from 'react'
import {View,Text , Image ,StyleSheet } from 'react-native';


const Appicon= props => {

    return(
        <View style = {styles.iconStyle}>
        <Image source={props.icon} style={styles.icon} />
        </View>
    )

}

const styles = StyleSheet.create({
iconStyle:{
      width:150,
      height:150 ,
      marginTop:-50,
      alignContent:'center',
      alignSelf:'center',
      marginRight:20
      
    // backgroundColor:'#FDE8A5'

},
icon: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    alignItems:'center',
    alignContent:'center',
    // marginBottom: 10,
    marginTop:0
},

})

export default Appicon
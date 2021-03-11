import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    KeyboardAvoidingView,
     ScrollView
} from "react-native";
import { themes } from '../../utils'
import { useDispatch } from 'react-redux'
import { Button, Popup, Input } from '../../components'
// import Gender from "../../components/Gender";
import Appicon from "../../components/Appicon";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Login({ navigation }) {
    const dispatch = useDispatch()
    const [mobile, setMobile] = useState("");
    const [check, setCheck] = useState(false);


    function Signin() {

        dispatch({ type: 'LOGIN_REQUEST', payload: mobile })
    }

    return (
       
       
   
     
        
        <View style={styles.container}>
            
            <ScrollView>
            <View style = {{ marginTop:0 , alignContent:'center' , alignItems:'center' , justifyContent:'center' , marginBottom:10}}>
            <Appicon icon={require("../../assets/icons/tallologo.png")}/>

            </View> 
            <Text style = {{fontWeight:'bold' , color:'#fff' , alignSelf:'center',fontSize:20 , marginBottom:30 ,marginTop:30}}>LOG IN</Text>         
            <View style={{  width: "80%", backgroundColor: '#fff', flexDirection: 'column' , height:"30%" ,marginLeft:"10%" , borderRadius:15, justifyContent:'center', alignContent:"center" , marginBottom:"60%" }}>
                <View/>

             
      
                <TextInput
                    style={styles.inputtext}
                    onChangeText={(mobile) => setMobile(mobile)}
                    placeholder={"Mobile No"}
                    paddingHorizontal={10}
                    keyboardType={'number-pad'}
                    placeholderTextColor="#000"
                    color={'black'}
                    returnKeyType='done'
                />


                  <Button
                    title={'Sign In'}
                    onPress={Signin} />
                    </View>
               </ScrollView>
       
        
        </View>
     

   
   
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.color.button,
        // justifyContent: "center",
    },
    logintext: {
        marginBottom: 10,
        marginLeft: "10%",
        // textAlign: 'center',
        marginTop:10,
        color: '#0f0f0f',
        fontSize: 30,
        fontWeight: '700'
    },
    mobiletext: {
        marginBottom: 20,
        marginLeft: "10%",
        marginTop: "1%",
        // textAlign: 'center',
        color: '#B7B7B7',
        fontSize: 16,
        fontWeight: '600'
    },
    counterytext: {
        height: 40,
        width: "10%",
        borderColor: 'gray',
        borderWidth: 1

    },
    inputtext: {
        height: 40,
        width:"80%",
        // paddingRight: '10%',
        // paddingLeft: '10%',
        borderColor: 'gray',
        // borderWidth: 0.3,
        borderBottomWidth: 0.3,
        alignSelf:'center',


    },
    mainContainer: {
        width: 100,
        height: 100,
        // backgroundColor: 'red',
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 10,
    },
    checkContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'flex-end',
    },
    checkbox: {
        height: 15,
        width: 15,
        alignSelf: 'flex-end',
        marginRight: 5,
    },
    iconContainer: {
        flex: 3,
        justifyContent: 'center',
        alignContent: 'center',

    },
    icon: {
        width: 75,
        height: 75,
        alignSelf: 'center',
        marginBottom: 5,
    }
});
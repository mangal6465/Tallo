import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {getStoreValue} from '../../Tools/StoreHandler';
import {useDispatch} from 'react-redux';
import {getItemFromStorage} from '../../utils/AccessStorage';
import {Images} from '../../utils';
import Appicon from '../../components/Appicon';
import {ScrollView} from 'react-native-gesture-handler';

export default function signUp({navigation}) {
  const dispatch = useDispatch();

  const [Name, setName] = useState('');
  const [Date, setDate] = useState('');
  const [Email, setEmail] = useState('');
  const [City, setCity] = useState('');
  const [Gender, setGender] = useState('');
  const [Phone, SetPhone] = useState('');

  React.useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      const GetDetails = await getItemFromStorage('PhoneNumber');
      if (!GetDetails) {
      } else {
        SetPhone(GetDetails);
      }
    }
    // Execute the created function directly
    anyNameFunction();
  }, []);

  function _signUp() {
    var request = {
      Name: Name,
      Date: Date,
      Email: Email,
      City: City,
      gender: Gender,
      phone: Phone,
      navigation: navigation,
    };
    dispatch({type: 'NEW_REGISTRATION', payload: request});
  }

  function selectGender(Status) {
    console.log(Status);
    setGender(Status);
  }

  function renderHeader() {
    return (
      <View
        style={{
          width: '100%',
          height: 290,
          backgroundColor: 'red',
          borderBottomEndRadius: 70,
          borderBottomLeftRadius: 70,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/icons/tallologo.png')}
          resizeMode="contain"
          style={{width: 150, height: 150}}
        />
      </View>
    );
  }

  return (
    <ScrollView>
      {/* Main Image Section */}
      <View style={styles.mainContainer}>{renderHeader()}</View>

      {/* Account Details Section   */}
      <View style={{ alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={[
            styles.logintext,
            {color: '#000000', fontFamily: 'Montserrat-Bold'},
          ]}>
          Account Details
        </Text>
        <View style={{marginTop: 20}}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            autoCapitalize="none"
            placeholderTextColor="#d9d9d9"
            onChangeText={(mobile) => setName(mobile)}
          />
          <TextInput
            style={styles.input}
            placeholder="DD-MM-YYYY"
            autoCapitalize="none"
            placeholderTextColor="#d9d9d9"
            onChangeText={(mobile) => setDate(mobile)}
          />
          <TextInput
            style={styles.input}
            placeholder="Mail"
            autoCapitalize="none"
            placeholderTextColor="#d9d9d9"
            onChangeText={(mobile) => setEmail(mobile)}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            autoCapitalize="none"
            placeholderTextColor="#d9d9d9"
            onChangeText={(mobile) => setCity(mobile)}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              padding: 5,
              marginLeft: 15,
            }}>
            <Text style={{textAlign: 'center', paddingTop: 5}}>Gender</Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#F87300',
                width: 50,
                marginLeft: 20,
                borderRadius: 3,
              }}
              onPress={selectGender.bind(this, 'Male')}>
              <Text style={styles.buttongender}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#F87300',
                marginLeft: 10,
                width: 50,
                borderRadius: 3,
              }}
              onPress={selectGender.bind(this, 'Female')}>
              <Text style={styles.buttongender}>Female</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={() => _signUp()}>
            <Text style={styles.buttontext}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* end section */}
      <View style={{position: 'relative', alignItems: 'flex-end'}}>
        <Image
          style={{bottom: 0}}
          resizeMode="contain"
          source={Images['RightDesign']}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    padding: 5,
    color: '#000',
    fontSize: 16,
    borderColor: '#d9d9d9',
    borderWidth: 0.5,
  },
  logintext: {
    padding: 5,
    marginLeft: 10,
    color: '#000000',
    fontSize: 22,
  },
  period: {
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,

    marginHorizontal: 5,
  },
  periodActive: {
    backgroundColor: '#333',
  },

  loginBtn: {
    borderRadius: 5,
    height: 35,
    marginLeft: 15,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 40,
    backgroundColor: '#F87300',
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttongender: {
    color: '#fff',
    // padding:20,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

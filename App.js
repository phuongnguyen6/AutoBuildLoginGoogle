/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import styles2 from './styles'
GoogleSignin.configure();
const { width, height } = Dimensions.get('window')
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        email: "phuongnnn.1010@gmail.com",
        familyName: "Phuong",
        givenName: "Nguyen",
        id: "115612712439963297704",
        name: "Nguyen Phuong",
        photo: null
      }
    }
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo: userInfo.user });
      console.log('userInfo: ', userInfo)
    } catch (error) {
      console.log('error: ', error)
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  render() {
    let { userInfo } = this.state
    let info = []
    Object.keys(userInfo).forEach((key) => {
      info.push(<View style={[{
        flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', width: width - 60,
        padding: 10, height: 50, borderColor: 'gray', borderWidth: 1,
        marginTop: 10, borderRadius: 20
      },]}>
        <Text style={[styles2.textBold]}>{key}</Text>
        <Text style={[styles2.textContent]}>{userInfo[key]}</Text>
      </View>)
    })
    console.log('info: ', info)
    return (
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>

            <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={this.signIn}
              disabled={this.state.isSigninInProgress} />
            {info}
          </View>
        </ScrollView>
      </SafeAreaView >
    )
  };
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;

import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native'
import ButtonStyles from '../styles/ButtonStyles'
import FaIcon from 'react-native-vector-icons/FontAwesome'
import FeIcon from 'react-native-vector-icons/Feather'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0984e3',
    height: 40,
  }
})

export default class Instagram extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
        <View style={{ height: 48, backgroundColor: 'blue', flexDirection: 'row' }}>
          <View style={{ width: 48, backgroundColor: '#00cec9', justifyContent: 'center', alignItems: 'center' }}>
            <FaIcon name="camera" size={24} />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: 'white', fontWeight: 'bold' }}>Instagram</Text>
          </View>
          <View style={{ width: 48, backgroundColor: '#00cec9', justifyContent: 'center', alignItems: 'center' }}>
            <FaIcon name="send" size={24} />
          </View>
        </View>
        {/* ===================================================== */}
        <View style={{ height: 80, backgroundColor: 'green', flexDirection: 'row' }}>
          <View style={{ flex: 1, backgroundColor: '#ffeaa7', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 66, width: 66, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', borderRadius: 33 }}>
              <Image source={{ uri: 'http://i.pravatar.cc/300' }}
                style={{
                  height: 60, width: 60,
                  borderRadius: 30
                }}
              />
            </View>

          </View>
          <View style={{ flex: 1, backgroundColor: '#ffeaa7', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: 'http://i.pravatar.cc/300' }}
              style={{
                height: 60, width: 60,
                borderRadius: 30
              }}
            />
          </View>
          <View style={{ flex: 1, backgroundColor: '#ffeaa7', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: 'http://i.pravatar.cc/300' }}
              style={{
                height: 60, width: 60,
                borderRadius: 30
              }}
            />
          </View>
          <View style={{ flex: 1, backgroundColor: '#ffeaa7', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: 'http://i.pravatar.cc/300' }}
              style={{
                height: 60, width: 60,
                borderRadius: 30
              }}
            />
          </View>
          <View style={{ flex: 1, backgroundColor: '#ffeaa7', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: 'http://i.pravatar.cc/300' }}
              style={{
                height: 60, width: 60,
                borderRadius: 30
              }}
            />
          </View>
        </View>
        {/* ===================================================== */}
        <View style={{ height: 54, backgroundColor: 'orange', flexDirection: 'row' }}>
          <View style={{ width: 48, backgroundColor: '#00cec9' }}></View>
          <View style={{ flex: 1 }}></View>
          <View style={{ width: 48, backgroundColor: '#00cec9' }}></View>
        </View>
        {/* ===================================================== */}
        <View style={{ height: 460, backgroundColor: 'pink' }}></View>
        {/* ===================================================== */}
        <View style={{ height: 54, backgroundColor: 'violet', flexDirection: 'row' }}>
          <View style={{ width: 48, backgroundColor: '#00cec9' }}></View>
          <View style={{ width: 48, backgroundColor: '#e84393' }}></View>
          <View style={{ width: 48, backgroundColor: '#e17055' }}></View>
          <View style={{ flex: 1 }}></View>
          <View style={{ width: 48, backgroundColor: '#00cec9' }}></View>
        </View>
      </SafeAreaView >
    )
  }
}

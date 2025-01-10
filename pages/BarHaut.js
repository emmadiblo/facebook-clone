import React from 'react'

import styled from 'styled-components/native'
import { Icon } from 'react-native-elements'
import { StatusBar, ScrollView,StyleSheet,View } from 'react-native'

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

const Container = styled.View`
	width: 100%;
	height: 58px;
	padding: 0 11px;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
`
const Text = styled.Text`
	color: #3a86e9;
	font-size: 25px;
	font-weight: bold;
	letter-spacing: -0.3px;
`
const Row = styled.View`
	flex-direction: row;
`
const Button = styled.TouchableOpacity`
	width: 42px;
	height: 42px;
	border-radius: 21px;
	background: #eeeeee;
	align-items: center;
	justify-content: center;
	margin-left: 16px;
`

const BarHaut = () => {
	return (
		<Container>
			<Text>facebook</Text>
			<Row>

 <Icon
  name='add'
  color='#00aced'  style={styles.icon}/>

   <Icon
  name='search'
  color='#00aced'  style={styles.icon}/>
  <Icon
  name='density-medium'
  color='#00aced'  style={styles.icon}/>
			</Row>


       
		</Container>
	)
}

const styles= StyleSheet.create({
  container: {

  },
icon: {
backgroundColor:'#f2f2f2',
padding:'5px',
borderRadius:'60px',
marginLeft:10
  },

  profile: {
height:'50px',
width:'50px',
borderRadius:'60px'
  },

    postlogo: {

  },
  view: {
flex:1,
justifyContent:'space-between',
flexDirection:'row',
padding:'10px',

  },
logo: {
fontSize:'30px',
fontWeight:'bold',
color:'#0081f1'
  },

post: {
  padding:'10px',
  height:'40px',
backgroundColor:'#f2f2f2',
borderRadius:'15px'
  },

 contenu: {
borderColor:'red',borderStyle:'solid',borderWidth:'1px',
height:'100vh'
  },

});

export default BarHaut

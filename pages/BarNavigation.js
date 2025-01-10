import React from 'react'

import styled from 'styled-components/native'
import { Button,View,StyleSheet } from 'react-native'
 import { Icon } from 'react-native-elements';

import {
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons
} from '@expo/vector-icons'

import Photos from './photos'

const Container = styled.View`
	width: 100%;
	height: 92px;
`
const Row = styled.View`
	flex-direction: row;
	background: #ffffff;
	width: 100%;
	padding: 0 11px;
	align-items: center;
`
const Input = styled.TextInput`
	height: 50px;
	width: 100%;
	padding: 0 8px;
`
const Divider = styled.View`
	width: 100%;
	height: 0.5px;
	background: #f0f0f0;
`
const Menu = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 42px;
`
const MenuText = styled.Text`
	padding-left: 11px;
	font-weight: 500;
	font-size: 12px;
`
const Separator = styled.View`
	width: 1px;
	height: 26px;
	background: #f0f0f0;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const Navigation = () => {
	return (
		<>

      
<View style={styles.stickyNav}>
  
       <Icon
  name='home-filled'
  color='#00aced' style={styles.icon}/>


 <MaterialCommunityIcons name="account-multiple" size={24} color="black" style={styles.icon}/>
   <MaterialCommunityIcons name="facebook-messenger" size={24} color="black" style={styles.icon}/>

    <MaterialCommunityIcons name="youtube-tv" size={24} color="black" style={styles.icon}/>


    <MaterialCommunityIcons name="bell" size={24} color="black" style={styles.icon}/>
  
    <Icon
  name='store'
  color="black"  style={styles.icon}/>

</View>
			<Container>
				<Row>

					<Photos source={require('../assets/user1.jpg')} />
					<Input 	style={{ borderRadius:20, borderWidth:2,borderColor:'#f2f2f2', outline:'none'}} placeholder="A quoi pensez-vous  Emma diblo?" />
          <Button title='Post' />
				</Row>

				<Divider />
			</Container>

		</>
	)
}


const styles= StyleSheet.create({
  container: {

  },
icon: {
backgroundColor:'#f2f2f2',
padding:'5px',
borderRadius:'60px',
cursor:'pointer'
  },


stickyNav:{
  position: 'sticky',
  top: 0,
  flexGrow: 1,
  padding:6,
  justifyContent: 'space-between',
  flexDirection: 'row',
    backgroundColor: 'white',
    zIndex: 9999,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 2,
},


});

export default Navigation

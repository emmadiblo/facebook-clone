import React from 'react'

import { ScrollView } from 'react-native'

import styled from 'styled-components/native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Photos from './photos'

const Container = styled.View`
	width: 100%;
	height: 58px;
	flex-direction: row;
	align-items: center;
`
const Room = styled.TouchableOpacity`
	width: 115px;
	height: 40px;
	flex-direction: row;
	align-items: center;
	border-radius: 20px;
	border-width: 1px;
	border-color: #82b1ff;
	padding: 0 15px;
	margin-right: 12px;
`
const Text = styled.Text`
	color: #1777f2;
	font-size: 12px;
	padding-left: 6px;
`
const User = styled.View`
	margin-right: 13px;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const Amis = () => {
	return (
		<>
			<Container>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					style={{ paddingLeft: 11 }}>
					<Room>
						<MaterialCommunityIcons
							name='video-plus'
							size={26}
							color='#E141FC'
						/>
						<Text>Lancer en direct</Text>
					</Room>
					<User>
						<Photos
							source={require('../assets/eleeh.jpg')}
							online={true}
						/>
					</User>
					<User>
						<Photos
							source={require('../assets/nene.jpg')}
							online={true}
						/>
					</User>
					<User>
						<Photos
							source={require('../assets/dlg.jpg')}
              	online={true}
						/>
					</User>
					<User>
						<Photos
							source={require('../assets/digne.jpg')}
						/>
					</User>
					<User>
						<Photos
							source={require('../assets/claude.jpg')}
						/>
					</User>
          	<User>
						<Photos
							source={require('../assets/merveu.jpg')}
              	online={true}
						/>
					</User>

				</ScrollView>
			</Container>
			<BottomDivider />
		</>
	)
}

export default Amis

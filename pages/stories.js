import React from 'react'

import { ScrollView } from 'react-native'

import styled from 'styled-components/native'

import { AntDesign } from '@expo/vector-icons'

import Photos from './photos'

const Container = styled.View`
	width: 100%;
	height: 192px;
	flex-direction: row;
	align-items: center;
`
const Card = styled.View`
	width: 106px;
	height: 170px;
	position: relative;
	margin-right: 8px;
`
const CardStory = styled.Image`
	width: 100%;
	height: 170px;
	border-radius: 12px;
`
const CardUser = styled.View`
	position: absolute;
	top: 8px;
	left: 8px;
	background: #ffffff;
	border-radius: 20px;
	width: 39px;
	height: 39px;
	align-items: center;
	justify-content: center;
`
const CardFooter = styled.View`
	width: 100%;
	position: absolute;
	bottom: 12px;
	left: 9px;
`
const Text = styled.Text`
	font-size: 13px;
	font-weight: bold;
	color: #ffffff;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const Stories = () => {
	return (
		<>
			<Container>

      
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={true}
					style={{ paddingLeft: 11 }}>
					<Card>
						<CardStory
							source={require('../assets/user1.jpg')}
						/>
						<CardUser>
							<AntDesign
								name='plus'
								size={24}
								color='#1777f2'
							/>
						</CardUser>
						<CardFooter>
							<Text>Créer un Story</Text>
						</CardFooter>
					</Card>

					<Card>
						<CardStory
							source={require('../assets/paci.jpg')}
						/>
						<CardUser>
							<Photos
								source={require('../assets/paci.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Pacifique Nininahazwe</Text>
						</CardFooter>
					</Card>

					<Card>
						<CardStory
							source={require('../assets/akezapub.jpg')}
						/>
						<CardUser>
							<Photos
								source={require('../assets/akeza.png')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Akeza.net</Text>
						</CardFooter>
					</Card>

					<Card>
						<CardStory
							source={require('../assets/eleeh.jpg')}
						/>
						<CardUser>
							<Photos
								source={require('../assets/eleeh.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Element Eléeh</Text>
						</CardFooter>
					</Card>

          	<Card>
						<CardStory
							source={require('../assets/juno.jpg')}
						/>
						<CardUser>
							<Photos
								source={require('../assets/junopost.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Juno Kizigenza</Text>
						</CardFooter>
					</Card>

              	<Card>
						<CardStory
            		source={require('../assets/dlgstory.jpg')}
	
						/>
						<CardUser>
							<Photos
			source={require('../assets/dlg.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Felician Ntiranyibagira</Text>
						</CardFooter>
					</Card>

    	<Card>
						<CardStory
							source={require('../assets/merveu.jpg')}
						/>
						<CardUser>
							<Photos
								source={require('../assets/merveu.jpg')}
								story={true}
							/>
						</CardUser>
						<CardFooter>
							<Text>Merveu bit</Text>
						</CardFooter>
					</Card>



				</ScrollView>
			</Container>
			<BottomDivider />
		</>
	)
}

export default Stories

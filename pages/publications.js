import React from 'react'

import { View } from 'react-native'

import styled from 'styled-components/native'

import {
	Entypo,
	AntDesign,
	MaterialCommunityIcons,
} from '@expo/vector-icons'

import Photos from './photos'

const Container = styled.View`
	flex: 1;
`
const Header = styled.View`
	height: 50px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 6px;
	padding: 0 11px;
`
const Row = styled.View`
	align-items: center;
	flex-direction: row;
`
const User = styled.Text`
	font-size: 12px;
	font-weight: bold;
	color: #222121;
`
const Time = styled.Text`
	font-size: 9px;
	color: #747476;
`
const Post = styled.Text`
	font-size: 12px;
	color: #222121;
	line-height: 16px;
	padding: 0 11px;
`
const Photo = styled.Image`
	margin-top: 9px;
	width: 100%;
	height: 300px;
`
const Footer = styled.View`
	padding: 0 11px;
`
const FooterCount = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const IconCount = styled.View`
	background: #1878f3;
	width: 20px;
	height: 20px;
	border-radius: 10px;
	align-items: center;
	justify-content: center;
	margin-right: 6px;
`
const TextCount = styled.Text`
	font-size: 11px;
	color: #424040;
`
const Separator = styled.View`
	width: 100%;
	height: 1px;
	background: #f9f9f9;
`
const FooterMenu = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding: 9px 0;
`
const Button = styled.TouchableOpacity`
	flex-direction: row;
`
const Icon = styled.View`
	margin-right: 6px;
`
const Text = styled.Text`
	font-size: 12px;
	color: #424040;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 9px;
	background: #f0f2f5;
`

const Publications = () => {
	return (
		<View style={{display:'block'}}>
			<Container>
				<Header>
					<Row>
						<Photos
							source={require('../assets/akeza.png')}
						/>
						<View style={{ paddingLeft: 10 }}>
							<User>Akeza.net</User>
							<Row>
								<Time>21h</Time>
								<Entypo
									name='dot-single'
									size={12}
									color='#747476'
								/>
								<Entypo
									name='globe'
									size={10}
									color='#747476'
								/>
							</Row>
						</View>
					</Row>
<View >
     	<AntDesign
						name='close'
						size={15}
						color='#222121'
					/>
					<Entypo 
						name='dots-three-horizontal'
						size={15}
						color='#222121'
					/>
     
</View>
				</Header>

				<Post>
			🔴 [ 𝐇𝐀𝐇𝐈𝐘𝐄- 𝐑𝐞𝐦𝐢𝐱 𝐛𝐲 𝐕𝐚𝐫𝐢𝐨𝐮𝐬  𝐒𝐭𝐚𝐫𝐬 🌟🇧🇮]
5️⃣. Kirikou A Kili: Sur ce projet, on aura l’occasion d’écouter un Rap lourd et agencé du « Son Of Jah».  Sous sa chevelure décolorée, Kirikou avait opté pour un style de denim, complété par des chaînettes d’argent et des lunettes de soleil 😎 😂
📍💬 « On vous montrera la différence…»-a dit Bad Man
				</Post>
				<Photo source={require('../assets/akezapost.jpg')} />

				<Footer>
					<FooterCount>
						<Row>
							<IconCount>
								<AntDesign
									name='like1'
									size={12}
									color='#FFFFFF'
								/>
							</IconCount>
							<TextCount>28 k J'aimes</TextCount>
						</Row>
						<TextCount>2k commentaires</TextCount>
					</FooterCount>

					<Separator />

					<FooterMenu>
						<Button>
							<Icon>
								<AntDesign
									name='like2'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>J'aime</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='comment-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Commenter</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='share-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Partager</Text>
						</Button>
					</FooterMenu>
				</Footer>
				<BottomDivider />
			</Container>

			<Container>
				<Header>
					<Row>
						<Photos
							source={require('../assets/juno.jpg')}
						/>
						<View style={{ paddingLeft: 10 }}>
							<User>Juno Kizigenza <AntDesign
									name='checkcircle'
									size={10}
									color='blue'
								/></User>
							<Row>
             
								<Time>9m</Time>
								<Entypo
									name='dot-single'
									size={12}
									color='#747476'
								/>
								<Entypo
									name='globe'
									size={10}
									color='#747476'
								/>
							</Row>
						</View>
					</Row>

		<View >
     	<AntDesign
						name='close'
						size={15}
						color='#222121'
					/>
					<Entypo 
						name='dots-three-horizontal'
						size={15}
						color='#222121'
					/>
     
</View>

				</Header>

				<Post>Juno Kizigenza a mis a jour son photo de Profile:</Post>
				<Photo source={require('../assets/junoprofile.jpg')} />

				<Footer>
					<FooterCount>
						<Row>
							<IconCount>
								<AntDesign
									name='like1'
									size={12}
									color='#FFFFFF'
								/>
							</IconCount>
							<TextCount>88 j'aimes</TextCount>
						</Row>
						<TextCount>200 commentaires</TextCount>
					</FooterCount>

					<Separator />

					<FooterMenu>
						<Button>
							<Icon>
								<AntDesign
									name='like2'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Like</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='comment-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Commenter</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='share-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Partager</Text>
						</Button>
					</FooterMenu>
				</Footer>
				<BottomDivider />
			</Container>

      		<Container>
				<Header>
					<Row>
						<Photos
							source={require('../assets/user1.jpg')}
						/>
						<View style={{ paddingLeft: 10 }}>
							<User>Emma diblo Uwizeyimana <AntDesign
									name='checkcircle'
									size={10}
									color='blue'
								/></User>
							<Row>
             
								<Time>2 j</Time>
								<Entypo
									name='dot-single'
									size={12}
									color='#747476'
								/>
								<Entypo
									name='globe'
									size={10}
									color='#747476'
								/>
							</Row>
						</View>
					</Row>
<View >
     	<AntDesign
						name='close'
						size={15}
						color='#222121'
					/>
					<Entypo 
						name='dots-three-horizontal'
						size={15}
						color='#222121'
					/>
     
</View>

				</Header>

				<Post>Emma Diblo Uwizeyimana a mis a jour sa photo de Couverturee:</Post>
				<Photo source={require('../assets/diblo.jpg')} />

				<Footer>
					<FooterCount>
						<Row>
							<IconCount>
								<AntDesign
									name='like1'
									size={12}
									color='#FFFFFF'
								/>
							</IconCount>
							<TextCount>250 k  j'aimes</TextCount>
						</Row>
						<TextCount>200 K commentaires</TextCount>
					</FooterCount>

					<Separator />

					<FooterMenu>
						<Button>
							<Icon>
								<AntDesign
									name='like2'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Like</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='comment-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Commenter</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='share-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Partager</Text>
						</Button>
					</FooterMenu>
				</Footer>
				<BottomDivider />
			</Container>

	<Container>
				<Header>
					<Row>
						<Photos
							source={require('../assets/mashariki.jpg')}
						/>
						<View style={{ paddingLeft: 10 }}>
							<User>Mashariki TV</User>
							<Row>
								<Time>21h</Time>
								<Entypo
									name='dot-single'
									size={12}
									color='#747476'
								/>
								<Entypo
									name='globe'
									size={10}
									color='#747476'
								/>
							</Row>
						</View>
					</Row>

		<View >
     	<AntDesign
						name='close'
						size={15}
						color='#222121'
					/>
					<Entypo 
						name='dots-three-horizontal'
						size={15}
						color='#222121'
					/>
     
</View>

				</Header>

				<Post>
#Burundi Urwaruka rwiga mu makaminuza atandukanye yo mu gisagara ca Bujumbura ruva mu ntara yagutse ya #Butanyerera rugera ku 300 rwakiriwe kuri uyu w'Imana mu mu muhari w'imbonerakure w'umugambwe Cndd-Fdd. Abarongoye uwo muhari bakaba basavye urwo rwaruka kuja  ruraduga mu bikorwa vy'iterambere ku mitumba aho ruvuka, kandi rukama rurangwa na discipline mu kwitegurira kazoza keza.
				</Post>
				<Photo source={require('../assets/masharikipost.jpg')} />

				<Footer>
					<FooterCount>
						<Row>
							<IconCount>
								<AntDesign
									name='like1'
									size={12}
									color='#FFFFFF'
								/>
							</IconCount>
							<TextCount>8 k J'aimes</TextCount>
						</Row>
						<TextCount>1k commentaires</TextCount>
					</FooterCount>

					<Separator />

					<FooterMenu>
						<Button>
							<Icon>
								<AntDesign
									name='like2'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>J'aime</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='comment-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Commenter</Text>
						</Button>

						<Button>
							<Icon>
								<MaterialCommunityIcons
									name='share-outline'
									size={20}
									color='#424040'
								/>
							</Icon>
							<Text>Partager</Text>
						</Button>
					</FooterMenu>
				</Footer>
				<BottomDivider />
			</Container>


		</View>
	)
}

export default Publications

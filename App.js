import React from 'react'

import { StatusBar, ScrollView,StyleSheet } from 'react-native'

import styled from 'styled-components/native'

import Amis from './pages/Amis'
import BarHaut from './pages/BarHaut'
import Navigation from './pages/BarNavigation'
import Stories from './pages/stories'
import Publications from './pages/publications'

const Container = styled.SafeAreaView`
	flex: 1;
`

const App = () => {
	return (
		<>
			<StatusBar
				backgroundColor='#FFFFFF'
				barStyle='dark-content'
			/>
			<Container>
				<ScrollView>
					<BarHaut />
					<Navigation />
          	<Amis />
					<Stories />
				
					<Publications/>
				</ScrollView>
			</Container>
		</>
	)
}




export default App

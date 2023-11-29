// ! TODO: deixar só um tipo de import 
import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TouchableHighlight, TextInput } from 'react-native';

import { fruitStates } from '../resources/fruitData';

const config = require('../config').default;
const url = config.url; // "http://ipv4:porta/" 


async function listenFruit(fruitState) {
	try {
		const response = await fetch(url + fruitState);
		const data = await response.text();
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

export default function HomePage({ navigation }) {
	return (
		<View style={homeStyles.container}>
			<Text>Tentando uma comunicação com o MQTT</Text>

			{fruitStates.map((fruitState) => {
				return (
					<TouchableHighlight key={fruitState.value} style={homeStyles.button}>
						<Button
							onPress={() => listenFruit(fruitState.value)}
							title={`Ouvir fruta ${fruitState.label}`}
						/>
					</TouchableHighlight>
				)
			})}

			<TouchableHighlight style={homeStyles.button}>
				<Button
					title="Enviar Mensagem"
					onPress={() => navigation.navigate('SendData')}
				/>
			</TouchableHighlight>

			<StatusBar style="auto" />
		</View>
	)
}

const homeStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '2%'
	},
	title: {
		fontSize: 15,
		fontWeight: 'bold'
	},
	button: {
		height: 60,
		width: '100%',
		borderRadius: 10,
		marginTop: 10
	},
});
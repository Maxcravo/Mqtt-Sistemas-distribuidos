// ! TODO: deixar só um tipo de import 
import React from 'react';
import { Text, View, Button, StatusBar, TouchableHighlight } from 'react-native';

import globalStyles from './globalStyles';
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
		<View style={globalStyles.pageContainer}>
			<Text>Tentando uma comunicação com o MQTT</Text>

			{fruitStates.map((fruitState) => {
				return (
					<TouchableHighlight key={fruitState.value} style={globalStyles.button}>
						<Button
							onPress={() => listenFruit(fruitState.value)}
							title={`Ouvir fruta ${fruitState.label}`}
						/>
					</TouchableHighlight>
				)
			})}

			<TouchableHighlight style={globalStyles.button}>
				<Button
					title="Enviar Mensagem"
					onPress={() => navigation.navigate('SendData')}
				/>
			</TouchableHighlight>

			<StatusBar style="auto" />
		</View>
	)
};

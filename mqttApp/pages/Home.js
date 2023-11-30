import React from 'react';
import { Text, View, Button, StatusBar, TouchableHighlight } from 'react-native';

import globalStyles from './globalStyles';
import { fruitStates } from '../resources/fruitData';

export default function HomePage({ navigation }) {
	return (
		<View style={globalStyles.pageContainer}>
			<Text>Tentando uma comunicação com o MQTT</Text>

			{fruitStates.map((fruitState) => {
				return (
					<TouchableHighlight key={fruitState.value} style={globalStyles.button}>
						<Button
							onPress={() => {navigation.navigate('ListenTopic', { topic: fruitState })}}
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

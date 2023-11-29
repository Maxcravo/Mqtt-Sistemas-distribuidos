import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import globalStyles from './globalStyles';
import { fruitStates } from '../resources/fruitData';

// Todo: estruturar como enviar
async function sendFruitState() {
	const postData = {
		message,
		topic
	};

	try {
		await fetch(`${url}messageFruit`, {
			method: "POST",
			mode: "cors",
			headers: { "Content-Type": "application/json; charset=UTF-8" },
			body: JSON.stringify(postData)
		});
	}
	catch (error) {
		console.error(error);
	}
}

export default function SendDataPage() {
	const [message, setMessage] = useState("");
	const [topic, setTopic] = useState("");

	console.log(`message = ${message}`);
	console.log(`topic = ${topic}`);

	const placeholder = {
		label: "Selecione um tópico...",
		value: null
	}

	return (
		<View style={globalStyles.pageContainer}>
			<View style={sendDataStyles.inputContainer}>
				<Text style={sendDataStyles.inputLabel}>Escreva sua mensagem</Text>
				<TextInput
					style={{ ...globalStyles.input, ...sendDataStyles.input}}
					multiline={true}
					value={message}
					onChangeText={message => setMessage(message)}
				/>
			</View>

			<View style={sendDataStyles.inputContainer}>
				<Text style={sendDataStyles.inputLabel}>Tópico</Text>
				<RNPickerSelect
					placeholder={placeholder}
					style={{
						placeholder: { color: '#000000' },
						height: 40,
						width: '100%',
						marginTop: 5,
						padding: 5,
						color: '#000000'
					}}
					onValueChange={topic => setTopic(topic)}
					items={fruitStates}
				/>
			</View>

			<TouchableHighlight style={sendDataStyles.button}>
				<Button
					onPress={sendFruitState}
					title="Enviar mensagem de fruta verde"
				/>
			</TouchableHighlight>
		</View>
	)
}

const sendDataStyles = StyleSheet.create({
	inputContainer: {
		width: '100%',
		marginVertical: 10,
		padding: 5,
		backgroundColor: '#D4D4D4',
		borderRadius: 8
	},

	input: {
		height: 100,
		textAlignVertical: 'top'
	},

	inputLabel: {
		fontWeight: 'bold',
		color: '#000000',
		fontSize: 14,
		alignSelf: 'flex-start'
	},

	placeholder: {
		color: '#000000',
		fontSize: 12
	},
	
	button: {
		height: 40,
		width: '100%',
	}
})
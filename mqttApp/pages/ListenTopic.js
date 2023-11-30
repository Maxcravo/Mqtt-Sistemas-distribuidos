import { View, StyleSheet, Text, TextInput, TouchableHighlight, Button } from "react-native";

import globalStyles from './globalStyles';
import config from '../config';
import { useState } from "react";

const url = config.url; // "http://ipv4:porta/"

export default function ListenTopicPage({ route }) {
	const { topic } =  route.params;

	const [listening, setListening] = useState(false);
	const [receivedData, setReceivedData] = useState("");

	async function listenFruit(fruitState) {
		try {
			const response = await fetch(url + fruitState);
			const data = await response.text();
			console.log(data);

			setListening(true);
		} catch (error) {
			console.error(error);
		}
	};

	function stopListening() {
		setReceivedData("");
		setListening(false);
	}

	return(
		<View style={globalStyles.pageContainer}>
			{listening ?
				(<>
					<Text style={globalStyles.title}>{`Você está ouvindo o tópico ${topic.label}!`}</Text>
						<TouchableHighlight style={globalStyles.button}>
						<Button
							onPress={() => stopListening()}
							title="Parar"
						/>
					</TouchableHighlight>
				</>):
				<TouchableHighlight style={globalStyles.button}>
					<Button
						onPress={() => listenFruit(topic.value)}
						title="Começar"
					/>
				</TouchableHighlight>
			}

			<TextInput
				placeholder="nenhuma mensagem foi enviada"
				multiline
				editable={false}
				style={{...globalStyles.input, ...listenTopicStyles.input}}
				value={receivedData}
				// onChangeText={data => setData(data)} Aqui vou passar as informações vindas do tópico MQTT
			/>
		</View>
	)
}

const listenTopicStyles = StyleSheet.create({
	input: {
		textAlignVertical: 'top',
		height: "50%",
	},

	button: {
		backgroundColor: "green",
	},

	redirectButtonView: {
		maxWidth: "40%",
		height: "25%",
		alignContent: "center",
		justifyContent: 'space-evenly'
	}
});

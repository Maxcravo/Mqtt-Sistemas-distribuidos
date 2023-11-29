import { StyleSheet, View,Text } from 'react-native';

export default function SendDataPage() {
	return (
		<View style={sendDataStyles.pageContainer}>
			<Text>"aaa"</Text>
		</View>
	)
}

const sendDataStyles = StyleSheet.create({
	pageContainer: {
		flex: 1,
		backgroundColor: 'D4D4D4',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
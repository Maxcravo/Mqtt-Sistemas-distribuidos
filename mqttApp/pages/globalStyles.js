import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
	pageContainer: {
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

	input: {
		height: 60,
		width: '100%',
		marginTop: 5,
		padding: 5,
		borderWidth: 1,
		borderRadius: 8,
		color: '#000000',
	},
})

export default globalStyles;
export const ErrorMessage = ({ errorNumber }) => {
	switch (errorNumber) {
		case 500:
			return 'try again!';
		case 501:
			return 'The request has not been processed! Try again!';
		case 400:
			return 'The data is not correct! :( ';
		case 401:
			return 'You are not logged in! :(';
		case 404:
			return 'Resource not found! :( ';
		default:
			return 'Server problems, we are working on it! :(';
	}
};

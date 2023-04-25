import React, { useState } from 'react';

import Wrapper from '../Helpers/Wrapper';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (e) => {
		e.preventDefault();
		// Checking the empty strings as Usarname or Age
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please provide a valid username and age (no-empty values).',
			});
			return <ErrorModal />;
		}
		// Age is a String, not a Number (that's why the '+' forces it to the nb)
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please provide a valid age (can not be a negative number).',
			});
			return;
		}
		console.log(enteredUsername, enteredAge);
		props.onAddUser(enteredUsername, enteredAge);

		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	};
	const ageChangeHandler = (e) => {
		setEnteredAge(e.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input
						id='username'
						type='text'
						value={enteredUsername}
						onChange={usernameChangeHandler}
					/>

					<label htmlFor='age'>Age (Years)</label>
					<input
						id='age'
						type='number'
						value={enteredAge}
						onChange={ageChangeHandler}
					/>

					<Button type='submit'>Add user</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;

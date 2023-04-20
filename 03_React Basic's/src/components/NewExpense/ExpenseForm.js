import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	// const [enteredTitle, setEnteredTitle] = useState('');
	// const [enteredAmount, setEnteredAmount] = useState('');
	// const [enteredDate, setEnteredDate] = useState('');

	const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	});

	const titleChangeHandler = (e) => {
		// setEnteredTitle(e.target.value);
		setUserInput({
			// enteredTitle: e.target.value,
			// enteredAmount: '',
			// enteredDate: '',

			...userInput,
			enteredTitle: e.target.value,
		});
	};
	const amountChangeHandler = (e) => {
		// setEnteredAmount(e.target.value);
		setUserInput({
			// enteredTitle: '',
			// enteredAmount: e.target.value,
			// enteredDate: '',

			...userInput,
			enteredAmount: e.target.value,
		});
	};
	const dateChangeHandler = (e) => {
		// setEnteredDate(e.target.value);
		setUserInput({
			// enteredTitle: '',
			// enteredAmount: '',
			// enteredDate: e.target.value,

			...userInput,
			enteredDate: e.target.value,
		});
	};

	return (
		<form>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={userInput} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' onChange={userInput} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2022-01-01'
						max='2025-12-31'
						onChange={userInput}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

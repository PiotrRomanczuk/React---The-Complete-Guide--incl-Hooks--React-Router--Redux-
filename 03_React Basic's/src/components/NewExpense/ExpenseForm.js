import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// --- Using one "useState", for all the states ---
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
		//
		// setUserInput({
		// ---  This one is correct, but it could be spread other way ---
		// enteredTitle: e.target.value,
		// enteredAmount: '',
		// enteredDate: '',
		//
		// --- Other way of spreading the inputs ---
		// 	...userInput,
		// 	enteredTitle: e.target.value,
		// });
		//
		// --- Picking up the prevState to the handler ---
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: e.target.value };
	};
	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		console.log(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						type='date'
						min='2022-01-01'
						max='2025-12-31'
						value={enteredDate}
						onChange={dateChangeHandler}
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

import React, { useRef, useState } from 'react'; // Import React and useRef, useState from 'react' module
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);

	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		// Check for entered amount validity
		if (
			enteredAmount.trim().length === 0 ||
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		) {
			setAmountIsValid(false);
			return; // Exit the function to prevent adding to the cart
		}

		setAmountIsValid(true);
		props.onAddToCart(enteredAmountNumber);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label='Amount'
				input={{
					id: 'amount',
					type: 'number',
					min: 1, // Corrected minimum value from 0 to 1
					max: 5,
					step: 1,
					defaultValue: 1,
				}}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p>Please set a valid amount (1-5).</p>}
		</form>
	);
};

export default MealItemForm;

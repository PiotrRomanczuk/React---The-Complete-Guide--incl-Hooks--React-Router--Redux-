import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
	// const expenseDate = '2023.03.13';
	// const newDate = new Date(2002, 11, 22);

	// console.log(newDate);

	let title = props.title;

	console.log(title);

	const clickHandler = () => {
		title = 'Updated';
		console.log(title);
		console.log('clicked!');
	};

	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Button</button>
		</Card>
	);
};

export default ExpenseItem;

import React, { useState } from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{
					name: userName,
					age: userAge,
					id: Math.random().toString(),
				},
			];
		});
	};
	return (
		<div className='container'>
			{/* <h1>Adding Users</h1> */}
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;

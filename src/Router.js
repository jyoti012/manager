import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
		<Router>
			<Scene key="root">
				<Scene key="auth" hideNavBar>
					<Scene key="login" component={LoginForm} title="Please Login" initial />
				</Scene>
				<Scene key="main" hideNavBar={true}>
					<Scene 
						rightTitle="Add"
						onRight={()=> Actions.employeeCreate() }
						key="employeeList" 
						component={EmployeeList} 
						title="Employee List" 
						initial
						hideNavBar={false}/>
						<Scene 
							key="employeeCreate"
							component={EmployeeCreate}
							title="Add Employee"
							hideNavBar={true}
						/>
				</Scene>
			</Scene>
		</Router>
	);
}

export default RouterComponent;
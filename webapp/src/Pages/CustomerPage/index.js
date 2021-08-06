import React from "react";
import styled from "styled-components";
import CustomerInput from "../../Components/CustomerInput";
import CustomerOutput from "../../Components/CustomerOutput";
import axios from "axios";

const OuterContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InnerContainer = styled.div`
	width: 60%;
	height: auto;
`;

class CustomerPage extends React.PureComponent {
	constructor() {
		super();
		this.state = {
			customers: [],
			isLoading: true,
			selectedCustomer: {
				firstName: '',
				lastName: '',
				businessName: '',
				dateOfBirth: '',
				customerId: 0
			},
			isEdit: false
		};
	}

	componentDidMount() {
		this.fetchCustomers();
	}

	fetchCustomers = () => {
		axios.get("https://localhost:44342/api/customer")
			.then(res => {
				this.setState({
					customers: res.data,
					isLoading: false
				})
			})
			.catch(err => { 
				console.log(err);
			})
	}

	clickUpdate = (customer) => {
		this.setState({
			selectedCustomer: customer,
			isEdit: true
		});
	};

	addOrUpdateCustomer = (customerId) => {
		if(!this.state.isEdit) {
			axios.post("https://localhost:44342/api/customer", {
				FirstName: this.state.selectedCustomer.firstName,
				LastName: this.state.selectedCustomer.lastName,
				BusinessName: this.state.selectedCustomer.businessName,
				DateOfBirth: this.state.selectedCustomer.dateOfBirth
			})
				.then(res => {
					this.setState({
						selectedCustomer: {
							firstName: '',
							lastName: '',
							businessName: '',
							dateOfBirth: '',
							customerId: 0
						},
						isEdit: false
					}, () => {
						this.fetchCustomers();
					})
				})
				.catch(err => {
					console.log(err);
				})
		} else {
			axios.put(`https://localhost:44342/api/customer/${customerId}`,
			{
				FirstName: this.state.selectedCustomer.firstName,
				LastName: this.state.selectedCustomer.lastName,
				BusinessName: this.state.selectedCustomer.businessName,
				DateOfBirth: this.state.selectedCustomer.dateOfBirth
			})
				.then(res => {
					this.setState({
						selectedCustomer: {
							firstName: '',
							lastName: '',
							businessName: '',
							dateOfBirth: '',
							customerId: 0
						},
						isEdit: false
					}, () => {
						this.fetchCustomers();
					})
				})
				.catch(err => {
					console.log(err);
				})
		}
	}

	updateFields = (key, value) => {
		this.setState({
			selectedCustomer: { ...this.state.selectedCustomer, [key]: value },
		});
	};

	clickDelete = (customerId) => {
		if(window.confirm("Are you sure you want to delete?")) {
		axios.delete(`https://localhost:44342/api/customer/${customerId}`)
			.then(res => {
				this.fetchCustomers();
			})
			.catch(err => {
				console.log(err);
			})
		}
	};

	render() {
		return (
			<OuterContainer>
				<InnerContainer>
					<CustomerInput
						customer={this.state.selectedCustomer}
						isEdit={this.state.isEdit}
						updateFields={this.updateFields}
						addOrUpdateCustomer={this.addOrUpdateCustomer}
						key={this.state.selectedCustomer.customerId || "new"}
					/>
					<CustomerOutput
						customers={this.state.customers}
						isLoading={this.state.isLoading}
						clickUpdate={this.clickUpdate}
						clickDelete={this.clickDelete}
					/>
				</InnerContainer>
			</OuterContainer>
		);
	}
}

export default CustomerPage;

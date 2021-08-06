import React from "react";
import styled, {css} from "styled-components";
import moment from "moment";
import theme from "../../common/theme";
import { FiArchive, FiEdit2 } from "react-icons/fi";

const CustomerListContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const RowContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 50px;

	& > * {
		width: calc(100%/6);
		font-size: 16px;
		font-weight: 500;
	}
	color: ${(p) => p.header? theme.colours.white: theme.colours.black};
	background-color: ${(p) => p.header? theme.colours.secondary: theme.colours.white};

	${(props) => !props.header && css`
		:nth-child(odd) {
			background-color: ${theme.colours.primaryLight};
		}
	`}
`;

class CustomerOutput extends React.PureComponent {

	render() {
		const hasCustomers =
			this.props.customers.length === 0 ? (
				<h3> No Customers Found</h3>
			) : null;
		const customer =
			this.props.customers.length &&
			this.props.customers.map((customer, index) => {
				return (
					<RowContainer key={customer.customerId}>
						<span>{customer.firstName}</span>
						<span>{customer.lastName}</span>
						<span>{customer.businessName}</span>
						<span>{moment(customer.dateOfBirth).format("DD/MM/YYYY")}</span>
						<FiEdit2 onClick={() => this.props.clickUpdate(customer)}/>
						<FiArchive onClick={() => this.props.clickDelete(customer.customerId)} />
					</RowContainer>
				);
			});
		return (
			<CustomerListContainer>
				{hasCustomers ? (
					hasCustomers
				) : (
					<>
						<RowContainer header={true}>
							<span>First Name</span>
							<span>Last Name</span>
							<span>Bussiness Name</span>
							<span>Date of Birth</span>
							<span>Update</span>
							<span>Delete</span>
						</RowContainer>
						{customer}
					</>
				)}
			</CustomerListContainer>
		);
	}
}

export default CustomerOutput;

import React from "react";
import moment from "moment";
import styled, { css } from "styled-components";
import { container, row, col12, col6 } from "../../common/style";
import theme from "../../common/theme";

/** Form Style component */
const FormWrapAddEdit = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	margin: 2em 0;
	${(props) =>
		props.tableList === false &&
		`
 margin: 0em 0em 3em 0em;
 `};
	@media screen and (max-width: ${theme.breakpoints.tablet}) {
		padding: 1em 0;
		${(props) =>
			props.tableList === false &&
			`
 margin: 0 0 1em 0;
 padding: 0 0 1em 0;
 `};
	}
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
		margin: 1em 0;
		padding: 0em 0 1em;
		${(props) =>
			props.tableList === false &&
			`
 margin: 0 0 1em 0;
 `};
	}
`;
const FormMessage = styled.div`
	text-align: center;
	justify-content: center;
	padding: 1em 2em;
	width: 90%;
	margin: auto;
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
		padding: 1em 0em 1em 0em;
		width: 90%;
	}
`;

const FormBodyContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 100%;
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
		.hide {
			display: none;
		}
	}
	@media screen and (max-width: ${theme.breakpoints.tablet}) {
		.hide {
			display: none;
		}
	}
`;
const FormContainerFull = styled.div`
	width: calc(100%);
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
		width: calc(100%);
		padding: 0;
		flex-direction: column;
	}
`;
const FormContainerButton = styled.div`
	width: 100%;
	display: flex;
	box-sizing: border-box;
	justify-content: center;
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
		width: 100%;
		padding: 0;
		flex-direction: column;
	}
`;
const FormContainerHalf = styled.div`
	width: calc(50%);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	padding: 0 1em;
	box-sizing: border-box;
	color: ${theme.colours.black};
	margin-bottom: ${(props) =>
		props.marginBottom ? props.marginBottom : `30px`};
	select::-ms-expand {
		display: none;
	}
	@media screen and (min-width: ${theme.breakpoints.mobile}) {
		padding: 0;
		:first-child {
			padding-right: 10px;
		}
		${(props) =>
			props.marginBottom &&
			`
 margin-bottom: ${props.marginBottom};
 `}
	}
	@media screen and (max-width: ${theme.breakpoints.mobile}) {
		width: calc(100% - 0.5em);
		padding: 0;
		:first-child {
			padding-right: 0;
		}
		.hide {
			display: none;
		}
		${(p) =>
			p.hideInMobile === true &&
			css`
				display: none;
			`};
	}
	@media screen and (max-width: ${theme.breakpoints.mobileSmall}) {
		padding: 0;
		width: 100%;
	}
`;


const SubmitButton = styled.button`
	padding: 1rem 2rem;
	background-color: ${theme.colours.primary};
	color: ${theme.colours.white};
	border: 1px solid ${theme.colours.primary};
	border-radius: 5px;
`;

const Label = styled.label`
	width: 100%;
	text-align: start;
`;

class CustomerInput extends React.PureComponent {
	constructor(props) {
		super();
		this.state = {
			customerId: props.customer?.customerId,
			firstName: props.customer?.firstName,
			lastName: props.customer?.lastName,
			businessName: props.customer?.businessName,
			dateOfBirth: moment(props.customer?.dateOfBirth).format(
				"YYYY-MM-DD"
			),
		};
	}

	static getDerivedStateFromProps = (props, state) => {
		return {
			customerId: props.customer?.customerId,
			firstName: props.customer?.firstName,
			lastName: props.customer?.lastName,
			businessName: props.customer?.businessName,
			dateOfBirth: moment(props.customer?.dateOfBirth).format(
				"YYYY-MM-DD"
			),
		};
	};

	addOrUpdateCustomer = (e) => {
		e.preventDefault();
		this.props.addOrUpdateCustomer(this.props.customer?.customerId);
	};

	updateFields = (e) => {
		this.props.updateFields(e.target.name, e.target.value);
	};

	checkDisabilityOfButton = () => {
		let keys = Object.keys(this.state);
		let isDisable = false;
		keys.forEach((i) => {
			if (this.state[i] === "") {
				isDisable = true;
			}
		});
		if (isDisable) {
			return true;
		} else {
			return false;
		}
	};

	render() {
		console.log(this.props.customer);
		return (
			<FormWrapAddEdit
				onSubmit={(e) => this.addOrUpdateCustomer(e)}
				key={this.props.key}
			>
				<FormBodyContainer>
					<FormContainerFull>
						<FormContainerHalf>
							<Label htmlFor="firstName"> First Name </Label>
							<input
								type="text"
								placeholder="First Name"
								name="firstName"
								required
								value={this.props.customer.firstName}
								onChange={this.updateFields}
								id="firstName"
							/>
						</FormContainerHalf>
						<FormContainerHalf>
							<Label htmlFor="lastName"> Last Name </Label>
							<input
								type="text"
								placeholder="Last Name"
								name="lastName"
								required
								value={this.props.customer.lastName}
								onChange={this.updateFields}
							/>
						</FormContainerHalf>
					</FormContainerFull>
					<FormContainerFull>
						<FormContainerHalf>
							<Label htmlFor="bussinessName">
								{" "}
								Bussiness Name{" "}
							</Label>
							<input
								type="text"
								placeholder="Bussines Name"
								name="businessName"
								required
								value={this.props.customer.businessName}
								onChange={this.updateFields}
							/>
						</FormContainerHalf>
						<FormContainerHalf>
							<Label htmlFor="dateOfBirth">Date of birth </Label>
							<input
								type="date"
								placeholder="Date of Birth"
								name="dateOfBirth"
								required
								value={moment(
									this.props.customer?.dateOfBirth
								).format("YYYY-MM-DD")}
								onChange={this.updateFields}
							/>
						</FormContainerHalf>
					</FormContainerFull>
					<FormContainerButton>
						<SubmitButton type="submit">
							{this.props.isEdit ? "Update" : "Add"}
						</SubmitButton>
					</FormContainerButton>
				</FormBodyContainer>
			</FormWrapAddEdit>
		);
	}
}

export default CustomerInput;

import { css } from "styled-components";
import theme from "../common/theme";

export const container = css`
	max-width:1300px;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
`;

export const row = css`
	display: flex;
	flex-wrap: wrap;
	margin-right: -15px;
	margin-left: -15px;
`;



export const col = css`
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
`;

export const commonColCss = css`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
`;

export const colAuto = css`
	${commonColCss}

	flex: 0 0 auto;
	width: auto;
	max-width: none;
`;

export const col12 = css`
	${commonColCss}

	flex: 0 0 100%;
	max-width: 100%;
`;

export const col6 = css`
	${commonColCss}

	flex: 0 0 50%;
	max-width: 50%;
`;

export const col5 = css`
	${commonColCss}

	flex: 0 0 41.666667%;
	max-width: 41.666667%;
`;

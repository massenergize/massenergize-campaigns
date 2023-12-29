import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/admin/fire-config";
import { fetchMeUser, setCampaignAccountAction, setFirebaseAuthAction } from "../redux/actions/actions";
import { LOADING } from "../utils/Constants";
import Loading from "../components/pieces/Loading";

/**
 *
 * @param fetchMassenergizeUser
 * @param fireAuth
 * @param admin
 * @param putFirebaseAuthInRedux
 * @param props
 * @returns {React.JSX.Element|void}
 * @constructor
 */
function AuthGuard({
	fetchMassenergizeUser,
	fireAuth,
	admin,
	putFirebaseAuthInRedux,
	...props
}) {
	const navigator = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			const userIsNotAuthenticated = !user;
			if (userIsNotAuthenticated) {
				navigator("/login");
				return console.log("ADMIN_IS_NOT_AUTHENTICATED");
			}
			putFirebaseAuthInRedux(user);
			fetchMassenergizeUser({ idToken: user?.accessToken }, (data, err) => {
				let account = localStorage.getItem("acc");
				account = account && JSON.parse(atob(account));
				props.setAccount(account|| data?.campaign_accounts[0]);
			});
		});
	}, []);

	const isLoadingFirebaseUser = fireAuth === LOADING;
	const isLoadingMassenergizeUser = admin === LOADING;

	if (isLoadingFirebaseUser || isLoadingMassenergizeUser)
		return (
			<Loading spinnerStyle={{ color: "var(--admin-theme-color)" }} fullPage>
				Almost there...
			</Loading>
		);

	if (!admin) {
		alert("Sorry, you are not an admin...");
		return console.log("Sorry, you are not an admin!");
	}

	return <div>{props.children}</div>;
}

const mapState = (state) => {
	return { fireAuth: state.fireAuth, admin: state.authAdmin };
};

const mapDispatch = (dispatch) => {
	return bindActionCreators(
		{
			fetchMassenergizeUser: fetchMeUser,
			putFirebaseAuthInRedux: setFirebaseAuthAction,
			setAccount:setCampaignAccountAction,
		},
		dispatch
	);
};

export default connect(mapState, mapDispatch)(AuthGuard);

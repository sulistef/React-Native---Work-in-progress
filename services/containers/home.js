import { connect } from "react-redux";
import UserHome from "../../components/UserHome";

const mapStateToProps = state => ({
	userId: state.userId,
	userName: state.userName,
	accessToken: state.accessToken
});

export default connect(mapStateToProps)(UserHome);

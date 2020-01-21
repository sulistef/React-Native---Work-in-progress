import { connect } from "react-redux";
import HomeMyPics from "../../components/HomeMyPics";

const mapStateToProps = state => ({
	userId: state.userId,
	userName: state.userName,
	accessToken: state.accessToken
});

export default connect(mapStateToProps)(HomeMyPics);

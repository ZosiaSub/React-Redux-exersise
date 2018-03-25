import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter} from '../actions/index';

import CounterComponent from '../components/counterComponent';

const mapDispatchToprops = dispatch => ({
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter())
});

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(
    mapStateToProps,
    mapDispatchToprops
)(CounterComponent);
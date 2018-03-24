import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter} from '../actions/index';

import CounterComponent from '../components/counterComponent';

const mapDispatchToprops = dispatch => ({
    increaseCounter: counter => dispatch(increaseCounter(counter)),
    decreaseCounter: counter => dispatch(decreaseCounter(counter))
});

const mapStateToProps = state => ({
    counter: state.counter
});

export default connect(
    undefined,
    mapDispatchToprops,
    mapStateToProps
)(CounterComponent);
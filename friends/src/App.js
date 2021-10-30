import { connect } from 'react-redux';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    title: state.app.title
  }
}

export default connect(mapStateToProps, {})(App);

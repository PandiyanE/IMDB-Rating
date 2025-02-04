import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CustomerAdd from './CustomerAdd';
// import CustomerView from './CustomerView';
// import { Provider } from 'react-redux';
// import { store } from './Store'
import Footer from './IMDBApp/Footer';
import NavBar from './IMDBApp/NavBar';
import Routing from './IMDBApp/Routing'; 
import MovieDetails from './IMDBApp/MovieDetails';

// function App() {
//   return (
//     <Provider store={store}>
//       <div className='App'>
//         <h1>React Redux Customer Example...</h1> <hr />
//         <CustomerAdd />
//         <CustomerView />
//       </div>
//     </Provider>
//   )
// }


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routing />
      <Footer />
    </div>
  );
} 

export default App;

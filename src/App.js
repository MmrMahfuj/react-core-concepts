import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Koober', 'Bappi', 'shubo', 'Omor sani'];

  const cinemas = [
    { nayok: 'koober', nayika: 'kopila' },
    { nayok: 'rubel', nayika: 'Moushumi' },
    { nayok: 'salman shah', nayika: 'purnima' },
    { nayok: 'riyaz', nayika: 'bkul' },
    { nayok: 'koite parina', nayika: 'karina' }
  ]

  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>

      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }

    </div>
  );
}

/* 
      <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="chekha"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person>
         
        <Person name="Rubel" nayika="Moushumi"></Person>
        <Person name="BappaRaz" nayika="chekha"></Person>
        <Person name="kuber" nayika="kopila"></Person>

      <Friend phone="017254861" address="Noakhali"></Friend>
      <Friend phone="018254862" address="Rongpur"></Friend>
      <Friend phone="016254863" address="jani na"></Friend>
      <Friend phone="019254864" address="huda e likhlam"></Friend>
 */

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.nayika}</h4>
    </div>
  );

}

function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

function Friend(props) {
  return (
    <div className="person">
      <h3>Phone: {props.phone}</h3>
      <h5>Address: {props.address}</h5>
    </div>
  )
}
export default App;

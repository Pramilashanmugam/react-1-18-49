import "./App.css";
import EventsClass from "./component/EventsClass.js";
import EventsFunctional from "./component/EventsFunctional.js";

function App() {
  return <div className="App">
    <EventsFunctional />
    <EventsClass />
  </div>;
}

export default App;

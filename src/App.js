import './App.css';
import Accordian from './components/accordian';
import QRCodeGenerator from './components/qr-code-generate';
import Online from './components/online';
import FunComponents from './components/FunComponents';
import ClassComponents from './components/ClassComponents';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      {/* <QRCodeGenerator /> */}
      <ClassComponents />
      <FunComponents />
      <Accordian />
      <Online />
      <Login />
    </div>
  );
}


export default App;

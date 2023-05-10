import {version, Space, DatePicker, Button} from "antd";
import logo from './logo.svg';
import './App.css';
const antd = require('antd')

function App() {
  return (
    <div className="App">
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </div>
  );
}

export default App;

import React from 'react';
import { Row, Col } from 'antd';

const colStyle = () => ({
  height: 50,
  backgroundColor: 'red',
  opacity: Math.round(Math.random() * 10) / 10
});

function App() {
  return (
    <div className='App'>
      <Row>
        <Col span={12} style={colStyle()} />
        <Col span={12} style={colStyle()} />
      </Row>
      <Row>
        <Col span={8} style={colStyle()} />
        <Col span={8} style={colStyle()} />
        <Col span={8} style={colStyle()} />
      </Row>
      <Row>
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} />
        <Col span={6} style={colStyle()} />
      </Row>
    </div>
  );
}

export default App;

import { Layout, Menu, Input, Space } from 'antd';
import {config} from '../../../config.js'
import { routes } from "../routes";
const { Header } = Layout;


const onSearch = (value) => console.log(value);
const Headers = () => {
  return (
    <Header
      style={{
        backgroundColor:"#7e2553",
        position: "sticky",
        paddingInline: 20,
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <img
        src= {`${config.client.url}:${config.client.port}/logo-retangle.png`}
        style={{
          float: "left",
          width: 31,
          height: 31,
          margin: "16px 16px 16px 0",
        }}
      />
      <Space align='center'>
        <Input placeholder="Search..." />
      </Space>
      <Menu
        style={{
          display:'inline-block',
          color:"white",
          backgroundColor:"transparent"
        }}
        mode="horizontal"
        items = {
          routes.map((route, index) => {
            if(route.label)
            return (
              {
                key:`${index+1}`,
                label:(<a href={(route.path)} >{route.label}</a>),
              }
            )
          })
        }
      />
    </Header>
  );
};
export default Headers;

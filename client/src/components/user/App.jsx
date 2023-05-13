import './App.css'
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import axios from 'axios';
import {config} from "../../config"
import { Layout, ConfigProvider, theme } from 'antd';
import Headers from './layout/Headers';
import Footers from './layout/Footers';
import { routes } from "./routes";

const {Content} = Layout;
const defaultData = {
   borderRadius: 6,
   colorPrimary: '#7e2553',
   colorPrimaryBg: '#000',
 };

axios.defaults.baseURL = `${config.server.url}`;

const App = () => {
   const [data, setData] = React.useState(defaultData);
   return (
      <ConfigProvider
      theme={{
         "token": {
            "colorPrimary": "#7e2553",
            "borderRadius": 16,
            "sizeStep": 3,
            "sizeUnit": 4,
            "colorSuccess": "#41c400",
            "colorWarning": "#e28413",
            "colorError": "#f30004",
            "colorInfo": "#00b1fd",
            "colorBgBase": "#f9f0f2",
            "colorTextBase": "#2f0e1f",
            "wireframe": false
          }
      }}
      >
         <Layout>
            <Headers/>
            <Content>
               <BrowserRouter>
                  < Routes >
                     {routes.map((route, index) => (
                        <Route
                        key={`route-${index}`}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        />
                     ))}
                  </ Routes >
               </BrowserRouter>
            </Content>
            <Footers />
         </Layout>
      </ConfigProvider>
  );
};

export default App;

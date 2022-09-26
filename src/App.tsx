import './Assets/styles/global.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.min.css';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import { UserContext } from './Context/UserContext';
import Contracts from './Pages/Contracts';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Router from './Router';
import CreateContracts from './Pages/CreateContract';

function App() {
  const { user } = React.useContext(UserContext);
  console.log(user);
  return (
    <>
      <BrowserRouter>
        <Layout className="layout">
          <NavBar />
          <Content >
            <div className="site-layout-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contracts" element={<Contracts />} />
                <Route path="/createContracts" element={<CreateContracts />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;

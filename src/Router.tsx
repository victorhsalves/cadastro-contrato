import { Layout, Menu } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contracts from "./Pages/Contracts";
import Home from "./Pages/Home";
import Login from "./Pages/Login";


function Router() {
    return (
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(15).fill(null).map((_, index) => {
                            const key = index + 1;
                            return {
                                key,
                                label: `nav ${key}`,
                            };
                        })}
                    />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content">
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/contracts" element={<Contracts />} />
                            </Routes>
                        </BrowserRouter>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </>
    )
}

export default Router;

import { Menu } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

function NavBar() {
    const { user } = React.useContext(UserContext);
    if (user.token != '') {
        return (
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                > 
                    <Menu.Item key={1}><Link to="/" >Home</Link></Menu.Item>
                    <Menu.Item key={2}><Link to="/contracts" >Contratos</Link></Menu.Item>
                    <Menu.Item key={3}><Link to="/createContracts" >Novo Contrato</Link></Menu.Item>
    
                </Menu>
            </Header>
        )
    }
    else {
        return (
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                > 
                    <Menu.Item key={1}><Link to="/" >Home</Link></Menu.Item>
                    <Menu.Item key={2}><Link to="/login" >Login</Link></Menu.Item>
    
                </Menu>
            </Header>
        )
    }
}

export default NavBar;
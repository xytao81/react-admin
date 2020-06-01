import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'


class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            focused: false
        }
        this.onfocus = this.onfocus.bind(this)
        this.onblur = this.onblur.bind(this)
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch placeholder='搜索' className={this.state.focused ? "focused" : ""} onFocus={this.onfocus} onBlur={this.onblur}></NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? "focused iconfont" : "iconfont"}>&#xe62d;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="write">
                        <i className="iconfont" style={{ marginRight: 10 }}>&#xe6e5;</i>
                        写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

    onfocus() {
        this.setState({
            focused: true
        })
    }

    onblur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;
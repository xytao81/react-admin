import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store'

class Header extends Component {

    getSearchList(show) {
        const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, changePage, totalPage } = this.props

        const pageList = []

        for (let i = (page - 1) * 10; i < page * 10; i++) {
            if (list[i] !== undefined) {
                pageList.push(
                    <SearchInfoItem key={i}>{list[i]}</SearchInfoItem>
                )
            }
          
        }

        if (focused || mouseIn) {
            return (<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={() => changePage(page, totalPage)}>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                {
                    pageList
                }
            </SearchInfo>)
        } else {
            return null
        }
    }

    render() {

        const { focused, onfocus, onblur } = this.props

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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch placeholder='搜索' className={focused ? "focused" : ""}
                                onFocus={onfocus}
                                onBlur={onblur}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? "focused iconfont" : "iconfont"}>&#xe62d;</i>
                        {this.getSearchList()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="write">
                        <i className="iconfont" style={{ marginRight: 10 }}>&#xe6e5;</i>
                            写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onfocus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.searchFocus())
        },
        onblur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        changePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            } else {
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
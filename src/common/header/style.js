import styled from 'styled-components'
import logo from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    margin: 0 auto;
`
export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 100px;
    height: 56px;
    display: block;
    width: 100px;
    background: url(${logo});
    background-size: contain;
    box-sizing: border-box;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`
export const NavItem = styled.div`
    line-height: 56px;
    font-size: 17px;
    padding: 0 15px;
    color: #333333;
    &.active {
        color: #ea6f5a;
    }
    &.left {
        float: left;
    }

    &.right {
        float: right;
        color: #969696;
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom {
        position:absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
        &.focused {
            color:#fff;
            background-color: #999
        }
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    left: 0;
    width: 320px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size: 14px;
    color: #969696;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 13px;
        margin-right: 2px;
        transition: all 0.2s ease-in;
        transform-origin: center center
    }
    
`
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
`
export const NavSearch = styled.input`
    width: 240px;
    height: 38px;
    padding: 0 35px 0 20px;
    margin-top: 9px;
    margin-left: 15px;
    font-size: 14px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    box-sizing: border-box;
    color: #777;
    &::placeholder {
        color: #999
    }
    &.focused {
        width: 320px;
    }
    &.slide-enter {
        transition: all .5s linear;
    }
    &.slide-enter-active {
        width: 320px;
    }
    &.slide-exit {
        transition: all .5s linear;
    }
    &.slide-exit-active {
        width: 240px;
    }
`
export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    line-height: 56px;
`

export const Button = styled.div`
    float:right;
    margin-top: 9px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 15px;
    &.reg {
        color: #ec6149;
    }
    &.write {
        margin-left: 20px;
        color: #fff;
        background-color: #ec6149
    }
`
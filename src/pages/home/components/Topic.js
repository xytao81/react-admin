import React, { Component } from 'react'
import { TopicWrapper, TopicItem, TopPicImg } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {

    render() {
        const { list } = this.props
        return (
                <TopicWrapper>
                    {
                        list.map((item) => {
                            return <TopicItem key={item.get('title')}>
                            <TopPicImg />
                            {item.get('title')}
                            </TopicItem>
                        })
                    }
                    
                </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'topList']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic);

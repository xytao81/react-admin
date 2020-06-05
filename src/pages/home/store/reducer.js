import * as constants from './constants'
import { fromJS } from 'immutable'

const deafultState = fromJS({
    topList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    articlePage: 1,
    showScroll: false
})

const changeHomeData = (state, action) => {
    return state.merge({
        topList: fromJS(action.topList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList)
    })
}

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.list)),
        articlePage: action.nextPage
    })
}

export default (state = deafultState, action) => {

    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action)
        case constants.ADD_AIRTICLE_LIST:
            return addArticleList(state, action)
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default:
            return state
    }
}

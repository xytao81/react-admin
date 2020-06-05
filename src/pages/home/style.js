import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`

export const HomeWLeft = styled.div`
    float: left;
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner {
        width: 625px;
        height: 270px;
    }
`

export const HomeWRight = styled.div`
    float: right;
    width: 240px;
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    margin-left: 18px;
    margin-bottom: 10px;
    float:left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
`
export const TopPicImg = styled.span`
   display: block;
   float: left;
   width: 32px;
   height: 32px;
   background: url('https://sta-op.douyucdn.cn/dycatr/8def0af581d3f883e67e4a932c0207ce.png?x-oss-process=image/format,webp/quality,q_75');
   background-size: contain;
   margin-right: 10px;
`
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo  = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    color: #333;
    font-weight: bold;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  margin: 30px 0;
  background: #a5a5a5;
  color: #fff;
  cursor: pointer;
`

export const RecommendWrapper = styled.div`
  width: 280px;
  margin: 30px 0;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 6px;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 12px;
  cursor: pointer;
`
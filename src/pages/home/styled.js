import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    // background: green;
    overflow: hidden;
    //  开启overflow，会使父类感知到height 高度，自动调整，因为会触发BIC
`;

export const HomeLeft = styled.div`
    float: left;
    padding-top: 30px;
    margin-left: 15px;
    width: 625px;
    // background: red;
    .banner-img {
        width:625px;
        height: 240px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    width:280px;
    background: pink;

`;


// ----------- topic part

export const TopicWrapper = styled.div`
   padding: 20px 0 10px 0;
    //    background: purple;
    overflow:hidden;
    margin-left:-18px;
    border-bottom: 1px solid #dcdcdc;

`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height:32px;
    padding-right:10px;
    margin-left: 18px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border: 1px solid #dcdcdc;
    border-radius:4px;
     margin-bottom: 18px;
    .topic-img{
        height:32px;
        width:32px;
        display:block;
        float:left;
        margin-right:10px;
       
    }
`;

//  list info part:
export const ListItem = styled.div`
    padding: 20px 0;
    overflow:hidden;
    border-bottom: 1px solid #dcdcdc;
    
    .list-img{
        display: block;
        width:125px;
        height:100px;
        float:right;
        border-radius: 10px;
    }

`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .list-title {
        line-height:27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;

    }
    .list-desc{
        line-height: 24px;
        font-size:13px;
        color:#999;
    }
`;

//  recommend part

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
    border: 1px solid red;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    // background-repeat: no-repeat;
    
`;


//  write part

export const WriteWrapper = styled.div`
    width:278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align:center;
    border: 1px solid black;
`;

//  LoadMore part

export const LoadMore = styled.div`
    width:100%,
    height:40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
`;


//  back top part
export const BackTop = styled.div` 
    position: fixed;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    background: lightgray;
    right:100px;
    bottom: 100px;
    font-size:15px;
    padding:5px;

`;
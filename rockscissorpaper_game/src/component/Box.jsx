import React from 'react'

const Box = (props) => {

    let result;
    if(props.title === "Computer" &&
        props.result !== "tie" &&
        props.result !== ""
    ){
        result = props.result === "win"?"lose":"win";
    } else {
        result = props.result;
    }

    const initialImg = "https://mblogthumb-phinf.pstatic.net/MjAyMTA3MjJfMTUy/MDAxNjI2OTE3NjI5MzIw.MpddVnh8PLVpQBq4FiP00-m8NPulTwNmWrMIKyPys1Yg.sZlzccrSUkJXLkEdy4u2IFPY7ssSb2KpDgg4YCMWkaAg.PNG.dct8867/%EB%AC%BC%EC%9D%8C%ED%91%9C_%EB%A0%88%EB%93%9C_%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B84x.png?type=w800";
    console.log(props)
    return (
        <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <img className="img-size" src={props.item?props.item.img:initialImg}/>
        <h2>{result}</h2>
        </div>
    )
    // win 일때는 초록색. lose 일때는 빨간색. tie 일때 검은색.
}

export default Box

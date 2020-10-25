import React from "react";


function AboutUsIndicator(props) {

    if (props.height.current == undefined) {
        return null;
    }

    console.log(props.height)
    if (props.scroll >= props.height.current.offsetTop && props.scroll < props.height.current.offsetTop + props.height.current.offsetHeight) {
        return (<div className="indicator"></div>)
    } else {
        return null;
    }


} export default AboutUsIndicator
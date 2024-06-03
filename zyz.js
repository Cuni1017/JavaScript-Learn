function getStyle(object,att){
    //方式1
    return window.getComputedStyle ? getComputedStyle(object,att) : object.currentStyle[att];
    //方式2
    // if(window.getComputedStyle){ //非IE
    //     return getComputedStyle(object)[att]
    // }else{ //IE
    //     return object.currentStyle[att]
    // }
    // console.log(width)
}


function $(str){
    if(typeof str === "string"){
        return document.getElementById(str);
    }else if(typeof str === "function"){
        window.onload = str;
    }
}
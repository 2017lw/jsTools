/**
* @author yzy
*/
var Code = {

/**
 * 编码
 * @param $data  数据
 * @param $s  分隔符
 * @param salt  int 扩大倍数  >=1
 */
enCode:function ($data,$s,salt) {
    var returnStr = '';
    for(var i = 0;i<$data.length;i++){
        returnStr+= $s+""+($data[i].charCodeAt()<<salt)
    }
    return returnStr

}

/**
 * 编码
 * @param $code  数据
 * @param $s  分隔符
 * @param salt  int 扩大倍数  >=1
 */
 ,
deCode:function ($code,$s,salt) {
    var list = $code.split($s);
    var returnStr = '';
    for(var i =  0;i<list.length;i++){
        returnStr+=String.fromCharCode(list[i]>>salt);
    }
    return returnStr
}
}

//demo
/**
Code.enCode("我的测试用例","das",2)
"das100420das121360das111916das143188das119968das81452"
Code.deCode("das100420das121360das111916das143188das119968das81452","das",2)
"我的测试用例"
**/

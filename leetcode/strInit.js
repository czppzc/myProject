
/**给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。 */
//第一种方法：滑动窗口法
var findSubstring = function(s, words) {
    let f = words[0];
    if(!f){
        return []
    }
    let wlen = f.length;
    let temp;
    let w = [...words];
    let count=0,left=0,right=0;
    let res = [];
    while(right + wlen <= s.length){
        let state = false;
        temp = s.slice(right,right + wlen)
        console.log(temp)
        right += wlen;
        for(let i=0;i<w.length;i++){
            if(w[i] == temp){
                state = true;
                w.splice(i,1)
                count++;
                break;
            }
        }
        // console.log(temp,left,right,count)
        if(!state){ // 不存在
            left ++;
            right = left;
            count = 0;
            w = [...words];
            continue;
        }
        if(count == words.length){ // 满足条件，push进结果数组，重置条件，继续迭代
            res.push(left)
            count = 0;
            w = [...words];
            left ++;
            right = left;
        }
    }
    return res
    
};
//第二种方法：递归法
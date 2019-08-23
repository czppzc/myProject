//去除重复的字符
function getMaxStr(s) {
    var maxStr = '';
    var hash = {}
    for (var i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            maxStr += s[i]
            hash[s[i]] = true
        }
    }
    return maxStr
}
//得到最长的连续不重复子串
function getConstabtStr(s) {
    var maxStr = '',
        str = '';
    var hash = {};
    for (var i = 0; i < s.length; i++) {
        str += s[i];
        hash[s[i]] = true;
        for (var j = i + 1; j < s.length; j++) {
            if (!hash[s[j]]) {
                hash[s[j]] = true;
                str += s[j]
            } else {
                break
            }
        }
        if (str.length > maxStr.length) {
            maxStr = str;
        }
        str = '';
        hash = {}
    }
    return maxStr
}
//大数相加
function bigNumPlue(s1, s2) {
    var s1Arr = s1.split('');
    var s2Arr = s2.split('');
    var jinwei = 0,
        res = '',
        num;
    while (s1Arr.length || s2Arr.length || jinwei) {
        num = ~~s1Arr.pop() + ~~s2Arr.pop() + jinwei; //都转换程数字进行加法运算，而不是字符串加法
        res = num % 10 + res;
        jinwei = Math.floor(num / 10)
    }
    return res
}
//获取字符串中出现次数最多的字符
function getMaxLen(s) {
    var hash = {};
    for (var i = 0; i < s.length; i++) {
        if (!hash[s[i]]) {
            hash[s[i]] = 1
        } else {
            hash[s[i]]++
        }
    }
    console.log(hash)
    var max = Object.keys(hash).reduce((pre, v) => {
        console.log(pre, v)
        if (pre.times < hash[v]) {
            pre = {
                times: hash[v],
                prop: v
            }
        }
        return pre
    }, {
        times: 0
    })
    return max
}
/**1234567898765432123456789......找出第n个数字是什么 */
function getIndex(n) {
    var str = "1234567898765432" //最小循环体
    var remain = n % (n / (str.length) - 1);
    return str[remain]


}

function handle(str) {
    var restr = str.split('');
    for (var j = 0; j < str.length; j++) {
        if (str[j + 1] != str[j]) {
                two = 0
            }
            while (str[j + 1] == str[j]) {
                three++;
                j++;
                if (three >= 2) {
                    restr[j] = '';
                    three--;
                }
            }
            if (three) {
                two++;
                if (two >= 2) {
                    restr[j] = '';
                    two = 0;
                }
            }
            three = 0;
        }
    }
/**我叫王大锤，是一家出版社的编辑。我负责校对投稿来的英文稿件，这份工作非常烦人，因为每天都要去修正无数的拼写错误。但是，优秀的人总能在平凡的工作中发现真理。我发现一个发现拼写错误的捷径：

1. 三个同样的字母连在一起，一定是拼写错误，去掉一个的就好啦：比如 helllo -> hello
2. 两对一样的字母（AABB型）连在一起，一定是拼写错误，去掉第二对的一个字母就好啦：比如 helloo -> hello
3. 上面的规则优先“从左到右”匹配，即如果是AABBCC，虽然AABB和BBCC都是错误拼写，应该优先考虑修复AABB，结果为AABCC

我特喵是个天才！我在蓝翔学过挖掘机和程序设计，按照这个原理写了一个自动校对器，工作效率从此起飞。用不了多久，我就会出任CEO，当上董事长，迎娶白富美，走上人生巅峰，想想都有点小激动呢！
……
万万没想到，我被开除了，临走时老板对我说： “做人做事要兢兢业业、勤勤恳恳、本本分分，人要是行，干一行行一行。一行行行行行；要是不行，干一行不行一行，一行不行行行不行。” 我现在整个人红红火火恍恍惚惚的……

请听题：请实现大锤的自动校对程序 */
//典型的滑动窗口法来解决问题 用一个参数来统计连续相同三个字符 另外一个参数来控制连续两个字符个数

//牛客网输入输出
var linesNum=readline();
var strsArr=[];
var num=1,cont=0;
for(var i=0;i<linesNum;i++){
    strsArr.push(readline())
}
for(j=0;j<strsArr.length;j++){
    strsArr[j]=filterStr(strsArr[j]);
    num=1;
    cont=0;
}
function filterStr(str){
    var reStr=str.split('');
    for(var i=0;i<str.length;i++){
        if(cont>0&&str[i+1]!=str[i]){
            cont=0;
        }
        while(str[i+1]&&str[i+1]==str[i]){
            num++;
             if(num>=3){
                 reStr[i+1]="";
                 num--
            }
            i++;
        }
        if(num==2){
            cont++
            if(cont>=2){
                if(reStr[i]==''){
                     var k=i;
                while(reStr[k]==''){
                    k--
                }
                reStr[k]="";
                }
                reStr[i]="";
               
                cont=0
            }
        }
        num=1;
    }
    return reStr.join('')
}
for(var i=0;i<strsArr.length;i++){
    print(strsArr[i])
    }
//第二种解法

var num=readline();
var strArr=[];
for(var i=0;i<num;i++){
    strArr.push(readline())
}
var three=0;two=0;
for(var k=0;k<strArr.length;k++){
    strArr[k]=handle(strArr[k]);
    two=0;
}
function handle(str){
    var restr=str.split('');
    for(var j=0;j<str.length;j++){
        if(str[j+1]!=str[j]){
            two=0
        }
               while(str[j+1]==str[j]){
             three++;
             j++;
            if(three>=2){
                restr[j]='';
                three--;
            }
        }
        if(three){
            two++;
            if(two>=2){
                var s=j;//这一步很关键
                while(restr[s]==''){
                    s--;
                }
                restr[s]='';
                two=0;
            }
        }
        three=0;
    }
    return restr.join('')
}
for(var l=0;l<strArr.length;l++){
    print(strArr[l])
}
/**机器人正在玩一个古老的基于DOS的游戏。游戏中有N+1座建筑——从0到N编号，从左到右排列。编号为0的建筑高度为0个单位，编号为i的建筑的高度为H(i)个单位。 

起初， 机器人在编号为0的建筑处。每一步，它跳到下一个（右边）建筑。假设机器人在第k个建筑，且它现在的能量值是E, 下一步它将跳到第个k+1建筑。它将会得到或者失去正比于与H(k+1)与E之差的能量。如果 H(k+1) > E 那么机器人就失去 H(k+1) - E 的能量值，否则它将得到 E - H(k+1) 的能量值。

游戏目标是到达第个N建筑，在这个过程中，能量值不能为负数个单位。现在的问题是机器人以多少能量值开始游戏，才可以保证成功完成游戏？ */

//能量值肯定小于等于建筑最高高度，这是解题的关键点找出最大值 使用二分法找出最小的值 完全可以解决 比较简单

//二分法解决问题
var num=readline();
var datas=readline().split(' ');
var start=0,end=Math.max(...datas),mid=0,res=0;
while(start<end){
    mid=Math.floor((start+end)/2);
    res=mid;
    for(var i=0;i<datas.length;i++){
        res=2*res-datas[i];
    }
    
    if(res>=0){
        end=mid;
    }else{
     start=mid+1;
    }
}
       print(end)
/**
 * 小包最近迷上了一款叫做雀魂的麻将游戏，但是这个游戏规则太复杂，小包玩了几个月了还是输多赢少。
于是生气的小包根据游戏简化了一下规则发明了一种新的麻将，只留下一种花色，并且去除了一些特殊和牌方式（例如七对子等），具体的规则如下：

总共有36张牌，每张牌是1~9。每个数字4张牌。
你手里有其中的14张牌，如果这14张牌满足如下条件，即算作和牌
14张牌中有2张相同数字的牌，称为雀头。
除去上述2张牌，剩下12张牌可以组成4个顺子或刻子。顺子的意思是递增的连续3个数字牌（例如234,567等），刻子的意思是相同数字的3个数字牌（例如111,777）

例如：
1 1 1 2 2 2 6 6 6 7 7 7 9 9 可以组成1,2,6,7的4个刻子和9的雀头，可以和牌
1 1 1 1 2 2 3 3 5 6 7 7 8 9 用1做雀头，组123,123,567,789的四个顺子，可以和牌
1 1 1 2 2 2 3 3 3 5 6 7 7 9 无论用1 2 3 7哪个做雀头，都无法组成和牌的条件。

现在，小包从36张牌中抽取了13张牌，他想知道在剩下的23张牌中，再取一张牌，取到哪几种数字牌可以和牌。

输入描述:
输入只有一行，包含13个数字，用空格分隔，每个数字在1~9之间，数据保证同种数字最多出现4次。

输出描述:
输出同样是一行，包含1个或以上的数字。代表他再取到哪些牌可以和牌。若满足条件的有多种牌，请按从小到大的顺序输出。若没有满足条件的牌，请输出一个数字0

输入例子1:
1 1 1 2 2 2 5 5 5 6 6 6 9

输出例子1:
9

例子说明1:
可以组成1,2,6,7的4个刻子和9的雀头

输入例子2:
1 1 1 1 2 2 3 3 5 6 7 8 9

输出例子2:
4 7

例子说明2:
用1做雀头，组123,123,567或456,789的四个顺子

输入例子3:
1 1 1 2 2 2 3 3 3 5 7 7 9

输出例子3:
0

例子说明3:
来任何牌都无法和牌
 */
//递归法求解，每一个麻将肯定会组成对子，同三或者顺三 利用这个递归 一定要注意对子只能出现一次 这个条件一定要注意满足
var arr=readline().split(' ').map(v => parseInt(v,10));
var dataArr=[].concat(arr);
var res=[];
for(var i=1;i<=9;i++){
    if(dataArr.filter(v => v==i).length<4){
    var conArr=[].concat(dataArr,i).sort((a,b) => a-b);
    var bool=getRes(conArr);
    if(bool){
        res.push(i)
    }
    }
   
}
    function getRes(data,times){
        if(data.length==0){
            return true
        }
        var dataRes;
       var count=data.filter(v => v==data[0]).length;
        if(count>4){
            return false
        }
        if(count%3!=0&&count>=2&&!times){
            dataRes=getRes(data.slice(2,14),true);
            if(dataRes===true){
                return true
            }
        }
        if(count%3==0&&count>=3){
            dataRes=getRes(data.slice(3,14),times);
            if(dataRes===true){
                return true
            }
        }
        if(data.indexOf(data[0]+1)>-1&&data.indexOf(data[0]*1+2)>-1){
            var pro=data[0];
            data.splice(0,1);
            data.splice(data.indexOf(pro+1),1);
            data.splice(data.indexOf(pro+2),1);
            dataRes=getRes(data,times);
            if(dataRes===true){
                return true
            }
        }
        return false
    }
print(res.length?res.join(' '):0)
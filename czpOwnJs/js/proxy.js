var Dom = new Proxy({}, {
    get(target, key) {
        return function (obj = {}, ...child) {
           var el=document.createElement(key);
           for(let prop in obj){
               el.setAttribute(prop,obj[prop])
           }
           for(let value of child){
               console.log(value)
               if(typeof value =='string'){
                   var childs=document.createTextNode(value);
                   el.appendChild(childs)
               }else {
                el.appendChild(value)
               }
           }
           return el
        }
    }
})

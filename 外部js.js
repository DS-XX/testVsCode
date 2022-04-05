alert('外部的js');

var name = 'global' ;
var obj = {
name: 'local' ,foo: function(){
this.name = 'foo' }.bind(window)
};
var bar = new obj.foo();
setTimeout(function() {
console.log(window.name )},0);
console.log(bar.name);
var bar3 = bar2 = bar;
bar2.name = 'foo2 ';
console.log(bar3.name) ;


setTimeout(() =>console.log( 'a ' ));
Promise.resolve( ).then(
    () => console.log( 'b')).then(
   () => Promise.resolve( 'c ' ).then((data) =>{
   setTimeout(() => console.log( 'd ' ));console.log( 'f');
   return data;
   }
   )
   ).then(data => console.log(data));
   
Promise.resolve().then(
    ()=>{
        console.log('a')
    Promise.resolve().then(()=>console.log('c'))
    setTimeout(console.log('d'),0)
    }
).then(()=>{console.log('b')})


var Person=(function(){
    function Person(){
        this._name=name;
    }
    Person.prototype.greet=function(){
        console.log('Hi,myname is'+ this._name);
    }
    Person.prototype.greetDelay=function(time){
        var _this=this;
        setTimeout(function(){
            console.log('Hi,my name is'+_this.name);
        })
    }
})()
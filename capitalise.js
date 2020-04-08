var intro = ["hi", "hey", "hello", "howdy"];

x = function (i){
return i.toUpperCase();
};
intro = intro.map(x);
console.log(intro);
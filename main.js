let List = ["mango,Orange,strawberry"]
console.log(List);


function add(){
  List.push('Apples')
  console.log(List);
}
add();

function remove(){
    List.pop()
    console.log(List);
}
remove();

function lastC(str){
return str[str.length -1]
}
console.log(lastC('strawberry'));

function reverse(str){
    return str.split('').reverse().join('')
    }
    console.log(reverse('mango'));
    console.log(reverse(reverse('mango')));
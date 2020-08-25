function diamond(size) {

  if (size <= 1 || size % 2 === 0) return null
  let diamond ='';
  let char = '*'
  let index=1;
  while(index<size){
    diamond+=' '.repeat((size-index)/2)+char.repeat(index)+"\n"
    index+=2;
  }
  index=size;
  var i=0;
  while(index>=1){
    diamond+=' '.repeat(i)+char.repeat(index)+"\n"
    i++;
    index-=2;
  }
  
  return diamond;
}

module.exports = { diamond };

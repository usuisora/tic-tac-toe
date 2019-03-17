var x = 'X';
var o = 'O';
var toggle = true;
var role = x
var field = document.getElementById('field');
var roleEl = document.getElementById('role');
var  handleClick = (e) =>{
    console.log(e.target.id);
    if(e.target.innerHTML == ''){
    e.target.innerHTML = role;
    check()
    toggle = !toggle;
    start()
    }
}

var start = ()=>{
    role =toggle ? x : o;

    roleEl.innerHTML =  role 
}
var check = () =>{
    var cells = document.getElementsByClassName('cell');
    console.log(cells)
    var arr = [];
  

    for(var i = 0 ; i<9;i++){
        arr.push(cells[i].innerHTML)
    }
    var whoWin =  checkState(arr);
    if(whoWin!= ''){
       alert(whoWin + ' player has win');
         clear(cells);
    }
}

 var clear = (els) =>{
     
    for(var i = 0 ; i<9;i++){
        els[i].innerHTML = ''
    }
 }
var checkState=(arr)=>{
     if(arr[0]==arr[1] & arr[1]==arr[2]&& arr[0]!=''){
         console.log(arr[0], 'wins');
         return arr[0]
     }
     else if(arr[3]==arr[4] & arr[4]==arr[5]&& arr[3]!=''){
        console.log(arr[3], 'wins');
        return arr[0]
    }
    else if(arr[6]==arr[7] & arr[7]==arr[8] && arr[6]!=''){
        console.log(arr[6], 'wins');
        return arr[0]
    }
    
      else
    if(arr[0]==arr[3] & arr[3]==arr[6]&& arr[0]!=''){
        console.log(arr[0], 'wins');
        return arr[0]
    }else
    if(arr[1]==arr[4] & arr[4]==arr[7]&& arr[4]!=''){
        console.log(arr[0], 'wins');
        return arr[1]
    }else
    if(arr[2]==arr[5] & arr[5]==arr[8]&& arr[2]!=''){
        console.log(arr[0], 'wins');
        return arr[2]
    }
    
    else
    if(arr[0]==arr[4] & arr[4]==arr[8]&& arr[0]!=''){
        console.log(arr[0], 'wins');
        return arr[0]
    }
    else
    if(arr[2]==arr[4] & arr[4]==arr[6]&& arr[2]!=''){
        console.log(arr[0], 'wins');
        return arr[2]
    }

  


     else{
         console.log('no')
         return ''
     }
}
start()

for(var i = 1;i<10; i++){
    var el= document.createElement('div');
    el.className = 'cell'
    el.id = 'cell'+i;
    el.innerHTML='';
    el.onclick = handleClick;
    
    field.appendChild(el);
    
}




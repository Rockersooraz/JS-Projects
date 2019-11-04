let screen = document.querySelector('.screen');
let butt = document.querySelectorAll('.btn');
let eqlbtn = document.querySelector('.btn-equal');
let clrbtn = document.querySelector('.btn-clear');
let onestep = document.querySelector('.btn-onestep');

for(let i=0; i< butt.length; i++){
    butt[i].addEventListener('click',function(){
       let number = butt[i].getAttribute('data-num'); 
        console.log(number);
        screen.value +=number;
        
    })
}

eqlbtn.addEventListener('click',function(){
    
    if(screen.value==''){
        alert('there is no data')
    }   else {
        let holder =eval(screen.value);
        screen.value = holder;

        }
});

clrbtn.addEventListener('click',function(){
    screen.value='';
})

onestep.addEventListener('click',function(){
    let placeholder =screen.value;  
   let anonym = placeholder.substring(0, placeholder.length - 1);
   screen.value = anonym;
         
 })





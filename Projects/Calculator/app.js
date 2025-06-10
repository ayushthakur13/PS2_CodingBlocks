const screen = document.querySelector('#screen')
const allBtn = document.querySelectorAll('button')

for(let btn of allBtn){
    
    btn.addEventListener('click', (e)=>{
        
        const btnText = e.target.innerText;

        if(btnText === 'C'){
            screen.value=""
        }
        else if(btnText === 'X'){
            screen.value += '*'
        }
        else if(btnText === '='){
            try{
                screen.value = eval(screen.value)
            }
            catch(e){
                screen.value = 'Invalid operation'
            }
        }
        else{
            screen.value += btnText
        }
    })
}

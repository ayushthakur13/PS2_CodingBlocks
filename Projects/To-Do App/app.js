$('#add').click(()=>{
    $('#inp').slideToggle()
})


$('#inp').keypress(function(e){

    const todoText = $(this).val().trim();

    if(todoText === '')
            return; 
        
    if(e.which === 13){
        if($('li').last().attr('class') === 'green'){
            $('#list').append(`<li class="yellow"><img src="delete.png" alt="Delete item"> <span>${todoText}</span></li>`)
        }
        else{
            $('#list').append(`<li class="green"><img src="delete.png" alt="Delete item"> <span>${todoText}</span></li>`)
        }
        $(this).val("")
    }
})


// This will only work li's that were in html, but the li's that are added after by JS will not be targeted
// $('li').click(function(){
//     $(this).toggleClass('completed')
// })

// To solve this, we will another listener - on()
$('ul').on('click','li',function(){
    $(this).toggleClass('completed')
})


$('ul').on('click', 'img', function(e){
    $(this).parent().remove()
    e.stopPropogation(); // we used this to stop delete icon to use function from outside this listener 
    // because icon is in list, so the list function will also be working
})


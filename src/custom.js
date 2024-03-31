setInterval(function(){
    var x = $('.classinit').attr('class');
    if (x === undefined){
    	//$( append script here).addClass('classinit');
        
            $('.carousel-item').prepend('<div class="opaek classinit" />');
    	console.log(x);
    }
    else {
        return;
    }
},10);

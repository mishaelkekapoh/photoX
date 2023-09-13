$(document).ready(function(){
  $(window).scroll(function(){
   let position=$(this).scrollTop();
   console.log(position)
  })
  
  $(window) .scroll(function(){
    let position=$(this).scrollTop();
    if(position>=650){
     $('.camera-img').addClass('fromleft');
     $('.mission-text').addClass('fromright');

    }else{
      $('.camera-img').removeClass('fromleft');
      $('.mission-text').removeClass('fromright');
    }
  });

  $('gallery-list-item').click(function(){
    let value=$(this).attr('data-filter');
    if(value ==='all'){
      $('.filter').show(300);
    }else{
      $('.filter').not('.'+ value).hide(300);
      $('.filter').filter('.' + value).show(300);
    }
  })
})
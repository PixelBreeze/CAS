//
//Ff u steal our code ur an asshole so don't, thx
//Made by PixelBreeze and Zaro38
//
function showCustomStuff() {
 $('.avatars .menu-points .dropdown dd').append('<div class="row" data-value="custom" id="custom"><span>Custom</span></div>');

 $('.avatars .menu-points .dropdown dd .row').on('click', function () {
   if (this.id != 'custom') {
    $('.avatars .menu-points .dropdown dd #custom').removeClass('selected');
    $('.avatars .box .jspContainer .jspPane .grid .cell.custom').remove();
   }
   else {
    $('.avatars .menu-points .dropdown dd .row').removeClass('selected');
    $('.avatars .box .jspContainer .jspPane .grid').html('<div class="cell custom"><div class="top"><div class="avatar"><img/></div></div></div>');
    $('.avatars .menu-points .dropdown dd #custom').addClass('selected');
    $('.avatars .menu-points .dropdown dt span').html('Custom');
   }
  }
 )
};

$('#user-view #user-menu .item').on('click', function () {
 console.log('Menu Item Clicked !');
  if ($(this).attr('data-value') == 'inventory' && $('.avatars .menu-points .dropdown dd #custom')[0] == undefined) {
   console.log('Inventory Menu Clicked !')
   showCustomStuff();
  }
 }
);
null;

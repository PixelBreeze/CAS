//
//Ff u steal our code ur an asshole so don't, thx
//Made by PixelBreeze and Zaro38
//
$('#chat-messages').append('<i style="width:33px;height:30px;border-left:3px solid cyan" class="icon icon-emoji-on"></i><div style="color:cyan;height:25px;margin-left:125px;margin-top:7px;">CAS Activated!</div>');
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

if (typeof CasRunning == 'undefined') {
	$('#user-view #user-menu .item').on('click', function () {
			if ($(this).attr('data-value') == 'inventory' && $('.avatars .menu-points .dropdown dd #custom')[0] == undefined) {
				showCustomStuff();
			}
		}
	);
}

if ($('#user-view #user-menu .item.inventory').hasClass('selected') && typeof CasRunning == 'undefined') {
	showCustomStuff();
}

var CasRunning = true;
null;

//
//Ff u steal our code ur an asshole so don't, thx
//Made by PixelBreeze and Zaro38
//
function showCustomStuff() {
	$('#chat-messages').append('<div id="StartMsg">test<div class="badge-box"><i class="icon icon-soundcloud-favorites"></i></div></div>');
	document.getElementById("StartMsg").style.color = "#6AC639";
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

//
//Ff u steal our code ur an asshole so don't, thx
//Made by PixelBreeze and Zaro38
//
//help?
if ($(this).attr('id') == 'user-rollover') {
showMoreStuff();
}
function showMoreStuff(){
	console.log("Window Opened");
	$("#user-rollover .meta").height($("#user-rollover .meta").height() + 20);
	$("#user-rollover .joined").after("<span class=\"customClass\"> test </span>");
}

function showCustomStuff() {
	$('.avatars .menu-points .dropdown dd').append('<div class="row" data-value="custom" id="custom"><span>Custom</span></div>');
	$('.avatars .menu-points .dropdown dd .row').on('click', function () {
			if (this.id != 'custom') {
				$('.avatars .menu-points .dropdown dd #custom').removeClass('selected');
				$('.avatars .box .jspContainer .jspPane .grid .cell.custom').remove();
			}
			else {
				$('.avatars .menu-points .dropdown dd .row').removeClass('selected');
				$('.avatars .box .jspContainer .jspPane .grid').html('<div class="cell new-custom"><div class="top"><div class="avatar"><img src="http://dl.dropboxusercontent.com/u/67358887/img/plus.png"/></div></div></div>');
				$('.avatars .menu-points .dropdown dd #custom').addClass('selected');
				$('.avatars .menu-points .dropdown dt span').html('Custom');
			}
		}
	)
	$('#user-view #user-menu .item').on('click', function () { //On click change avatar to Admin01 XD
		var usernames = ["Anastasia Nasuhara","JennyMagic","Zaro38"];
		var x = require("ec0fc/a7b8d/ca484/fc845");
		for (var i = 0; i < x.images.length; i++) {
		 if (x.images[i].user.get("username") != usernames) continue;
			 console.log("!!");
    		x.images[i].image.src = "https://cors-anywhere.herokuapp.com/https://cdn.plug.dj/_/static/images/avatars/admin01.8bf47878efbf2a187f0844c7b883f4309b300a43.png";
		 x.refresh();
			}
		}
   	)
};

if (typeof CasRunning == 'undefined') {
	//stylesheet link
	$('head').append('<link rel="stylesheet" type="text/css" href="https://rawgit.com/PixelBreeze/CAS/master/style.css"/>')
	//Startup message
	//Broken $('#chat-messages').append('<div id="StartupBorder"></div><i id="StartupIcon class="icon icon-inventory-white"></i><div id="StartupMessage">CAS Activated!</div>');
	$('#chat-messages').append('<div style="width:300px;height:30px;border-left:3px solid cyan;"</div><i style="width:33px;height:30px;margin-left:5px;" class="icon icon-inventory-white"></i><div style="color:cyan;height:25px;padding-left:125px;padding-top:7px;">CAS Activated!</div>');
	$('#user-view #user-menu .item').on('click', function () {
			if ($(this).attr('data-value') == 'inventory' && $('.avatars .menu-points .dropdown dd #custom')[0] == undefined) {
				showCustomStuff();
			}
		}
	);
}
// If CASRunning = true do else
else { 	$('#chat-messages').append('<div style="width:300px;height:30px;border-left:3px solid red;"</div><i style="width:33px;height:30px;margin-left:5px;" class="icon icon-chat-system"></i><div style="color:red;height:25px;padding-left:60px;padding-top:7px;">CAS Already Running! Refresh To Reload!</div>');
}

if ($('#user-view #user-menu .item.inventory').hasClass('selected') && typeof CasRunning == 'undefined') {
	showCustomStuff();
}

var CasRunning = true;
null;

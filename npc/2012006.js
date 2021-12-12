/*
	名字:	艺斯
	地圖:	天空之城售票处
	描述:	200000100
*/

var status = -1;

var mapid = new Array(200000111,200000121,200000131,200000141,200000151,200000161,200000170);
var platform = new Array("金銀島","玩具城","神木村","武陵","阿裡安特","聖地","埃德爾斯坦");
var flight = new Array("ship","ship","ship","Hak","Geenie","ship","ship");
var menu;
var select;

function action(mode, type, selection) {
	if(mode == 0 && status == 0) {
	cm.dispose();
	return;
	}
	if(mode == 0) {
		cm.sendOk("Please make sure you know where you are going and then go to the platform through me. The ride is on schedule so you better not miss it!");
		cm.dispose();
		return;
		}
	if(mode == 1)
	status++;
	else
	status--;
	if(status == 0) {
		menu = "Orbis Station has a lots of platforms available to choose from. You need to choose the one that'll take you to the destination of your choice. Which platform will you take?";
		for(var i=0; i < platform.length; i++) {
		menu += "\r\n#L"+i+"##bThe platform to the ship that heads to "+platform[i]+"#k#l";
		}
		cm.sendSimple(menu);
		}
	if(status == 1) {
		select = selection;
		cm.sendYesNo("Even if you took the wrong passage you can get back here using the portal, so no worries. Will you move to the #bplatform to the "+flight[select]+" that heads to "+platform[select]+"#k?");
		}
	if(status == 2) {
		cm.warp(mapid[select], 2);
		cm.dispose();
}
}
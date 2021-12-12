/*
	名字:	危险地区快速出租车
	地圖:	金银岛
	描述:
*/

var status = -1;

var map;
var cost;
var location;
var mapname;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
		cm.sendOk("嗯......想想吧。這是出租車公司價值的服務！你永遠不會後悔！");
		cm.dispose();
	return;
	}

	if (status == 0) {
	switch (cm.getMapId()) {
		case 540000000: // CBD
			map = 541020000;
			cost = 30000;
			mapname = "烏魯城";
			break;
		case 240000000: // Leafre
			map = 240030000;
			cost = 55000;
			mapname = "神木村-龍森林路口";
			break;
		case 220000000: // Ludi
			map = 220050300;
			cost = 45000;
			mapname = "時間通道";
			break;
		case 211000000: // El Nath
			map = 211040200;
			cost = 45000;
			mapname = "冰雪峽谷II";
			break;
		case 105000000:
			map = 105030000;
			cost = 45000;
			mapname = "另一扇门";
			break;
		case 105030000:
			map = 105000000;
			cost = 30000;
			mapname = "林中之城";
			break;
			default:
			}
			cm.sendNext("你好！這種子彈出租車將帶你從任何危險區域 #m"+cm.getMapId()+"# 到 #b#m"+map+"##k 再 "+mapname+"! 運輸費用 #b"+cost+" 楓幣#k 可能看起來很貴，但並不多，當你想方便地通過危險區域運輸!");
			}
	if (status == 1)
		cm.sendYesNo("#b你需要支付楓幣#k 傳送到 #b#m"+map+"##k?");
	if (status == 2){
		if (cm.getMeso() < cost) {
		cm.sendOk("你看起來沒啥錢可以支付,很抱歉我們不收乞丐搭車的,滾吧!!!");
		cm.dispose();
	} else {
		cm.gainMeso(-cost);
		cm.warp(map, 0);
		cm.dispose();
}
}
}
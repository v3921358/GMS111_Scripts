/*
	名字:	导游妮妮
	地圖:	射手村
	描述:	1000000000
*/

var status = -1;

var maps = Array(
Array(250000000,2900,290),
Array(800000000,2900,290),
Array(541000000,2900,290),
Array(551000000,2900,290)
);//旅游地图部分
var selectedMap = -1;
var cost = 0;

function action(mode, type, selection) {
	if (mode == -1) {
	cm.dispose();
	} else {
	if ((status <= 2 && mode == 0) || (status == 5 && mode == 1)){
		cm.dispose();
		return;
		}
	if (mode == 1)
	status++;
	else
	status--;
	if (cm.getChar().getMapId() != 250000000 && cm.getChar().getMapId() != 541000000 && cm.getChar().getMapId() != 551000000 && cm.getChar().getMapId() != 800000000) {
	if (status == 0) {
	status = 1;
		if (cm.getJob() == 0) {
			cm.sendNext("為了從繁忙的日常中解脫，去享受一趟旅遊怎麼樣？不僅可以體驗新穎的異國文化，還能學到不少東西的機會！我們冒險島旅遊公司為您準備了，豐富有趣的世界旅遊套餐。誰說環遊世界很貴？請放一萬個心，我們的#b冒險島世界旅遊套餐#k只需要#b2900金幣#k就可以享受全程。");
		} else {
			cm.sendNext("為了從繁忙的日常中解脫，去享受一趟旅遊怎麼樣？不僅可以體驗新穎的異國文化，還能學到不少東西的機會！我們冒險島旅遊公司為您準備了，豐富有趣的世界旅遊套餐。誰說環遊世界很貴？請放一萬個心，我們的#b冒險島世界旅遊套餐#k只需要#b2900金幣#k就可以享受全程。");
			}
			}
	if (status == 1)
		cm.sendSimple("在各旅遊地我都會為大家提供滿意熱誠的服務。那麼請準備好，請選擇你的旅遊路線，新手可以9折優惠。\r\n#b#L0#查看旅遊線路.#k#l");
	if (status == 2) {
		var selStr = "在各旅遊地我都會為大家提供滿意熱誠的服務。那麼請準備好，請選擇你的旅遊路線，新手可以9折優惠。#b";
		if (cm.getJob() == 0) {
			for (var i = 0; i < maps.length; i++) {
			selStr += "\r\n#L" + i + "##m" + maps[i][0] + "# ("+maps[i][2]+"金幣)#l";
			}
		}else{
			for (var i = 0; i < maps.length; i++) {
			selStr += "\r\n#L" + i + "##m" + maps[i][0] + "# ("+maps[i][1]+"金幣)#l";
			}
			}
			cm.sendSimple(selStr);
			}
	if (status == 3) {
		selectedMap = selection;
		if (cm.getJob() == 0) {
			cost = maps[selectedMap][2];
		} else {
			cost = maps[selectedMap][1];
			}
			cm.sendYesNo("已經决定好，確定要去 #b#m" + maps[selectedMap][0] + "##k嗎？那麼你將要付給我#b" + cost +"金幣#k. 你真的想去？");
			}
	if (status == 4) {
		if (cm.getMeso() < cost) {
			cm.sendPrev("天啦，你錢不够！這實在是太恐怖了！我不能帶你去。");
		} else {
			cm.gainMeso(-cost);
			cm.saveLocation("WORLDTOUR");
			cm.warp(maps[selectedMap][0], 0);
			cm.dispose();
			}
			}
	} else if (cm.getChar().getMapId() == 250000000 || cm.getChar().getMapId() == 541000000 || cm.getChar().getMapId() == 551000000 || cm.getChar().getMapId() == 800000000) {
	if (status == 0)
		cm.sendSimple ("世界旅遊怎麼樣？很有趣吧。\r\n#L0##b返回：#m" + cm.getSavedLocation("WORLDTOUR") + "# #k#l\r\n#L1##b繼續觀光#k#l");
	if (status == 1) {
		if (selection == 0)
			cm.sendOk("好的，希望你能滿意本次旅行，如果需要到別的地方旅遊請記得告訴我。");
		if (selection == 1) {
			cm.sendOk("不想回去就再到處看看吧，等你想回去的時候再來告訴我。");
			cm.dispose();
			}
			}
	if (status == 2) {
			var map = cm.getSavedLocation("WORLDTOUR");
			if (map == -1) {
				map = 100000000;
				}
				cm.warp(map, 0);
				cm.dispose();
}
}
}
}
/*
	名字:	查恩
	地圖:	黄金寺院
	描述:	950100000
*/

function start() {
	var chat = "歡迎來到地精廟入口，你想去哪裡?You need a Golden Temple Ticket to enter. All these monsters drop Sunbursts, required to get into the boss Ravana\r\n#b";
	chat += "\r\n#L0#Goblin Temple 1 - Blue Goblin(2200 HP/170 EXP)";
	chat += "\r\n#L1#Goblin Temple 2 - Red Goblin(4150 HP/336 EXP)";
	chat += "\r\n#L2#Goblin Temple 3 - Stone Goblin(9300 HP/501 EXP)";
	cm.sendSimple(chat);
}

function action(mode, type, selection) {
	if (mode == 1) {
		if (!cm.haveItem(4001431) && !cm.haveItem(4001432)) {
			cm.sendOk("你需要一張#i4001431:##b#t4001431##k才能进入，請到導遊處購買。");
		} else if (cm.getMap(cm.getMapId() + 500 + (selection * 100)).getCharactersSize() > 0) {
			cm.sendOk("There is already someone in the map.");
		} else {
			if (cm.haveItem(4001431) && !cm.haveItem(4001432)) {
				cm.gainItem(4001431, -1);
				}
				cm.warp(cm.getMapId() + 500 + (selection * 100),0);
				}
			cm.dispose();
}
}
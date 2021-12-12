/*
	名字:	可疑的洞
	地圖:	危险的捉迷藏
	描述:	931000001
*/

function start() {
	cm.sendYesNo("#b（看見可疑的洞口，不知道潘是不是跑進去裡面了。 要進去看看嗎？）#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 exp");
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("#b（怎麼可能…再怎麼說潘也不會躲到裡面去的…是吧？）#k");
	} else {
		cm.gainExp(35);
		cm.warp(931000010, 0);
		}
	cm.dispose();
}
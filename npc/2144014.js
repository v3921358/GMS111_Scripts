/*
	名字:	双弩精灵
	地圖:	燃烧的废墟
	描述:	272000310
*/

function start() {
	if (cm.isQuestActive(31174) && cm.haveItem(4033082)) {
		cm.sendOk("#b(突然開始發光，雙弩精靈的表情好像變好了。 這樣就行了嗎？)#k");
	} else {
		cm.sendOk("#受傷中的雙弩精靈，讓它好好恢復！#k");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4033082, -1);
		cm.forceStartQuest(31186,"1");
		}
	cm.dispose();
}

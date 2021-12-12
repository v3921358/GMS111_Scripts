/*
	名字:	罗赛伦的桌子
	地圖:	研究所B-1 地区
	描述:	261020200
*/

function start() {
	if (cm.isQuestActive(3314) && !cm.haveItem(2022198)) {
		cm.sendOk("#b带着#v2022198:#去找#p2111009#");
	} else {
		cm.sendOk("只是一個普通的书桌。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(2022198, 1);
		}
	cm.dispose();
}
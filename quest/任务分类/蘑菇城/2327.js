/*
	名字:	詹姆斯的行踪(3)
	地圖:	中央城塔
	描述:	106021201
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("嘿！謝謝你給我帶來#b#t4001317##k。");
	if (status == 1)
		qm.sendPrev("我打算穿著#b#t4001317##k從這裡逃跑。希望以後有機會還能再見。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1900 exp");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(1900);
		qm.dispose();
}
}


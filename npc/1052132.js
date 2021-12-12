/*
	名字:	名药店抽屉4
	地圖:	废都药店
	描述:	103000002
*/

function start() {
	if (cm.getQuestStatus(2852) == 1 && !cm.haveItem(4033036)) {
		cm.sendOk("悄悄的拿走箱子里的#v4033036:#。");
	} else {
		cm.sendOk("未经允许不能随便打开。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.gainItem(4033036, 1);
	cm.dispose();
}

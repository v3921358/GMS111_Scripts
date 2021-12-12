/*
	名字:	收鸡蛋
	地圖:	前院
	描述:	100030102
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(22007) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(22007) == 1) {
		qm.sendYesNo("哦，#b#v4032451:##t4032451##k拿來了嗎？ 快把蛋給我吧。 我來幫你把它孵化。");
		}
		}
	if (status == 1)
		qm.sendPrev("來，拿著。 不知道這到底可以用來幹什麼………\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 360 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/9/0" , 1);
		qm.gainItem(4032451, -1);
		qm.gainExp(360);
		qm.dispose();
}
}

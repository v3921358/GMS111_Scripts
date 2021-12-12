/*
	名字:	通往封印庭院的路
	地圖:	老婆婆之屋
	描述:	200050001
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
	if (qm.getQuestStatus(21739) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(21739) == 1) {
		qm.sendNext("#b#m920030000##k的入侵者已經擊退了？");
		}
		}
	if (status == 1)
		qm.sendNextPrevS("#b（講述#b#m920030000##k發生的事情。）");
	if (status == 2)
		qm.sendNextPrev("黑翼之翼臥底？他得到了#b天空之城的封印石#k？哦！！！！不！！！！太可怕了！");
	if (status == 3)
		qm.sendPrev("我們需要儘快製定對策，請把#b#m200000000##k的情况如實的向#b#p1002104##k彙報。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainExp(12000);
		qm.dispose();
}
}
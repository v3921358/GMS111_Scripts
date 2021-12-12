/*
	名字:	变异蘑菇的血
	地圖:	北部岩山
	描述:	102020400
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(24097) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24097) == 1) {
		qm.sendNext("这就是变异蘑菇的血……");
		}
		}
	if (status == 1)
		qm.sendPrev("……什么？芳博士让我给你东西？……没什么好给你的啊？我来给你提高一点人气度吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 700 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(700);
		qm.dispose();
}
}
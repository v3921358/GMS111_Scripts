/*
	名字:	阿俊
	地圖:	危险的捉迷藏
	描述:	931000001
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (cm.getInfoQuest(23999).indexOf("exp1=1") != -1) {
		cm.sendOk("找到烏裏卡和潘了嗎？ 由其是潘特別會躲，有仔細的找嗎？");
		cm.dispose();
		return;
		}
	if (status == 0)
		cm.sendNext("啊！ 被發現了！");
	if (status == 1)
		cm.sendNextPrev("嗚…本來想躲到礦車裡面，但是頭進不去…");
	if (status == 2)
		cm.sendPrev("找到烏裏卡和潘了嗎？ 由其是潘特別會躲，有仔細的找嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5 exp");
	if (status == 3){
		cm.gainExp(5);
		if (cm.getInfoQuest(23999).equals("")) {
			cm.updateInfoQuest(23999, "exp1=1");
		} else {
			cm.updateInfoQuest(23999, cm.getInfoQuest(23999) + ";exp1=1");
			}
			cm.dispose();
}
}
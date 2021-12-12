/*
	名字:	[十字猎人]新的裂缝
	地圖:	降魔十字旅团据点
	描述:	931050500
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(1639) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1639) == 1) {
		qm.sendNext("拼圖碎片好像逐漸拼出來了。 在時間神殿中出現的阿卡伊勒，還有時間裂縫……在同一時期出現的時空門……這一切之間好像存在著某種聯系。 阿卡伊勒的目的到底是什麼呢……我有一種不祥的預感。");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("你現在要和我一起去#b#m270000000##k探察一下哪裡的情况嗎？");
	if (status == 2)
		qm.sendPrev("那我們現在出發，查看裂縫的情况吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 50000 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.warp(270000000,2);
		qm.gainExp(50000);
		qm.dispose();
}
}
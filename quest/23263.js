/*
	名字:	虽然可爱不是罪，但是……
	地圖:	秘密广场
	描述:	310010000
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
	if (qm.getQuestStatus(23263) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23263) == 1) {
		qm.sendSimple("這個！ 知道你一定可以找到！\r\n#L0##b我並沒有認真去找，只是不小心找到了而已。#l\n#k");
		}
		}
	if (status == 1)
		qm.sendSimple("補館怎樣謝謝. 這樣應該就可以找回原來的樣貌了. 現在只剩下摘下這個...... 怎怎怎麼會發生這種事情!!!\r\n#L0##b!? 喵怪仙人, 什麼事情呢?#l\n#k");
	if (status == 2)
		qm.sendSimple("現在這樣子是, 忘了無法用貓咪的腳打出結! 怎, 怎麼辦? #h0#! 不能再幫我一次嗎?\r\n#L0##b...... (喵怪仙人用懇求的眼神注視著. 沒有辦法了只能由我打出結了.)#l\n#k");
	if (status == 3)
		qm.sendPrev("非常感謝, #h0#!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 30000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainItem(4032971, -1);
		qm.gainExp(30000);
		qm.dispose();
}
}

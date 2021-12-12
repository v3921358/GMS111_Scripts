/*
	名字:	飞上蓝天
	地圖:	天渡
	描述:	240080000
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
	if (qm.getQuestStatus(3759) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3759) == 1) {
		qm.sendYesNo("準備好了嗎？ 準備好了的話，我就馬上幫你配製秘藥，然後灑在你的身上。 那樣你就能飛了。");
		}
		}
	if (status == 1)
		qm.sendPrev("好了，現在你能在天上飛了。 有一點需要注意，飛翔技能只能在以<天渡>為首的天空地區使用。 你可千萬別忘了。 還有在飛翔狀態下，會持續消耗魔力。 請一定要注意控制好魔力的量。 祝你好運。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   #s1026:#  #q1026# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 11000 exp");
	if (status == 2){
		if (qm.getJob() >= 3200 && qm.getJob() <= 3600 ) {
			qm.teachSkill(30001026, 1, 0); // 反抗者
		} else if (qm.getJob() >= 3001 && qm.getJob() <= 3112 ) {
			qm.teachSkill(30011026, 1, 0); // 恶魔
		} else if (qm.getJob() == 2001 || qm.getJob() >= 2200) {
			qm.teachSkill(20011026, 1, 0); // 龙神
		} else if (qm.getJob() >= 2000) {
			qm.teachSkill(20001026, 1, 0); // 战神
		} else if (qm.getJob() >= 1000) {
			qm.teachSkill(10001026, 1, 0); // 骑士团
		} else {
			qm.teachSkill(1026, 1, 0); // Maker
		}
		qm.forceCompleteQuest();
		qm.gainExp(11000);
		qm.dispose();
}
}
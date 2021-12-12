/*
	名字:	炼金术说不定可以
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
	if (qm.getQuestStatus(23264) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23264) == 1) {
		qm.sendNext("#b#h0##k你找到了#v4000419:#～！ 我知道你一定找到。");
		}
		}
	if (status == 1)
		qm.sendPrev("好現在把這個和這個混合。 這樣那樣搖搖再混合。 可以了。 變成#b喜歡的外貌#k的藥水！ #h0#!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 40000 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4000419, -1);
		qm.gainExp(40000);
		//qm.warp(931050211, 0);
		qm.dispose();
}
}

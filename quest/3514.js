/*
	名字:	出售情感的魔法术士
	地圖:	魔法术士的房间
	描述:	270020211
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
	if (qm.getQuestStatus(3514) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3514) == 1) {
		qm.sendOk("什麼？…… 只要讓體力噌噌下降不就行了？ 呵呵，誰說的？ 一派胡言……那怎麼可能？ 哈哈哈哈！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/11/0# 意志 50\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 916000 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainExp(916000);
		qm.dispose();
}
}
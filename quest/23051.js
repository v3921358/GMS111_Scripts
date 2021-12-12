/*
	名字:	黑色之翼的新武器
	地圖:	陷阱！实验室监狱
	描述:	931000312
*/

var status = -1;

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
	if (qm.getQuestStatus(23051) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23051) == 1) {
		qm.sendNext("黑色之翼的新武器……成功地破壞掉了嗎？ 我真不敢相信自己的眼睛。 你改變了未來！ 真的，真的很了不起！ 你能加入反抗者，真是太好了！ 真的！ 真的……太好了！");
		}
		}
	if (status == 1)
		qm.sendPrevS("啊……我一時激動，都忘了要緊事。#p2154009#知道新武器被毀後，一定會率領手下攻來， 在此之前趕快逃跑吧。 我這就使用地下總部#v4032740:##t4032740#。 一……二……三！",3);
	if (status == 2){
		qm.forceCompleteQuest();
		qm.warp(310010000, 0);
		qm.dispose();
}
}
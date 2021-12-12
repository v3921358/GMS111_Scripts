/*
	名字:	真正的冒险家
	地圖:	祭司之林
	描述:	240010501
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
	if (qm.getQuestStatus(1457) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1457) == 1) {
		qm.sendAcceptDecline("你證明了自己擁有成為英雄的貭素。 現在沒有必要繼續證明了……你願意成為真正的冒險家嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142110:#   #t1142110#");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(qm.getJob() + 1);
		qm.gainItem(4031517,-1);
		qm.gainItem(4031518,-1);
		if (qm.getJob() == 434) {
		qm.gainItem(1142110,1);
		} else {
		qm.gainItem(1142110,1);
		}
		qm.sendNext("從一名自由的冒險家開始，現在你已經成為了力量、善良和勇氣兼備的真正的冒險家。");
		}
	if (status == 2)
		qm.sendNext("如果同時具備這些特質的人不是英雄的話，那誰能被稱為英雄呢。");
	if (status == 3)
		qm.sendPrev("英雄不是天生的，而是通過努力達成的……希望你成為真正的英雄，帶領冒險島世界走上正確的方向。");
	if (status == 4){
		qm.dispose();
}
}
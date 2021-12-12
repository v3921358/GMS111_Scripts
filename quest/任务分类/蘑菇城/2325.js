/*
	名字:	詹姆斯的行踪(1)
	地圖:	蘑菇森林小道
	描述:	106020000
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
	if (qm.getQuestStatus(2325) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(2325) == 1) {
		qm.sendNext("我…我怕…請一定要幫助我呀…");
		}
		}
	if (status == 1)
		qm.sendPrev("什麼？你是哥哥派來的麼？啊啊…我有救了，真是太感謝了。");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.dispose();
}
}

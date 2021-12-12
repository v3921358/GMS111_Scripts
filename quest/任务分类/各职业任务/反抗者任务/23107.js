/*
	名字:	第一个任务
	地圖:	反抗者本部
	描述:	310010000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(23107) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23107) == 1) {
		qm.sendNext("歡迎你，#h0#。 我是負責反抗者的對外任務的#b#p2151003##k。 在村子之外的地方見面，感覺好像有點彆扭。");
		}
		}
	if (status == 1)
		qm.sendNextPrev("其實我應該是飛俠教官，但你也知道，反抗者是沒法培養出飛俠的，所以我就負責了這項工作。");
	if (status == 2)
		qm.sendAcceptDecline("總之我負責的是對外任務，今後你和我見面的次數可能要比你的轉職教官#b#p2151001##k還要多。 在黑色之翼被趕出這個地方之前，執行任務的時候一定要做好萬全的準備。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 200 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.forceStartQuest(23129, "1");
		qm.gainExp(200);
		qm.dispose();
}
}

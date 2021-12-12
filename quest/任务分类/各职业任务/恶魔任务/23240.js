/*
	名字:	第一个任务
	地圖:	训练室入口
	描述:	310010010
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
	if (qm.getQuestStatus(23240) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(23240) == 1) {
		qm.sendNext("#h0#，你来得正好。我负责管理反抗者的任务。\r\n既然你成为了反抗者，我们以后会经常见面的。");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("好了，要我把第一个任务告诉你吗？你已经成为了反抗者训练生，我不会给你太难的任务的。准备好了的话，请跟我说。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 200 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.forceStartQuest(23129, "1");
		qm.gainExp(200);
		qm.dispose();
}
}

/*
	名字:	狂战士
	地圖:	长老公馆
	描述:	211000001
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
	if (qm.getQuestStatus(1433) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(1433) == 1) {
		qm.sendNext("呵呵，和#b其他次元的武術教練#k戰鬥，感覺如何？ 那是#b神聖的石頭#k擁有的驚人力量所展現的神秘幻象……武術教練同意將你引向更强的戰士之路，所以才會現身。");
		}
		}
	if (status == 1)
		qm.sendAcceptDecline("通過肉搏戰的考驗，你已經獲得了成為真正戰士的資格。 現在剩下的就是轉職成為真正的戰士#b狂戰士#k……嗯，你已經準備好接受全新的力量了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142109:#   #t1142109#");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(131);
		qm.gainItem(4031059,-1);
		qm.gainItem(1142109,1);
		qm.sendOk("現在你已經成為了一名#b狂戰士#k。作為#b槍和矛#k的專家、作為真正的戰士，從現在起你可以盡情地展示你的能力了。");
		}
	if (status == 3){
		qm.dispose();
}
}
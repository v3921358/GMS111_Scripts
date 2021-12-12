/*
	名字:	女皇的骑士团
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("#h0#。。。 首先，感謝您的出色工作。 如果不是你，我。。。 我將無法擺脫黑巫婆的詛咒。 非常感謝你。");
	if (status == 1)
		qm.sendNextPrev("如果沒有其他事情的話，這一連串的事件讓一件事變得非常清楚，你已經投入了無數個小時的努力來提升自己，為天鹅座騎士做出貢獻。");
	if (status == 2)
		qm.sendAcceptDecline("為了慶祝你的辛勤工作和成就。。。 我想給你一個新的頭銜，並再次祝福你。 你會接受這個嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#v1142069#   #t1142069#");
	if (status == 3){
		if (!qm.canHold(1142069, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.changeJob(qm.getJob() + 1);
		qm.gainItem(1142069, 1);
		qm.sendOk("為了勇敢地與黑法師戰鬥，我將從現在起任命你為天鹅座騎士團的新首席騎士。 請明智地使用您的權力和權威，幫助保護楓葉世界的公民。");
		}
	if (status == 4){
		qm.dispose();
}
}
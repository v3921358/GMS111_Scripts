/*
	名字:	艾瑞克的密信
	地圖:	长老公馆
	描述:	211000001
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(2374) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(2374) == 1) {
		qm.sendNext("我一直都在等待你回来，事情办得怎么样了？");
		}
		}
	if (status == 1)
		qm.sendNextPrev("#v4032619:#Arec的信嗎？ 让我来看看。");
	if (status == 2)
		qm.sendNextPrev("我們終於得到了Arec的官方認可。 這對我們來說是一個重要的時刻。 這也是你經歷改變的時候了。");
	if (status == 3)
		qm.sendAcceptDecline("现在你是否愿意再次晋升到新得職位上？");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.changeJob(432);
		qm.gainItem(4032619, -1);
		qm.gainItem(1132021, 1);
		qm.sendOk("以后再當你有所提升時，你可以去見Arec，從而可以獲得职业得晋昇。 希望你能为飞花园開闢一個新的未來。");
		}
	if (status == 5){
		qm.dispose();
}
}
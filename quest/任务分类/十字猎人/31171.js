/*
	名字:	摩诃的委托
	地圖:	燃烧的神木村3
	描述:	272000300
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
		qm.sendNext("我想了一下，如果能把主人帶到裡恩島上，在那裡由純爭寒氣構成的冰川中封印起來，也許可以封锁詛咒。 至少可以讓詛咒不再進一步惡化…");
	if (status == 1)
		qm.sendNextPrev("問題是現在我的力量變得很弱，沒辦法移動到那裡去。 如果不是為了保護主人，和這裡剩下的怪物戰鬥的話……那時為了保護主人，我只能把自己的力裏全部釋放出來。");
	if (status == 2)
		qm.sendAcceptDecline("在附近的怪物身上，應該可以找到含有我的力量的矛碎片。 你去消滅怪物，幫我蒐集#b50個#v4033080:##k。 那樣的話，我就應該可以獲得將主人帶到裡恩島上去的力量。");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 6) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("碎裂的矛碎片#v4033080:#全部蒐集到了嗎？");
	if (status == 1)
		qm.sendNextPrevS("#b給，這樣就夠了嗎？");
	if (status == 2)
		qm.sendNextPrev("嗯，用這些來恢復力量的話……因該足够了。");
	if (status == 3)
		qm.sendNextPrev("呼，雖然沒有全部恢復，但總算恢復了一些力裏。 現在我要帶著主人到裡恩島去了。 有時間的話，我想見見#b#p1033201##k……你去幫我向它問好。");
	if (status == 4)
		qm.sendNextPrevS("#b#p1033201##k？");
	if (status == 5)
		qm.sendNextPrev("它是瑪瑙龍之王。 通過右邊的傳送口，應該就能見到它。 它的體型很大，別被嚇著了。 熟悉了之後你就會發現，它其實是個很慈祥的人。");
	if (status == 6)
		qm.sendAcceptDecline("多虧了你，主人終於得救了。 別忘了代我向#b#p1033201##k問好。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 430000 exp");
	if (status == 7){
		qm.forceCompleteQuest();
		qm.removeAll(4033080);
		qm.gainExp(430000);
		qm.dispose();
}
}
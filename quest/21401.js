/*
	名字:	让暴走的战斧沉睡
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("…為什麼變成這樣？。不太想說。還是瞞不了主人吧？");
	if (status == 1)
		qm.sendNextPrev("…你被冰裡捆著過數百年的時候我也在冰裡，那麼漫長的時間沒有主人的日子對我來說太…所以我的心裡有了陰影。");
	if (status == 2)
		qm.sendNextPrev("但是你甦醒後陰影完全消失了。覺得主人回來後就沒什麼可惜的就這樣什麼都擺脫了，但覺得都是錯覺。");
	if (status == 3)
		qm.sendAcceptDecline("拜託狂狼勇士…阻止我。可以阻止我暴走的只有你。現在我無法抑制我自己了！想辦法打倒我。");
	if (status == 4){
		qm.forceStartQuest();
		qm.warp(914020000,0);
		qm.spawnMob(9001014,0,0);
		qm.dispose();
}
}

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
	if (status == 0)
		qm.sendNext("謝謝你，主人。 多虧了你，才封锁了我的暴走。 真是萬幸……！ 以主人的實力，這點小事當然不在話下了！");
	if (status == 1)
		qm.sendPrev("現在來看，你的等級已經很高了。 既然能够打倒暴走狀態下的我……那麼喚醒你過去全部的力量也應該是可以的了。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142132#  #t1142132# ");
	if (status == 2){
		if(!qm.canHold(1142132, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(qm.getJob() + 1);
		qm.gainItem(1142132,1);
		qm.dispose();
}
}
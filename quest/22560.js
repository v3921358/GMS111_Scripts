/*
	名字:	秘密团体加入条件1
	地圖:	遗弃洞穴
	描述:	910050300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("好久不見，恩人！ 主人的傷勢已經好了，正在忙著尋找落腳點，一直沒有跟我聯系。 不久前，他終於和我聯繫了！");
	if (status == 1)
		qm.sendNextPrev("我跟主人說了你的事情，他說如果你是好人的話，隨時歡迎加入他的團體！ 但有個條件。 要想加入團體，好像要通過最基本的考試。");
	if (status == 2)
		qm.sendNextPrev("像恩人這麼强的人，我想應該很容易就能通過那種考試。 需要我說明一下考試的內容嗎？");
	if (status == 3)
		qm.sendNextPrev("考驗非常簡單！ 你只要前往#b#m101000000#的#m101030100#k，消滅#r150只#o3230100##k就行了。 主人想在那裡建造據點，現時正因#o3230100#的威脅而發愁。");
	if (status == 4)
		qm.sendNextPrev("當然能在其他地方建立根據地的話就更好了……但是不久前#b他想在有個叫什麼寺院的地方建立根據地，結果那裡的怪物太强，發生了暴亂#k。 所以這次他很慎重。");
	if (status == 5)
		qm.sendAcceptDecline("恩人！！請你一定要幫助我們，謝謝了！");
	if (status == 6){
		qm.forceStartQuest();
		qm.dispose();
}
}

/*
	名字:	牧师之路
	地圖:	魔法密林图书馆
	描述:	101000003
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
		qm.sendNext("你想選擇牧師之路嗎？ 牧師和其他系列的魔法師相比稍微有點特別。 擁有很多#b恢復#k和#b輔助#k系列的技能。");
	if (status == 1)
		qm.sendNextPrev("當然，最根本的還是魔法師。 可以吸收敵人魔量的#b魔力吸收#k，可發揮更强大魔法的基本技能#b咒語精通#k，#b智慧激發#k等，它都可以使用。 而且還可以通過#b神之保護#k技能來减少自己所受的傷害。");
	if (status == 2)
		qm.sendNextPrev("牧師最具代表性的技能是恢復魔法#b群體治癒#k。 那是可以使包括自己在內周圍所有隊員的血量恢復的驚人魔法。 不僅如此，還可以通過#b祝福#k提高隊員的能力值，在組隊的時候會很受歡迎。");
	if (status == 3)
		qm.sendNextPrev("另外還有攻擊魔法呢。 如可以用#b聖箭術#k攻擊多數的敵人。 這個魔法最大的特點就是可以給惡魔系或者不死系的怪物施加極大傷害，並且還可以恢復隊員的體力。");
	if (status == 4)
		qm.sendNextPrev("說明這樣就夠了吧……？ 魔法要直接使用才會體會到其中的樂趣。 你想選擇牧師之路嗎？ 選擇的話，我就來考考你有沒有成為牧師的資格。");
	if (status == 5)
		qm.sendAcceptDecline("考試很簡單……只要在準備好的考場上消滅怪物，蒐集#r30個含有黑暗力量的珠子#k就行……你想馬上參加考試嗎？ 接受的話，我就把你送到考試之林去。");
	if (status == 6){
		qm.forceStartQuest();
		qm.warp(910140000,0);
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
		qm.sendYesNo("#t4031013#全部蒐集到啦……我知道你一定很輕鬆就能通過。 好的，終於……我來讓你變成牧師。 準備好了嗎……？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(230);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的……從現在開始，你就是#b牧師#k了……牧師是用一顆虔誠的心，為萬物注入生命力量的人……希望你能堅定自己的信仰………");
		}
	if (status == 2)
		qm.sendOk("對於牧師來說，信仰非常重要。 相信神，追隨神，向世人展示他們的寬宏……只要努力，就可以獲得更强的神聖力了…..");
	if (status == 3){
		qm.dispose();
}
}
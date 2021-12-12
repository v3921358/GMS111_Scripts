/*
	名字:	修炼骑士的终结
	地圖:	圣地
	描述:	130000000
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendAcceptDecline("#b#h0##k？ 一轉眼你已經等級這麼高了，都快認不出來了。 任務好像也完成了不少……我覺得你完全有資格參加#b騎士等級考試#k了。 怎麼樣？ 現在你差不多該從修煉騎士陞級為正式騎士了。 你說呢？");
	if (status == 1)
		qm.sendPrev("如果你想參加騎士等級考試，可以隨時來聖地。 各個騎士團長會對你的能力進行測試，如果合格，就會任命你為正式騎士。 再見……");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
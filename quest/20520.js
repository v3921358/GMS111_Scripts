/*
	名字:	骑士的品味
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
		qm.sendNext("你已經到了50級了，卻還是那麼碌碌無為嗎？ 這麼高的等級還用兩條腿走路，和騎士的品味也太不相符了吧？");
	if (status == 1)
		qm.sendNextPrev("你的品味如何暫且不管，這樣下去的話，讓女皇的名譽往哪兒擱啊？ 所以我特地告訴你一個新的資訊。 那就是#b怪物騎寵#k相關的資訊。 你應該會有興趣吧？");
	if (status == 2)
		qm.sendAcceptDecline("冒險騎士團的騎士們有專用的特殊騎寵。 如果你對騎寵感興趣的話，請到#b#m130000000##k來。 我會告訴你相關的資訊。");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}
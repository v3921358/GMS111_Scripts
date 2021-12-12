/*
	名字:	邪摩斯的觉醒
	地圖:	邪摩斯的房间
	描述:	211000002
*/


var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("喂，你是#b#h0##k吧？ 呵呵呵，一定想知道我為什麼叫你來吧？ 我叫#b邪摩斯#k。 雖然我現在被囚禁在這裡，但是我有件重要的事情想拜託你，所以才會叫你過來。 對於我，你現在一定有很多疑問吧？ 呵呵呵。");
	if (status == 1)
		qm.sendAcceptDecline("你也看到了，我不是人類，而是侏儒怪。 是的，大家都這麼叫我。 但是我到底是誰？ 為什麼會被關在這裡？ 為什麼我記不起小時候的事情？ 真讓人鬱悶……你得幫幫我。 你能幫幫我這個不幸的人嗎？");
	if (status == 2)
		qm.sendPrev("請馬上到我這裡來。 不知你知不知道，我就在#b冰峰雪域長老公館地下#k………..");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}
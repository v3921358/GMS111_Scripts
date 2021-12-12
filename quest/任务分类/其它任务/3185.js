/*
	名字:	斯卡德的真相
	地圖:	冰峰雪域
	描述:	211000000
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
		qm.sendAcceptDecline("謝謝你上次接受我的請求，這次也希望你能繼續幫我。");
	if (status == 1)
		qm.sendNextPrevS("#b你的身體那麼不好嗎？");
	if (status == 2)
		qm.sendNextPrev("好吧，我就有話直說了。 事實上，身為獵人，這麼說讓我覺得很羞耻……");
	if (status == 3)
		qm.sendNextPrev("幾天前。 我像平常一樣，在寒冰平原上打獵野狼。 但是突然刮起一陣風，#b#o6090001##k出現在了我的面前。");
	if (status == 4)
		qm.sendNextPrevS("#b雪山魔女？ 那是什麼啊？");
	if (status == 5)
		qm.sendNextPrev("雪山魔女是冰峰雪域傳說中的怪物，據說她的身體是由冰雪構成的。 我還以為只是傳說而已……沒想到真的會在這裡見到。 剛開始見到的時候，我憑著獵人的勇氣把她擊敗了。 但是在後來去打獵的時候，她又完好無損地出現在了我的面前。 我當時非常害怕，所以就藉口身體不好，不願意出去打獵了。");
	if (status == 6)
		qm.sendNextPrev("但是我不能一直這樣下去。 我不能一直拜託別人幫忙……我想阿爾卡斯特也許有什麼解決辦法。 你能幫我去跟#b阿爾卡斯特#k說說嗎？ 我自己不太方便過去……周圍的人都看著呢……我想這個要求應該不難吧。");
	if (status == 7)
		qm.sendPrev("阿爾卡斯特就在#b冰峰雪域#k這地方的某處。 拜託了，請你不要向其他人宣揚此事。 獵人居然會因為害怕怪物而不敢出去狩獵……真是丟死人了。");
	if (status == 8){
		qm.forceStartQuest();
		qm.dispose();
}
}
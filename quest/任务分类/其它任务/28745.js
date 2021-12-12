/*
	名字:	灾难市长
	地圖:	新叶城
	描述:	600000000
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
		qm.sendNext("出大事了！#b#m600000000##k剛發生了一場强震！ 建築變成廢墟，平地變成溝壑。 我都快認不出這座我一手創造的都市了！ 我倒是想雇個地震學家研究下是什麼情况，但預算實在是不够。 你好像對這方面頗有研究。 能幫我這個忙嗎？");
	if (status == 1)
		qm.sendAcceptDecline("我就知道你會答應我！ 去#b#m600000000##k跟我碰頭吧。 如果你不方便，我可以派我的特製市長專用隱形豪華轎車來接你，還不收你錢。 如何？");
	if (status == 2)
		qm.sendPrev("好！ 我就知道你不會拒絕。 對了，你是看不見轎車的，原地等著就是。");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(600000000, 8);
		qm.dispose();
}
}
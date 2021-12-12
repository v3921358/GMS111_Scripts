/*
	名字:	通往过去的路
	地圖:	特鲁的情报商店
	描述:	104000004
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendNext("噢，英雄大人，等級升了很多嘛。做這次是事情沒什麼難的了。什麼事情？");
	if (status == 1)
		qm.sendNextPrev("英雄大人努力修煉的時候我和#p1201000#調查了關於英雄大人的過去和封印石。可是前不久有個很多有趣的情報。你知不知道孩子們的玩具村莊#m220000000#？");
	if (status == 2)
		qm.sendNextPrev("在#m220000000#裡有個管理時間的兩個鐘塔，各管理時間，最總把#m220000000#時間停止。因為孩子們長大了玩具就沒用了，所以會把時間停止。");
	if (status == 3)
		qm.sendNextPrev("可是兩個鐘塔之中好像有一個壞了，因此在#b#m220000000#理管理的時間裡出現了漏洞，可以回到過去#k…有趣的是從這裡開始。");
	if (status == 4)
		qm.sendNextPrev("綜合了去過過去的人們的情報結果，#p1201000#下定了那個時代跟英雄大人生活得時代相似。服飾，物品，還有情況…那麼去哪裡的話是不是會得到封印師的有關情報呢？對吧？");
	if (status == 5)
		qm.sendNextPrev("其實封印石是什麼無所謂，比那個更重要的是，去哪裡不一定能碰到認識英雄大人的人。");
	if (status == 6)
		qm.sendAcceptDecline("壞的鐘塔是#b右邊的鐘塔#k…就是，#b赫爾奧斯塔#k。在#b粉紅兔子頭模樣的建築#k裡有管理時間的裝置，就是那個，可以通過那個可以去過去。");
	if (status == 7){
		qm.forceStartQuest();
		qm.dispose();
}
}
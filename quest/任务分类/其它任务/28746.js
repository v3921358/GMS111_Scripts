/*
	名字:	地震从何而来？
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
		qm.sendNext("首先，我們得弄明白是什麼引起了這場地震！ 聽我#b#m600000000##k的那些個蛋頭夥計說，這地震可不是什麼自然現象。 我覺得你應該從這點著手開始調查。 ");
	if (status == 1)
		qm.sendAcceptDecline("給，拿好這個叫…………#b#i2430680# #t2430680:##k…………玩意兒。 造出它的哥們兒說你“能用它來找到地震的震中”什麼的。 就照他們說的去做吧。");
	if (status == 2){
		qm.forceStartQuest();
		if (!qm.haveItem(2430680)) qm.gainItem(2430680, 1);
		qm.dispose();
}
}
/*
	名字:	调查武陵
	地圖:	特鲁的情报商店
	描述:	104000004
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
		qm.sendNext("等級升多了嗎，英雄大人？發現了與黑色翅膀有關的有趣的情報。這次有點遠…知道叫#b#m250000000##k村莊嗎？得要去哪裡。");
	if (status == 1)
		qm.sendAcceptDecline("好像在#m250000000#的叫#b#p2090004##k的人跟黑色翅膀接觸了。反正不清楚怎麼會那樣，但是個準確的情報。調查為什麼黑色翅膀跟#p2090004#接觸了，有了什麼樣的交易。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}

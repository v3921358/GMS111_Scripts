/*
	名字:	武公的挑战
	地圖:	武陵道场近道
	描述:	925040000
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
		qm.sendNext("封印石……那是很久很久以前，由#b#m250000000##k看管的東西……難道說覬覦它的人又出現了……");
	if (status == 1)
		qm.sendNextPrevS("#b請告訴我有關封印石的事情。");
	if (status == 2)
		qm.sendAcceptDecline("那可不行。#o9300351#這個傢伙確實很危險，但我怎麼知道你會比他不危險呢？ 我要考驗一下你……你接受#b考驗#k嗎？");
	if (status == 3)
		qm.sendPrev("戰士的武器，其實就是自信。 技能比任何言語都能更好地體現你的內心。 由我的#r分身#k來和你戰鬥，讓我看看你的真心是怎樣的。");
	if (status == 4){
		qm.forceStartQuest();
		qm.getMap(925040001).resetFully();//地图刷新
		qm.warp(925040001, 1);
		qm.dispose();
}
}
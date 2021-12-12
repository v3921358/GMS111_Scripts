/*
	名字:	称号 - 正式十字猎人
	地圖:	埃德尔斯坦
	描述:	310000000
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
		qm.sendAcceptDecline("羅拉已經跟我說過了。 聽說你出色地完成了任務？#h0#，現在你好像已經足够强大，可以授予#b<正式十字獵人>#k稱號了。");
	if (status == 1)
		qm.sendPrev("祝賀你成為#b<正式十字獵人>#k。 希望你能為了下一個任務而變得更加强大。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142352:#   #t1142352#");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainItem(1142352,1);
		qm.dispose();
}
}
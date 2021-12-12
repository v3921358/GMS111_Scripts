/*
	名字:	未尽的修炼
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
		qm.sendAcceptDecline("#b#h0##k，你是不是因為已經過了90級而懶於修煉了？ 你確實很强，但修煉還遠沒有結束。 請向那些騎士團長們學習吧，他們可為了對抗黑魔法師而不斷地修煉著呢。");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}
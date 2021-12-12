/*
	名字:	送信
	地圖:	农场中心
	描述:	100030300
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
		qm.sendNext("嗯？ 有什麼事嗎，小不點？ 又來幫爸爸幹活嗎？ 嗯.....你去教訓了#o1210111#？ 哎呀！ 沒受傷吧？");
	if (status == 1)
		qm.sendAcceptDecline("那就好。 但是這樣會很危險，以後你要小心。 啊，對了……你來的正好。 你能幫爸爸跑一趟嗎？");
	if (status == 2)
		qm.sendNext("因為#o1210111#，本來早就應該送過去的#t4032453#可能不能按時送過去了。 你去給#b#m100000000##k的#b#p1012003##k送過去吧。");
	if (status == 3)
		qm.sendPrev("剛才給你的信裏已經說得很明白了，你只要把東西送過去就行。 本來應該我去的，但你能戰勝危險的猪猪，我想讓你去應該也沒問題了。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i4032455# 1 #t4032455#");
	if (status == 4){
		if(!qm.haveItem(4032455, 1)) qm.gainItem(4032455, 1);
		qm.forceStartQuest();
		qm.dispose();
}
}
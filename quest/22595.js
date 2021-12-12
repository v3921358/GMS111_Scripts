/*
	名字:	第三个任务的结果
	地圖:	玩具城
	描述:	220000000
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
		qm.sendNext("你好，我是#m220000000#的衛兵#p2041004#。 有什麼可以幫你的嗎？ 嗯？#o9300390#嗎？");
	if (status == 1)
		qm.sendNextPrev("噓！ 你是怎麼知道#o9300390#的事情的？ 誰也不知道他是守衛秘密倉庫的看守……呵呵，好吧，我就把#o9300390#的情况告訴你吧。");
	if (status == 2)
		qm.sendNextPrev("不久前，#o9300390#遭到襲擊，受了重傷。#r囙此就沒人守衛秘密倉庫了。 小偷趁這個機會溜了進來#k。 雖然不知道是什麼寶物……但事情很嚴重。");
	if (status == 3)
		qm.sendPrev("…呵，為，為什麼擺出這麼可怕的表情？ 謝謝你對小偷的事情表示憤慨，但這件事情你幫我保密！\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 28135 exp");
	if (status == 4){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(28135);
		qm.dispose();
}
}
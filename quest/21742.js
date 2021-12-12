/*
	名字:	空白的画卷
	地圖:	武陵
	描述:	250000000
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
		qm.sendNext("雖說也不是什麼著急的活兒，不過你這麼問總讓人覺得有些不爽。 我是不是應該讓你下次再來找我呢？ 反正沒什麼事情，就請讓我清淨一點行嗎？");
	if (status == 1)
		qm.sendNextPrevS("#b我聽說你見過黑色之翼的武士……");
	if (status == 2)
		qm.sendNextPrev("啊，你是說一身漆黑，眉宇間皺紋很深的那個男人嗎？ 是見過。 不但見過而且他有東西放在我這裡，讓我轉交給#p2091007#老頭子。");
	if (status == 3)
		qm.sendNextPrevS("#b東西？");
	if (status == 4)
		qm.sendNextPrev("嗯，好大一個#b#v4220151:##t4220151##k塞給我，讓我一定要轉交。 他一臉殺氣的，好像我不轉交的話，他還會來找我似的。 哎呦，真是嚇死人了。");
	if (status == 5)
		qm.sendNextPrevS("#b然後呢，#t4220151#轉交出去了嗎？");
	if (status == 6)
		qm.sendNextPrev("沒有，那個……其實出了點問題……你願意聽我說嗎？");
	if (status == 7)
		qm.sendNextPrev("是這樣的，我正在做一種新藥水，當時正好在煮草藥，結果沒想到#t4220151#一下子掉了進去。 我雖然以最快速度把它撈了出來，不過#t4220151#浸水後，上面的字都消失了。");
	if (status == 8)
		qm.sendPrev("於是我就發愁了，這怎麼轉交給#p2091007#老頭子啊。 於是我决定先把#t4220151#修復好，再轉交給他。 正好你能幫我一個忙。#t4220151#上面的字是#m250000000#最有名的畫師#b#p2091008##k寫的，你去的話，他一定會幫你修復#t4220151#的。");
	if (status == 9){
		if(!qm.canHold(4220151, 1)) {
		qm.sendOk("無法收納物品，請清理背包空間。");
		qm.dispose();
		return;
		}
		qm.forceStartQuest();
		qm.gainItem(4220151, 1);
		qm.dispose();
}
}

function end(mode, type, selection) {
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
		qm.sendYesNo("哦，你帶來墨水了。現在讓我小心地倒。。。。倒。一點點的倒，字迹慢慢顯示出來了！這是一封信。上面寫著：“我會取走#b武陵的封印石。”\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10000 exp");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(4032342, -8);
		qm.gainItem(4220151, -1);
		qm.gainExp(10000);
		qm.dispose();
}
}
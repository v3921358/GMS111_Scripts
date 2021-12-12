/*
	名字:	奇怪的梦
	地圖:	客厅
	描述:	100030101
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 7) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("睡得好嗎，#b#h0##k？");
	if (status == 1)
		qm.sendNextPrevS("#b嗯…媽媽也睡得好嗎？");
	if (status == 2)
		qm.sendNextPrev("對了... 你昨天晚上似乎沒有睡得很好。是因為昨晚雷聲轟隆隆閃電交加的緣故。是這樣嗎？");
	if (status == 3)
		qm.sendNextPrevS("#b不是！不是啦！我昨晚做了一個奇怪的夢。");
	if (status == 4)
		qm.sendNextPrev("奇怪的夢？你做了什麼夢？");
	if (status == 5)
		qm.sendNextPrevS("#b就是啊…");
	if (status == 6)
		qm.sendNextPrevS("#b(說明了在霧中遇見龍的夢。)");
	if (status == 7)
		qm.sendAcceptDecline("呵呵呵呵，龍嗎？真的好厲害。還好沒被抓去吃掉。 有趣的夢也可以和#p1013101#分享。應該會很棒。");
	if (status == 8)
		qm.sendPrev("#b#p1013101##k拿早餐去給獵犬吃，前往 #b#m100030102##k了。你從家裡往外走就能看到了。");
	if (status == 9){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/1/0", 1);
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
		qm.sendSimple("喔！你起床了？#h0#！眼睛怎麼有黑眼圈哪？你都沒睡嗎？\r\n\r\n#b#L0#你說你做了奇怪的夢？什麼夢呢？做了龍出現的夢嗎？");
	if (status == 1)
		qm.sendPrev("哇哈哈哈~ 龍嗎？那很厲害？龍夢耶！可是夢裡面沒有出現一隻狗嗎？ 哈哈哈哈~\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 20 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.evanTutorial("UI/tutorial/evan/2/0", 1);
		qm.gainExp(20);
		qm.dispose();
}
}
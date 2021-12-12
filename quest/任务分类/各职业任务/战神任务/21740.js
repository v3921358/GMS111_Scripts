/*
	名字:	被抢走的天空之城封印石
	地圖:	特鲁的情报商店
	描述:	104000004
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
		qm.sendNext("你回來了，英雄。 在#m200000000#的事情辦得怎麼樣？ 確實是和黑色之翼有關吧？ 為什麼表情這麼凝重？ 說來聽聽。");
	if (status == 1)
		qm.sendNextPrevS("#b（講述有關#m200000000#的封印石的事情。）#k");
	if (status == 2)
		qm.sendNextPrev("嗯。#m200000000#也有封印石啊……這倒是很重要的一個情報。 雖說被搶走了很可惜……啊，我倒不是在怪你。 沒想到黑色之翼這次是有備而來啊。");
	if (status == 3)
		qm.sendNextPrevS("…………");
	if (status == 4)
		qm.sendNextPrev("振作精神！ 對，就是這樣。#p1201000#這次又解讀出來了#b新技能#k。 你去#b#m140000000#見見#p1201000#吧#k，正好連#m200000000#的消息也一起帶過去。");
	if (status == 5)
		qm.sendPrev("#b#p1201000##k也是事件的相關人，而且對於英雄曾經生活過的那個年代，沒有人比#p1201000#更瞭解，所以應該經常和#p1201000#互通情報，有事情最好也找他商量。");
	if (status == 6){
		qm.forceStartQuest();
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
		qm.sendNext("啊，很久不見了。#b#h0##k。 這段時間修煉得還好吧？ 正好我發現了新的技能想叫你回來呢……你回來的正是時候！");
	if (status == 1)
		qm.sendNextPrevS("#b（對#p1201000#講述有關天空之城封印石的事情。）#k");
	if (status == 2)
		qm.sendNextPrev("天空之城封印石啊……原來如此，這下可以肯定黑色之翼的目標果然是封印石，而且封印石不止一個。 這是一個很重要的情報。");
	if (status == 3)
		qm.sendNextPrevS("#b…不過封印石被搶走了……");
	if (status == 4)
		qm.sendNextPrev("黑色之翼從很早之前就已經開始做準備了。 這麼看來，我們能得到#t4032323#，已經是萬幸了。 現在對你而言，學習技能更重要。");
	if (status == 5)
		qm.sendPrev("現在最重要的就是讓你立刻變得强大起來。 關於封印石，有我和特魯大叔關注著呢，戰神你還是專心訓練吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 7604 exp");
	if (status == 6){
		qm.forceCompleteQuest();
		qm.gainExp(7604);
		qm.dispose();
}
}
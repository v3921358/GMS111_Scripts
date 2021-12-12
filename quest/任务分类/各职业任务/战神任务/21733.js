/*
	名字:	情报店袭击事件
	地圖:	灯泡任务
	描述:
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
		qm.sendNext("喂，你在哪？ 有一件急事。");
	if (status == 1)
		qm.sendNextPrev("我有很重要的情報！ 趕緊到#b#m104000004##k來！");
	if (status == 2)
		qm.sendPrevS("#b#(喂……？#p1002104#以前不是叫我英雄的嗎……)#l\n#k",3);
	if (status == 3){
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
		qm.sendNext("啊……沒想到還會碰上這種事情。 怎麼都沒想到人偶師還會潜伏到這裡來。 平時大概是疏於修煉了，完全被對方給算計了。 ");
	if (status == 1)
		qm.sendNextPrevS("#b對不起，都是因為我……");
	if (status == 2)
		qm.sendNextPrev("啊？ 英雄大人不必內疚。 你也不知道那傢伙會來啊。 不必道歉。 不過，這也暴露出了他們的弱點。");
	if (status == 3)
		qm.sendNextPrevS("#b弱点？");
	if (status == 4)
		qm.sendNextPrev("人偶師討厭的那個檔案。 如果那個檔案是假的，人偶師是不會這麼興師動眾，帶著一群人跑來折騰的。 那個檔案充分證明了黑色之翼的目標其實是金銀島封印石。");
	if (status == 5)
		qm.sendNextPrevS("#b话虽这么说，但我的位置也暴露了。");
	if (status == 6)
		qm.sendNextPrev("别担心。这次我为了拿利琳寄过来的文件才出去的，没想到中了敌人的招。平时我不会这么不小心的。好歹也是个情报商人，总会为自己准备一条退路的。现在关键的是#b#s21100000#  #q21100000##k这个技能你知道吗？");
	if (status == 7)
		qm.sendPrev("黑色之翼再怎么兴风作浪也没法阻止你日益强大起来。继续努力，直到击败黑魔法师为止。我也会尽最大努力为你收集信息的。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#s21100000#  #q21100000#  \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5700 exp");
	if (status == 8){
		qm.forceCompleteQuest();
		qm.teachSkill(21100000, qm.getPlayer().getSkillLevel(21100000), 20); 
		qm.gainExp(5700);
		qm.dispose();
}
}
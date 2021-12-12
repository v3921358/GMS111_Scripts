/*
	名字:	罗杰和苹果
	地圖:	小蜗牛
	描述:	20000
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
		qm.sendNext("嗨，怎麼了嗎？ 我是羅傑，可以教你一些有用的知識");
	if (status == 1)
		qm.sendNextPrev("你問我為什麼在這嗎？ 哈哈哈！#r我想要教導那些剛進楓之穀的冒險者們。");
	if (status == 2)
		qm.sendAcceptDecline("所以…..讓我們來玩點有趣的~！");
	if (status == 3){
		if (!qm.haveItem(2010007)) {
		qm.gainItem(2010007, 1);
		}
		qm.sendPrev("請把#b#v2010007:##t2010007##k吃完然後\r\n我等等會給你#r神秘小禮物#k。 請務必收下啊。 使用後你會變得更強壯。 打開消耗欄，按兩下一下蘋果很簡單的，按一下鍵盤的#bI#k就能了喔！");
		}
	if (status == 4){
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
	if (status == 0) {
	if (qm.getPlayerStat("HP") < 50) {
		qm.sendOk("你還沒把我給你的蘋果吃掉啊，趕快吃了再來找我吧。");
		qm.dispose();
	} else {
		qm.sendOk("你看～是不是很簡單？ 你可以在右側的欄比特設定#b熱鍵#k。 哈哈，你聽不懂對吧？ 喔，每隔一段時間，血量就會恢復了。 雖然很花時間，但好好運用的話可以幫助不少的。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#  \r\n#i2010000# 3 #t2010000#\r\n#i2010009# 3 #t2010009# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(2010000, 3);
		qm.gainItem(2010009, 3);
		qm.gainExp(10);
		qm.dispose();
}
}
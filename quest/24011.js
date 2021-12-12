/*
	名字:	国王的义务
	地圖:	伟大精灵降临
	描述:	910150100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("……奇怪。在你身上感觉不到国王的力量……那种力量应该不会因为过了几百年而消失啊……到底是怎么回事？在你身上，只能感受到非常不祥的黑暗气息……");
	if (status == 1)
		qm.sendNextPrevS("#b说来话长。");
	if (status == 2)
		qm.sendNextPrev("我的肉体已经像尘土一样消失，只剩下精神。几百上千年的时间，对于我来说就像是流水一样。我很乐意听听你的故事，告诉我这段时间世界上到底发生了什么事吧。");
	if (status == 3)
		qm.sendNextPrevS("#b(说明了黑魔法师的存在，再讲到和黑魔法师的战斗，最后虽然把他封印了起来，但是精灵们却因此受到了诅咒……把情况一五一十地告诉了她。)");
	if (status == 4)
		qm.sendNextPrevS("#b我也许会成为精灵历史上最愚蠢的国王。要不是我的选择……要不是我选择和黑魔法师战斗的话，精灵们就不会经历这么悲惨的事情……\r\n#p1033210#，我愿意接受惩罚。");
	if (status == 5)
		qm.sendNextPrev("发生了这么多事啊……真让人吃惊。竟然有覆盖整个冒险岛世界的强大黑暗力量……竟然影响到了我们精灵，真是悲伤的事情……但是，这不是你的责任。");
	if (status == 6)
		qm.sendNextPrev("国王的选择就是精灵的选择，不管你做出什么选择，都是全体精灵的意志。战斗还没结束，一切都还没决定。你只要把你的选择，变成最好的选择就行……");
	if (status == 7)
		qm.sendPrev("我知道你为什么会来找我了。虽然知识还在，但是失去了国王的力量……你没有必要再通过<国王的试炼>。你是已经拥有资格的人，我允许你拥有国王的力量。");
	if (status == 8){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
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
		qm.sendNext("在妖精漫长的历史中，从来没有发生过类似的大事件。现在是战争时期，精灵们都在默默地战斗。精灵的年轻国王啊，请一定把百姓们引向胜利。");
	if (status == 1)
		qm.sendNextPrev("……在忙碌的战争时期，你没有必要再到这里来。本来为了学习新技能，必须接受第二次、第三次试炼，但是现在就省略了吧。");
	if (status == 2)
		qm.sendAcceptDecline("我会直接去找你。只要你能找回原来的能力，可以承受国王的力量，我就去唤醒你的能力……我很期待。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#  \r\n#i1142337#   #t1142337#");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.changeJob(2310);
		qm.gainItem(1142337, 1);
		qm.dispose();
}
}
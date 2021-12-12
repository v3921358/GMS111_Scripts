/*
	名字:	破坏行动
	地圖:	新叶城
	描述:	600000000
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
		qm.sendNext("我们不能让那些外星人偷走我们宝贵的矿石！我们得，我想想，破坏它们的作业？对，就是这样！去它们那儿大闹一番吧！");
	if (status == 1)
		qm.sendNextPrev("对了，要破坏它们的作业首先得制定一个周密的计划！我这儿有四个主意！");
	if (status == 1)
		qm.sendNextPrev("你的第一个目标位于森林峡谷。外星人在那儿屯了不少火药堆。你把它们都给我点了，顺便再把那些星际巨钻给毁掉好了。它们看着就很脆弱的样子，估计往它们挖的洞里丢几块石头它们就不行了！");
	if (status == 2)
		qm.sendPrev("噢，我还想到了一个能吓跑它们的主意！去把它们的样本都偷走，再弄坏它们的电脑！如果我是外星人，那我肯定会把这些东西放在星际采矿基地的入口附近。希望这帮外星人用的作业系统跟我们的是一样的……");
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
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("破坏任务进展得还顺利吗？你有好好教训它们吗？");
	if (status == 1)
		//qm.sendNextPrev("我就知道你能让它们尝到苦头！你还没破坏够呢！还有许多能破坏的东西！\r\n\r\n #b破坏它们的电脑：" + qm.getQuestStatus(28761) == 0 ? #k 未完成"");
		qm.sendNextPrev("我就知道你能让它们尝到苦头！");
	if (status == 1)
		qm.sendNextPrev("外星人关押了许多人质！我感觉它们是要把他们煮来吃！我懂了，这帮外星人肯定是星际大厨！");
	if (status == 2)
		qm.sendPrev("嗯，你的推论既可笑又不合理，但我还真想不出别的可能！不过，至少这些市民现在还活着。");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.dispose();
}
}
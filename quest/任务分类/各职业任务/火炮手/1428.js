/*
	名字:	火枪手之路2
	地圖:	航海室
	描述:	120000101
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("通过之前使用火炮的经历，就可以知道火炮手是什么样的职业。火炮手是使用强力的手炮，在远距离对敌人加以猛烈打击的职业。每一次攻击都很强力，可以攻击多个敌人，因此使用起来很方便，也很华丽。真的需要我告诉你火炮手的技能吗？");
	if (status == 1)
		qm.sendNextPrev("最重要的当然是基本技能。#b精准炮#k、#b大炮加速#k、#b致命炮火#k是其中的基础。可以使火炮更强、更快、更准确。");
	if (status == 2)
		qm.sendNextPrev("但是真正的乐趣在于攻击技能。向前方发射多发小型炮弹的#b强击炮#k，可以一次攻击多个敌人，因此非常有用。");
	if (status == 3)
		qm.sendNextPrev("同时还有为和猴子在一起的你专门开发的技能。将装满了炸药的橡木桶滚向敌人的#b猴子炸药桶#k和使用猴子的魔法获得增益效果的#b猴子魔法#k，都是你特有的技能。");
	if (status == 4)
		qm.sendNextPrev("说明太长了吗？那就让我们开始火炮手的考试吧。考试内容很简单。只要进入准备好的考场，消灭准备好的怪物，搜集#r它们掉落的物品#k#i4031013#就行。但是那些怪物的防御力比较高，消灭起来不是很容易。一定要记住。");
	if (status == 5)
		qm.sendAcceptDecline("考试过程中药水不够的话，就必须#b放弃任务重新开始#k。一定要做好充分的准备，不要发生这样的事情。考试马上考试。接受的话，我就把你送到考试船舱去。");
	if (status == 6){
		qm.forceStartQuest();
		qm.warp(912040000,0);
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
		qm.sendYesNo("#t4031013#全部拿来啦。成绩不错。不，应该说是比较优秀。你一定会成为一个让司徒诺满意的好火炮手。我马上让你成为火炮手。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(530);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的，从现在起你就是#b火炮手#k了。火炮手是使用手炮在远处向敌人发动猛烈攻击的人……为了变得更强，必须努力修炼。如果修炼中遇到什么困难，我可以帮你。");
		}
	if (status == 2)
		qm.sendOk("火炮手必须变得更强。但是决不能把那种力量用在弱者身上。把自己的力量用在正确的事情上……比变强更困难。");
	if (status == 3){
		qm.dispose();
}
}
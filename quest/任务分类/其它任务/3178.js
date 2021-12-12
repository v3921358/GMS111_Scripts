/*
	名字:	还有希望吗
	地圖:	第五座塔楼
	描述:	211061001
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
		qm.sendNext("你找到了解过去发生在这座城里的事件的人了吗？嗯？#p2161002#？他原本是国王的近卫骑士团长。他还留在这里吗……是吗，#p2161002#是怎么说的呢？他知道雷昂为什么会变成这个样子吗？");
	if (status == 1)
		qm.sendNextPrevS("#b(转述从#p2161002#那里听到的话。)#k");
	if (status == 2)
		qm.sendNextPrev("没错……是的，是的。在黑色的乌云遮住天空的那一天，原本看上去很普通的士兵们突然变了，开始攻击我们。城墙倒塌，房屋全都着了火……我，我被塔里的烟雾……原来是这样啊。");
	if (status == 3)
		qm.sendNextPrevS("#b(从#p2161001#的反应来看，#p2161002#的话好像是事实。)#k");
	if (status == 4)
		qm.sendNextPrev("雷昂是因为这个才会变成这样的啊。我光在这里抱怨雷昂，没想到这段时间他一直生活在悲伤和愤怒之中……我不能再让他这样下去了。");
	if (status == 5)
		qm.sendNextPrevS("#b你有什么办法吗？");
	if (status == 6)
		qm.sendNextPrev("城里有鲁丹都不知通的国王和王妃专用的通道。本来是不应该告诉别人的……但是这次就破例一次。请你和我一起到接见室去见见他。");
	if (status == 7)
		qm.sendAcceptDecline("我要亲自去见见他。因为那些拥有黑暗气息的怪物，我一直不能到接见室去……不过如果你能帮我，我就应该可以过去。请一定要让我到接见室去！拜托你了！");
	if (status == 8){
		qm.forceStartQuest();
		qm.resetMap(921140000);   //地图刷新
		qm.warp(921140000,1);
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
		qm.sendNext("这……是我送给雷昂的吊坠。我送他这个礼物，是希望他能成为一个好的国王。没想到他还戴在身上……他果然是个多情的人。");
	if (status == 1)
		qm.sendPrev("虽然他已经完全变了，虽然他的所作所为可能已经不可原谅……不过我不认为已经没有希望了。我相信总有一天，雷昂会恢复成原来的样子。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 300000 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(300000);
		qm.dispose();
}
}
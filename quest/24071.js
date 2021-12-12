/*
	名字:	袭击者1
	地圖:	弓箭手培训中心
	描述:	100000201
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
		qm.sendNext("你能跟我说说和黑魔法师的战斗之后……到底发生了什么事吗？听说你们把黑魔法师封印了起来。此外，为了保护#m101050000#，你们也把村子封印了起来。但是其他的我就不知道了……请告诉我。");
	if (status == 1)
		qm.sendNextPrevS("#b(说明了封印黑魔法师，受到黑魔法师诅咒，精灵们因为诅咒而被困在冰里，把村子封印起来等待诅咒消失，因为封印变弱而醒来，以及村子现在的情况。)");
	if (status == 2)
		qm.sendNextPrev("这么说，除了双弩精灵之外，村里醒过来的人就只有#p1033100#、#p1033101#和#p1033102#了。他们一定也变弱了……还好怪物也比以前弱了，不会发生什么危险的事情。");
	if (status == 3)
		qm.sendNextPrevS("#b对了……能跟我说说你的事情吗？在我们去战斗的时候，我让你到金银岛避难，之后发生了什么事情……现在的冒险岛世界怎么样了？跟我好好说说吧。");
	if (status == 4)
		qm.sendNextPrevS("#b(听到了避难之后定居，建设村庄，在几百年时间里一直很和平的金银岛的事情。)");
	if (status == 5)
		qm.sendNextPrev("事实上，我以为黑魔法师会就此消失。看着凯琳为了给德斯托耐报仇而奔走，我也仍然这么认为……但是随着新皇帝#p1101000#的出现，情况发生了剧变。");
	if (status == 6)
		qm.sendNextPrevS("#b新的皇帝……#p1101000#？");
	if (status == 7)
		qm.sendNextPrevS("#b(听到了黑魔法师复活的传闻，名叫黑色之翼的组织开始活动，冒险骑士团的成立和班·雷昂的登场，等待。)");
	if (status == 8)
		qm.sendNextPrev("啊，我还见到了战神。虽然因为时空扭曲，见面的过程有点复杂。");
	if (status == 9)
		qm.sendNextPrevS("#b战神？战神还活着吗？");
	if (status == 10)
		qm.sendNextPrev("是的，虽然因为诅咒的影响，还没完全恢复记忆。不光忘记了我，连黑魔法师的记忆也完全失去了。即使是这样，他还是在和黑色之翼战斗。");
	if (status == 11)
		qm.sendNextPrevS("#b战神……没想到他还活着。还能再见到他吗？");
	if (status == 12)
		qm.sendNextPrev("他正在为了找回力量和记忆在冒险岛世界旅行，说不定可以遇到他。对了……虽然你可能很忙，不过你能和我一起到#b#m101050000##k去一趟吗？好久没回村里去了，我想回去看看。");
	if (status == 13)
		qm.sendNextPrev("#p1033100#长老，#p1033101#姐姐……不，#p1033101#长老，#p1033102#长老。我非常想念他们。我们快去吧。");
	if (status == 14)
		qm.sendPrev("啊……等等，我忘了一件事。我去取一下东西，请稍等一下。");
	if (status == 15){
		qm.forceStartQuest();
		qm.forceStartQuest(24095,"1");
		qm.resetMap(910080010);   //地图刷新
		qm.warp(910080010, 0);
		qm.spawnNpc(1012100, 4800,454); 
		qm.spawnMonster(9300422,5348, 34);
		qm.spawnMonster(9300422,5272, 60);
		qm.spawnMonster(9300422,4800, 454);
		qm.spawnMonster(9300422,4900, 454);
		qm.spawnMonster(9300422,5100, 454);
		qm.spawnMonster(9300422,5200, 454);
		qm.spawnMonster(9300422,5500, 454);
		qm.spawnMonster(9300422,5600, 454);
		qm.spawnMonster(9300422,5700, 454);
		qm.spawnMonster(9300422,5800, 454);
		qm.spawnMonster(9300422,5900, 454);
		qm.spawnMonster(9300422,6000, 454);
		qm.dispose();
}
}
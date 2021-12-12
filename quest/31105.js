/*
	名字:	被破坏的射手村
	地圖:	破坏的射手村
	描述:	271010000
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
		qm.sendNext("但是你到底是怎么来的呢？自从受到希纳斯的攻击之后，和其他地区的联系就中断了。");
	if (status == 1)
		qm.sendNextPrevS("(不能说是从过去来的……)啊，我突然失去了知觉，醒来之后就到了这里，我也不记得怎么过来的了。你能给我说明一下现在的情况吗？");
	if (status == 2)
		qm.sendNextPrev("由于战争的冲击，暂时失去记忆了吗……希纳斯在黑魔法师的影响下变得堕落了。冒险骑士团变成了我们的敌人。他们攻击了我们，你也看到了，我们村……在那次袭击中，我父亲去世了……我不想再提起这悲伤的往事了。详细的情况，你去问赫丽娜吧。");
	if (status == 3)
		qm.sendPrevS("啊，好的，知道了。",3);
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}
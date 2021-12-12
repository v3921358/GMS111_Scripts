/*
	名字:	阿斯迪拉的召唤
	地圖:	埃欧雷
	描述:	101050000
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
		qm.sendNext("抽泣，虽然#p1033101#很想和你一起去，但是我还没有多少力气。跟着你的话，会妨碍到你的。现在我想重新修炼。双弩精灵？要是我在这种情况下妨碍你的话，#p1033100#哥哥一定会骂我的。",1033101);
	if (status == 1)
		qm.sendNextPrev("我会先留在村子里，努力恢复力量。我决心不妨碍你的修炼！不过#b你也必须努力修炼，让其他人快点醒来哦#k！",1033101);
	if (status == 2)
		qm.sendNextPrev("双弩精灵……");
	if (status == 3)
		qm.sendNextPrevS("#p1033102#！你的身体没事吧？！");
	if (status == 4)
		qm.sendNextPrev("是的，还好我这个老太婆没什么不舒服的地方，我很健康。虽然力量变弱了，但是没问题。");
	if (status == 5)
		qm.sendNextPrevS("啊……太好了。#p1033100#和#p1033101#全都很结实，但是我很担心#p1033102#你。");
	if (status == 6)
		qm.sendNextPrev("多谢国王陛下的担心，我没事。呵呵呵……国王陛下一个人先醒过来，一定经历了不少事情吧？");
	if (status == 7)
		qm.sendNextPrevS("嗯，但是没遇到什么困难。");
	if (status == 8)
		qm.sendPrev("你小小年纪就登上了王位，甚至还见过黑魔法师，你历经的苦难让你看起来成熟稳重…………看来磨练使人成长这句话果真没错啊。");
	if (status == 9){
		qm.forceStartQuest();
		qm.dispose();
}
}
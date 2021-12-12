/*
	名字:	袭击者2
	地圖:	遭到攻击的射手村右面
	描述:	910080010
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
		qm.sendNext("组成联盟之后，我偶尔会感觉到黑色之翼在监视我。但是从来没有这样发动过袭击……他们好像知道了我想把#b银槲之剑#k还给你。");
	if (status == 1)
		qm.sendNextPrevS("银槲之剑……？你还留着吗？");
	if (status == 2)
		qm.sendNextPrev("那当然。这是国王陛下暂时交给我保管的东西。我当时不清楚自己的力量，还想跟着你到那么危险的地方去。你是为了保护我才把它交给我的……但是现在村子有危险，所以我想把它还给你。");
	if (status == 3)
		qm.sendNextPrevS("但是为什么不袭击你，而袭击我呢？");
	if (status == 4)
		qm.sendNextPrev("……#r黑色之翼中有具有变身能力的人。他们可能想除掉你，然后变成你的样子，拿走银槲之剑。");
	if (status == 5)
		qm.sendNextPrevS("没想到他们还有这种能力……");
	if (status == 6)
		qm.sendNextPrev("是的，比起武力，他们在这个方面更加危险……他们……一定是听到了我和你的对话。那样的话，他们应该已经知道了#m101050000#……双弩精灵！我们快到村里去！");
	if (status == 7)
		qm.sendPrev("他们的第一个计策失败了，接下去说不定会#b攻击#m101050000##k！抓走人质，让你把银槲之剑交出去！虽然可能是臆测……我来使用回城魔法！");
	if (status == 8){
		qm.forceStartQuest();
		qm.warp(910150220, 0);
		qm.resetMap(910150220);   //地图刷新
		qm.dispose();
}
}
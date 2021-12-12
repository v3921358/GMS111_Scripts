/*
	名字:	不相信的国王
	地圖:	第五座塔楼
	描述:	211061001
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("几百年来我一直在看着这座城，但是却一直不敢相信。你相信吗？这里原本是座非常美丽的城堡。连窗外的雪景看着都让人感到温馨。");
	if (status == 1)
		qm.sendNextPrev("他也一样。雷昂……虽然他是个只知道剑术的倔强的男人，但同时也是个多情的人。虽然不爱说话，但是在他的眼睛里可以看到善良的光……但是，他却变成了这个样子……");
	if (status == 2)
		qm.sendNextPrev("#r黑魔法师#k到底对他做了什么？为什么他变成了和过去完全不同的一个人？他……已经忘记我了吗？真让人不懂，你能帮我去见见雷昂吗？");
	if (status == 3)
		qm.sendYesNo("虽然他没有回答我，但是我可以肯定他应该就在#b接见室#k里。请你去见见#b雷昂#k，问问他是否还记得我，记得的话，为什么不回答我。我会把你送到接见室去。");
	if (status == 4){
		qm.forceStartQuest();
		qm.warp(211070200, 1);
		qm.dispose();
}
}
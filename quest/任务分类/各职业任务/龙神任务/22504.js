/*
	名字:	美味的牛奶1
	地圖:	农场中心
	描述:	100030300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOkS("#b我自己想找答案是沒有用的。",3);
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("唉。這是行不通的。我還需要別的東西。沒有植物。沒有肉。什麽，妳不知道？但是妳是主人，妳也比我大。妳壹定知道什麽對我有好處！");
	if (status == 1)
		qm.sendNextPrevS("#b但我沒有。這不像年齡和這個有什麽關系…");
	if (status == 2)
		qm.sendAcceptDecline("因為妳年紀大了，妳也必須在這個世界上更有經驗。妳比我了解更多。哦，很好。我會問壹個比妳大的人！");
	if (status == 3)
		qm.sendPrevS("#b(妳已經問過爸爸壹次了，但是妳沒有更好的主意。是時候再問他了！)#k",3);
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}
/*
	名字:	[十字猎人]偶然？必然！
	地圖:	维修中的列车
	描述:	931050400
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendAcceptDecline("他們馬上就要發起攻擊了！ 不只是我，你也會陷入危險之中的。 請擊退他們！");
	if (status == 1){
		for (i = 1; i < 8; i++) {
		qm.spawnMob(9300470,0,0);
		}
		qm.forceStartQuest();
		qm.dispose();
}
}
/*
	名字:	翼魔
	地圖:	危险的电站
	描述:	931040010
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
		qm.sendOk("你想要救小孩，就得先过我这一关！");
	if (status == 1){
		qm.forceStartQuest();
		qm.spawnMonster(9300435, 540,15); 
		qm.dispose();
}
}
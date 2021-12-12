/*
	名字:	追随遗忘的记忆
	地圖:	惡魔殺手
	描述:	惡魔殺手
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
		qm.sendNext("回想被遗忘掉的记忆，我的心里充满了温暖.",2153006);
	if (status == 1)
		qm.sendPrev("想起来那已经是很久很久以前的事了，事隔多年，真是让人怀念啊。",2153006);
	if (status == 2){
		qm.forceStartQuest();
		qm.forceStartQuest(7081,1);
		qm.dispose();
}
}
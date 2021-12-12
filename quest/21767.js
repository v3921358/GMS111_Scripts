/*
	名字:	木箱的秘密
	地圖:	明珠港
	描述:	104000000
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
		qm.sendSimple("(木箱裡有著來路不明的藥…)。。。   \r\n\r\n#b#L0# 你最好把這個帶給約翰，問他是什麼#k");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainItem(4032423,1);
		qm.dispose();
}
}

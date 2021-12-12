/*
	名字:	梦的碎片
	地圖:	破坏的射手村
	描述:	271010000
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
		qm.sendNextS("这是什么？梦碎片……不知道是什么东西……应该到村里问问有没有人知道。\r\n赫丽娜应该会知道吧？",3);
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}
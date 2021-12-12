/*
	名字:	和平的音乐
	地圖:	埃欧雷
	描述:	910150001
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
		qm.sendNext("启动音乐盒，让音乐响起来吧。");
	if (status == 1)
		qm.sendPrev("#b(想起了和村里冰冷的气息不相称的和平的音乐。希望孩子们能做个好梦……)");
	if (status == 2){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.dispose();
}
}
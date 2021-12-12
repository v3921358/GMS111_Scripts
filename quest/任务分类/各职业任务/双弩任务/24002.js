/*
	名字:	菲利乌斯的委托
	地圖:	埃欧雷
	描述:	910150001
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(24002) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(24002) == 1) {
		qm.sendOk("启动了魔法阵。现在外面的人应该无法感觉到#m101050000#的存在了。");
		}
		}
	if (status == 1){
		qm.forceCompleteQuest();
		qm.dispose();
}
}
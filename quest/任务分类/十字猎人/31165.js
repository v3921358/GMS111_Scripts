/*
	名字:	[十字猎人]谢丽尔的提议
	地圖:	降魔十字旅团据点
	描述:	931050500
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("這就是那個裂縫啊。 解謎的時間到了。 阿卡伊勒、時空門、時間神殿的裂縫…");
	if (status == 1)
		qm.sendNextPrev("俗話說不入虎穴，焉得虎子。 要想解開所有的問題，必須直接進入裂縫內部。");
	if (status == 2)
		qm.sendAcceptDecline("#b克洛烏#k和#b謝麗爾#k已經在為新任務做準備了。 你做好執行新任務的準備了嗎？");
	if (status == 3)
		qm.sendPrev("請確認一下裂縫裡面有什麼東西。 如果在裂縫裏遇到了阿卡伊勒……啊，沒什麼。 請通過右邊的傳送口進去。 請千萬小心。");
	if (status == 4){
		qm.forceStartQuest();
		qm.forceStartQuest(31181,"1");
		qm.dispose();
}
}
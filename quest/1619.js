/*
	名字:	[十字猎人]时间停止之湖派遣
	地圖:	降魔十字旅团据点
	描述:	931050500
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
		qm.sendAcceptDecline("你的任務就是發現在冒險島世界各處的時空門的真相。 現在就正式開始降魔十字旅團的任務嗎？");
	if (status == 1)
		qm.sendPrev("首先，請你去調查#b玩具城時間隧道#k地區出現的時空門吧。 我之前派去的#b阿梁#k正在等你。 他說他調查過#r#m220040200##k，所以應該就在那裡。 ");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
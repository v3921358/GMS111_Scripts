/*
	名字:	秘密团体的第二个任务
	地圖:
	描述:	黑色影子
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
		qm.sendNext("我就是秘密組織的情報員，很抱歉，用這樣的管道來找你，我們接到了來自#b#m211000000#的#p2022003#請求。");
	if (status == 1)
		qm.sendNextPrev("這次的事情要比之前難得多，但相信你一定能做到。 只要到冰峰雪域的死亡之林消滅缺牙僵屍，蒐集#b#v4000593:##t4000593##k交給#b#p2022003#。");
	if (status == 2)
		qm.sendAcceptDecline("只要你願意接受這次任務，我可以立即送你過去。還有！ 如果它有轉交東西給你，我會在聯絡你的。");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(211000001, 0);
		qm.dispose();
}
}
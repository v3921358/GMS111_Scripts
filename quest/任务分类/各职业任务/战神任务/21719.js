/*
	名字:	人偶师的邀请
	地圖:	灯泡任务
	描述:
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("沒有膽量來會見我麼？ 呵呵！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("莫非你是前不久在#b#m101000000##k地區調查我的那個人？ 終於找到你了！ 我找你找得好辛苦，知道嗎？");
	if (status == 1)
		qm.sendNextPrevS("#b你到底是誰？");
	if (status == 2)
		qm.sendAcceptDecline("我？ 你想知道的話就來我的洞窟吧。 我想好好招待你一番。 點擊接受按鈕就能立刻移動到我家。 我在那裡等你！");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(910510200, 0);
		qm.dispose();
}
}

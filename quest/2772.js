/*
	名字:	潘喜的测试4
	地圖:	巨大的树
	描述:	101030000
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
		qm.sendAcceptDecline("最後修練也結束了,  就來進行評估這期間變強多少的最後測試~喵。 你剛來時連碰到無法有接觸的怪物, 何時變這麼強的~喵。 \r\n最後測試怪物是#r#o9100018##k~喵。 有打倒50隻的準備了~喵??\r\n");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(910100140);
		qm.dispose();
}
}
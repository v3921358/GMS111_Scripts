/*
	名字:	潘喜的测试3
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
		qm.sendAcceptDecline("好了，你也知道了。 現在我要測試一下你的實力增强了多少~喵。 測試對象是#r#o9100017##k。 必須消滅50個才行，一定要做好充分的準備~喵。\r\n你想現在去對決嗎~喵？");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(910100130);
		qm.dispose();
}
}
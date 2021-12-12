/*
	名字:	雪龟岛地图
	地圖:	百草堂
	描述:	251000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 1 && mode == 0 || status == 2 && mode == 0 || status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("你是冒險家嗎？可以感覺到非常強大的氣息。像你這樣的人來這村莊什麼？嗯？好像找我有事的樣子。什麼事？\r\n#b#L0#有#t4032472#嗎？#l\n#k");
	if (status == 1)
		qm.sendSimple("雪歸島…？以前出很遠的海抓魚時候見過的島。是的。我有。因為海盜沒出過很遠，但沒把地圖給扔了。\r\n#b#L0#能給我#t4032472#嗎？#l\n#k");
	if (status == 2)
		qm.sendSimple("那島週邊有很多暗礁波濤也大，連風也太強不好去啊。我也沒進過那個島。其實知道那個名字人幾乎沒有。可是？\r\n#b#L0#那也想要地圖。#l\n#k");
	if (status == 3)
		qm.sendNextPrev("…呼。那麼說就沒辦法了。接收我一個請求，就給你地圖。請求就是幹掉威脅#m251000000#的金勾海賊團的#r#o9001029##k和#r#o9001030##k各#r100隻#k。可以做嗎？");
	if (status == 4)
		qm.sendAcceptDecline("需要的話，我可以把你送到海盜的巢穴去。 你想現在就出發嗎？");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(925110001, 1);
		qm.dispose();
}
}
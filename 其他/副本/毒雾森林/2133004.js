/*
	名字:	毒雾森林
	地圖:	森林空地
	描述:	930000500
*/

function start() {
	if (cm.haveItem(4001163)) {
		cm.sendOk("你找到了#v4001163:##b#t4001163##k，我现在就送你出去！");
	} else {
		cm.sendOk("找不到出路嗎？我可以把你帶出去，不過需要一塊#v4001163:##b#t4001163##k作為代價，這個附近應該可以找到我想要的，你最好行動快一些，我可是沒什麼耐心。");
		cm.dispose();
}
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.gainItem(4001163, -1);
		cm.warpParty(930000600);
		}
	cm.dispose();
}
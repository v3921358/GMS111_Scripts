/*
	名字:	一口干草
	地圖:	农场中心
	描述:	100030300
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("嗯，除非妳嘗試，否則妳永遠不會知道。那只蜥蜴足夠大了，不管妳信不信。它可能吃幹草。");
	if (status == 1)
		qm.sendAcceptDecline("蜥蜴不会像牛一样享受一大堆干草吗？附近有很多野草，所以试着喂它。");
	if (status == 2){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/12/0", 1);
		qm.dispose();
}
}
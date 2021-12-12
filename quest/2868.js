/*
	名字:	英雄的帮助
	地圖:	废都医院
	描述:	103000004
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
		qm.sendNext("有可能是某個人遭到冥界幽靈的襲擊而變成幽靈，遊蕩在地鐵站裡？");
	if (status == 1)
		qm.sendAcceptDecline("難道是像我一樣，不知道自身的存在而遊蕩的嗎？ 好吧。 和我一起去確定一下吧。");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(103020420);
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("目前在這裡找不到一絲可疑的氣息。 不知道之前有沒有…");
	if (status == 1)
		qm.sendPrev("我得回到墮落城市醫院去了…\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 1200 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainExp(1200);
		qm.warp(103000004);
		qm.dispose();
}
}
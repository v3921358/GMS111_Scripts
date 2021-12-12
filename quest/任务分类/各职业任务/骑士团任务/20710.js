/*
	名字:	垃圾桶中隐藏的东西
	地圖:	废弃都市
	描述:	103000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("什麼？你拒絕我嗎？好吧，你要拒絕就拒絕嚕。我就向#p1101002#一五一十的報告吧。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("其實…我真不敢相信。但是你說是騎士團員那就沒辦法了。又沒有其他人可以調查…那就說明這次的任務吧。");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}

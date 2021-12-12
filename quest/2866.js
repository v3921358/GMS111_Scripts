/*
	名字:	吉姆的第三个委托
	地圖:	废弃都市
	描述:	103000000
*/

var status = -1;

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0) {
	if (qm.getQuestStatus(2866) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(2866) == 1) {
		qm.sendNext("這個帽子是什麼？");
		}
		}
	if (status == 1)
		qm.sendNextPrev("這裡怎麼會有帽子…難道是冥界幽靈丟下來的？");
	if (status == 2)
		qm.sendPrev("嗯…這個帽子看起來很像服務員的帽子…難道是地鐵站服務員把帽子弄丟了..？ 吉姆那邊待會兒再去報告，還是先去找地鐵站服務員確定一下吧。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 700 exp ");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainExp(700);
		qm.dispose();
}
}
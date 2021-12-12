/*
	名字:	与马斯特玛的契约
	地圖:	秘密广场
	描述:	310010000
*/

var status = -1;

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
		qm.sendNext("好！！現在開始進行簽約儀式。 請將精神盡量往我這邊集中。");
	if (status == 1)
		qm.sendNextPrevS("#b(好像有奇異的氣息流入體內。)#k");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.changeJob(3110);
		qm.teachSkill(31100007, 1, 1);
		qm.changeJob(3110);
		qm.forceStartQuest(23206, "1");  //给予3转任务条件
		qm.sendOk("契約完成了，以後你可以不用出聲，在心裡和我說話。");
		}
	if (status == 3){
		qm.dispose();
}
}

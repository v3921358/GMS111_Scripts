/*
	名字:	到遗迹发掘现场去！
	地圖:	遗迹发掘团营地
	描述:	102040200
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
		qm.sendAcceptDecline("近來由於出沒在遺蹟挖掘地的骷髏們不斷地展開，所以死傷者持續攀升當中，正等待著勇者們來進行挑戰。");
	if (status == 1)
		qm.sendPrev("詳細情況請去詢問#r遺跡發掘隊營帳#k的#b發掘隊長杉峰#k。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
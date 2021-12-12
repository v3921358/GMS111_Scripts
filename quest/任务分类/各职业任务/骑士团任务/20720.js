/*
	名字:	勇士部落派遣任务开始之前
	地圖:	圣地
	描述:	130000000
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
		qm.sendAcceptDecline("這段時間升級還順利嗎？現在應該在#m103000000#進行組隊任務吧。雖然升級重要，但是還是要暫時接受騎士團的任務了。因為有新的情報來了。");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}

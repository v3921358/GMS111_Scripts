/*
	名字:	救命恩人竟然是猴子？
	地圖:	浅海滩
	描述:	3000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("吱吱吱吱吱！吱！吱！");
	if (status == 1)
		qm.sendNextPrevS("肚子吃饱了，但精神还是不清醒……到底是怎么回事？一睁开眼睛看到的是猴子，不知道这是什么地方……船怎么样了呢？你知道怎么回事吗？");
	if (status == 2)
		qm.sendAcceptDecline("吱吱，吱吱！(猴子点着头。它真的知道情况吗？仔细问问猴子吧！)");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}
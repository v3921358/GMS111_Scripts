/*
	名字:	奇怪的礼物
	地圖:	战士圣殿
	描述:	102000003
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
		qm.sendAcceptDecline("這個禮物盒是#b#p1020000##k之前送給#b#p1103004##k的嗎？…… 呵呵！ 真是太有意思了，你想不想知道禮物盒子裏到底裝著什麼，要不由你幫我打開來看看。");
	if (status == 1){
		qm.forceStartQuest();
		qm.sendNextPrev("接過#b#p1020000##k遞過來的#b#v4033053:##t4033053##k，輕輕的打開了禮物盒。");
		}
	if (status == 2){
		qm.spawnMonster(1140130,10);//召唤怪物
		qm.sendOk("#r結果…結果…居然出現了10只…#b#o1140130##k 這簡直就是惡作劇！");
		}
	if (status == 3){
		qm.forceCompleteQuest();
		qm.dispose();
}
}

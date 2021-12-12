/*
	名字:	救救孩子们
	地圖:	避难准备中
	描述:	914000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("不行啊！ #b#h0##k... 拋棄那些孩子， 只剩下我們苟且偷生... 那人生還有什麼意義！我知道對您來說只是很大的負擔...可是請您再考慮看看吧！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("真是的！ 好像還有幾個孩子留在森林內！ 我們不可能丟下孩子們逃走。 #b#h0##k... 請你去救救那些孩子吧！ 我知道對受的您說這些話真的很厚顏無恥， 可是... 只能拜託您了！");
	if (status == 1)
		qm.sendNext("#b孩子們應該在森林深處#k。 在黑魔法師追來這裡之前，方舟要趕緊出發，請盡快救回那些孩子吧！");
	if (status == 2)
		qm.sendNextPrev("最重要的是不要驚慌。 狂狼勇士。諾您想要確認任務進行情況，請按下 #bQ按鍵#k 確認任務欄位.");
	if (status == 3)
		qm.sendPrev("拜託您了！#b#h0##k！請救救那些孩子！我不希望有人再犧牲於黑魔法師的魔掌之下！");
	if (status == 4){
		qm.forceStartQuest();
		qm.dispose();
}
}
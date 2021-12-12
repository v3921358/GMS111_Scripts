/*
	名字:	狼的考试
	地圖:	群狼原野
	描述:	140010210
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("看來你還是沒有能力領養一隻狼。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("我們是一群狼在尋找我們遺失的孩子。我聽說你在照顧我們的孩子。我們感謝你的好意，但現在是把我們的孩子還給我們的時候了。");
	if (status == 1)
		qm.sendNextPrevS("狼人是我的朋友，我非常喜歡它，難道就不能讓我們在一起麼。");
	if (status == 2)
		qm.sendAcceptDecline("我們理解，但我們不會離開我們的孩子。如果你真的想擁有一隻狼，就必須通過我們的考驗，看你是否配養一隻狼#b準備好接受狼的測試了嗎？？");
	if (status == 3){
		qm.forceStartQuest();
		qm.warp(914030000, 0);
		qm.resetMap(914030000);
		qm.dispose();
}
}
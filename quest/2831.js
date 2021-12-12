/*
	名字:	伊安的愤怒
	地圖:	勇士部落
	描述:	102000000
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
		qm.sendAcceptDecline("那麼，我也來用用強化的變身祕藥看一看？");
	if (status == 1){
		qm.forceStartQuest();
		qm.gainItem(4033056, -1);
		qm.spawnMonster(100004,3);//召唤怪物
		qm.sendNextPrev("#b(菇菇寶貝出現了！)#k 呀！ 這是什麼！ 啊呀呀呀！！！");
		}
	if (status == 2)
		qm.sendOk("怎麼可以把這些當成禮物送給人家呢？ 我非常非常害怕菇菇寶貝的！！！ 小時候遭到巨大菇菇寶貝的襲擊曾經一度失憶了呢。 太過分了！ 難道，#b#p1022100##k是故意這樣做的嗎？ 或又是#b#p1020000##k做的?？！ 啊啊啊！！！");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.dispose();
}
}

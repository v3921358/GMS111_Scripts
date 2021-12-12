/*
	名字:	魔法阵中央
	地圖:	黑魔法师的研究所
	描述:	261040000
*/

function start() {
	if (cm.getQuestStatus(334500) == 1 && cm.getQuestStatus(334501) == 1 && cm.getQuestStatus(334502) == 1) {
	if (cm.haveItem(4031739, 1) && cm.haveItem(4031740, 1) && cm.haveItem(4031741, 1)) {
		cm.gainItem(4031739, -1);
		cm.gainItem(4031740, -1);
		cm.gainItem(4031741, -1);
		cm.getPlayer().updateQuestCustomData(3345,"4");
	} else {
		cm.sendOk("魔法陣需要先啟動其他三個魔法陣。 並攜帶一個#v4031739:#一個#v4031740:#一個#v4031741:#。");
		}
	cm.dispose();
}
}
/*
	名字:	勇士部落警告牌
	地圖:	风沙山丘
	描述:	102020100
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	switch(cm.getPlayer().getMapId()) {
	case 102020100:
		if (status == 0) {
		if (cm.getQuestStatus(22530) == 1) {
		if (cm.getQuestStatus(225970) != 1) {
			cm.forceStartQuest(225970,"1");
			cm.sendNext("你已修复第一个公告牌！请依照顺序依次修复公告牌！");
		} else {
			cm.sendNext("请依照顺序依次修复公告牌！");
			}
		} else {
			cm.sendNext("這是個徵兆，有一切未知的可能正在等待著你的到來！");
			}
			cm.dispose();
			}
			break;
	case 102030000:
		if (status == 0) {
		if (cm.getQuestStatus(225970) == 1) {
			cm.forceStartQuest(225971,"1");
			cm.sendNext("你已修复第二个公告牌！请依照顺序依次修复公告牌！");
		} else {
			cm.sendNext("這是個徵兆，有一切未知的可能正在等待著你的到來！");
			}
			cm.dispose();
			}
			break;
	case 102030100:
		if (status == 0) {
		if (cm.getQuestStatus(225971) == 1) {
			cm.forceStartQuest(225972,"1");
			cm.sendNext("你已修复第三个公告牌！请依照顺序依次修复公告牌！");
			} else {
			cm.sendNext("這是個徵兆，有一切未知的可能正在等待著你的到來！");
			}
			cm.dispose();
			}
			break;
	case 102030200:
		if (status == 0) {
		if (cm.getQuestStatus(225972) == 1) {
			cm.forceStartQuest(225973,"1");
			cm.sendNext("你已修复第四个公告牌！请依照顺序依次修复公告牌！");
		} else {
			cm.sendNext("這是個徵兆，有一切未知的可能正在等待著你的到來！");
			}
			cm.dispose();
			}
			break;
	case 102030300:
		if (status == 0) {
		if (cm.getQuestStatus(225973) == 1) {
			cm.forceStartQuest(22597,"5");
			cm.sendNext("你已修复完所有公告牌，请回去报告！");
		} else {
			cm.sendNext("這是個徵兆，有一切未知的可能正在等待著你的到來！");
			}
			cm.dispose();
			}
			break;
}
}
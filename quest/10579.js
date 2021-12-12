/*
	名字:	新功能！！寻找组队
	地圖:	冒险岛运营员
	描述:
*/

var status = -1;

function start(mode, type, selection) {
	qm.openUI(21);
	qm.sendOk("新的#b组队搜索#k功能将帮助您搜索朋友、队员或探险队。您可以通过按P键并单击#b搜索按钮#k来找到它\r\n祝你今天愉快.");
	qm.forceStartQuest();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();
	qm.dispose();
}

/*
	名字:	最后演奏的歌曲
	地圖:	废都广场大厅
	描述:	103040000
*/

var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//开始任务
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}
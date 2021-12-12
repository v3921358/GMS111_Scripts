/*
	名字:	意想不到的礼物1
	地圖:
	描述:	米乐
*/

var status = -1;

function start(mode, type, selection) {
		qm.forceStartQuest();
                                qm.forceCompleteQuest();
                                qm.removeAll(4032502);
                                qm.gainExp(3000);
		qm.dispose();
}

function end(mode, type, selection) {
                                qm.forceCompleteQuest();
	                qm.dispose();
}

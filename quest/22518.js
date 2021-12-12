/*
	名字:	炎海的未尽的妄想
	地圖:	孢子山丘
	描述:	100020000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("看不你的不凡表現，我很感到欣慰，現在破例先讓你進去修煉場裡試煉一下，如果你通過考驗，我就頒發你正式進入修煉場的通行證給你。");
	if (status == 1)
		qm.sendAcceptDecline("消滅掉100只#b修煉生蘑菇仔#k。\r\n#b(如果未達到要求中途退出，請放弃任務後重新接受)");
	if (status == 2){
		qm.forceStartQuest();
		qm.warp(910060100,1);
		qm.dispose();
}
}
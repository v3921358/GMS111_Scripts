/*
	名字:	瓦莱莉危险的忠诚心 1
	地圖:	诺特勒斯码头
	描述:	120000000
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
		qm.sendAcceptDecline("#t04000670#居然無效。 切！\r\n不過我不會就此甘休的，還有後續考驗呢。 這次就請你把可怕地#r#t4033014##k拿給他看看。 \r\n");
	if (status == 1){
		qm.forceStartQuest();
		qm.warp(912040400);
		qm.dispose();
}
}
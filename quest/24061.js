/*
	名字:	布鲁斯的委托2
	地圖:	射手村
	描述:	100000000
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
		qm.sendNext("不好意思，有事情还想在拜托你一下！");
	if (status == 1)
		qm.sendAcceptDecline("我现在正在研究古代蘑菇的孢子，发现古代蘑菇的孢子和#b#t4032966##k很相似，我想查明清楚原因，所以你能帮我去搜集新鲜的#v4032966:#吗？");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
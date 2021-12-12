/*
	名字:	让我们修炼吧
	地圖:
	描述:	米乐
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
		qm.sendNext("拜託了。 主人！ 我們就去修行吧，直到可以輕鬆擊退#o2220100#時為止的修練。");
	if (status == 1)
		qm.sendAcceptDecline("聽說這附近有修煉場，但是具體的情况我們都不清楚，還是去找#b#p1012003##k問問看。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
/*
	名字:	第四次情报收集完成
	地圖:	林中之城
	描述:	105000000
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
		qm.sendNext("雖然在#b#m102010100##k找到了人偶師的根據地，但是最好還是不要輕舉妄動，應該回去與#b#p1002104##k彙報下情况。");
	if (status == 1)
		qm.sendAcceptDecline("哦，等等！！ 我想起來了。 看到那邊的#b#p1061006##k了嗎？ 那尊雕像的來歷不詳，上面潦草地寫著亂七八糟的符號，很可能是#b洞穴的密碼#k，你可以過去仔細看看，說不定會有什麼發現。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
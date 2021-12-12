/*
	名字:	送便当
	地圖:	客厅
	描述:	100030101
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
		qm.sendAcceptDecline("去農場工作的#b爸爸#k忘了帶便當出門。你幫待在#b#m100030300##k的爸爸 #b#v4032448:##t4032448##k送過去。");
	if (status == 1){
		if (!qm.haveItem(4032448))
		qm.gainItem(4032448, 1);
		qm.sendNextPrev("呼呼，#h0#果然是個乖孩子~ 那麼立刻從#b家往外走一直向左邊#k走。爸爸肚子應該很餓了，你的動作要快。");
		}
	if (status == 2)
		qm.sendPrev("如果不小心把便當弄掉了，要立刻回家。我會再幫你包一個。");
	if (status == 3){
		qm.forceStartQuest();
		qm.evanTutorial("UI/tutorial/evan/5/0", 1);
		qm.dispose();
}
}
/*
	名字:	侠客之路
	地圖:	废都爵士酒吧
	描述:	103000003
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 4) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你想選擇俠客之路嗎？ 俠客是主要使用短劍的飛俠。 是在近距離快速攻擊敵人，搶走敵人身上的東西的職業。");
	if (status == 1)
		qm.sendNextPrev("其特長是通過#b精准短刀#k和#b快速短刀#k提高短劍的熟練度和攻擊速度後，用#b神通術#k攻擊多個敵人，搶奪物品，或者使用#b迴旋斬#k向敵人發動連續攻擊。");
	if (status == 2)
		qm.sendNextPrev("#b金錢護盾#k和#b盾防精通#k可以使近距離戰鬥的危險降到最低。 通過#b命運#k，可以提高自己的攻擊力。");
	if (status == 3)
		qm.sendNextPrev("嗯……好像說太多了。 你想選擇俠客之路嗎？ 那就參加考試吧。 不是什麼複雜的考試。 只要進入準備好的考場，消滅怪物，蒐集#r30個含有黑暗力量的珠子#k就可以了。 內容非常簡單，但是……那裡的怪物比普通怪物更强，會不會有問題呢？");
	if (status == 4)
		qm.sendAcceptDecline("考試的時候藥水用光了的話，就必須#b放弃任務重新開始#k。 所以必須準備好之後再進去。 好的，考試馬上開始。 準備好了的話，我就把你送到考試沼澤去。");
	if (status == 5){
		qm.forceStartQuest();
		qm.warp(910370000,0);
		qm.dispose();
}
}

function end(mode, type, selection) {
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
		qm.sendYesNo("#t4031013#全部拿來啦。 很能幹嘛？ 讓你成為俠客，好像不錯。 那麼……我馬上讓你變成俠客。 準備好了嗎？\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(420);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("好的，從現在開始你就是#b俠客#k。 俠客是以快速行動和技巧壓制敵人的人。希望你能更加努力修煉");
		}
	if (status == 2)
		qm.sendOk("刺客必須變得更強。 但是决不能把那種力量用在弱者身上。 把自己的力量用在正確的事情上，比變强更加困難。");
	if (status == 3){
		qm.dispose();
}
}
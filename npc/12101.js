/*
	名字:	瑞恩
	地圖:	彩虹村
	描述:	1000000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("這裡是位於彩虹島東北部的叫#b#m1010000##k的村落…你已經知道彩虹島是新手練習的地方吧？ 這裡只出現比較弱的怪獸，所以你放心吧。");
	if (status == 1)
		cm.sendNextPrev("如果你希望變得更强大，就去#b#m2000000##k，在那裡乘船去#b金銀島#k。 那個島的規模很大，這裡可是比不上得。");
	if (status == 2)
		cm.sendPrev("聽說在金銀島可以學到專門的職業技能。 好象是叫#b#m102000000##k來著…？ 有人說那裡還有非常荒凉的高原村莊，在那裡有很多戰士。 是高原…到底是怎麼樣的地方呢？");
	if (status == 3){
		cm.dispose();
}
}
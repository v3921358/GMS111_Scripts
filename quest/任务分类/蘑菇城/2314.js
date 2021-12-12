/*
	名字:	探索蘑菇森林
	地圖:	蘑菇森林小道
	描述:	106020000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("請不要拋棄我們菇菇王國啊。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("要拯救公主，首先必須調查菇菇森林。可是企鵝國王那傢伙不知用了什麼法術形成了一個強大的結界，阻斷了進入城堡的道路。請您前往調查吧。");
	if (status == 1)
		qm.sendPrev("菇菇森林的結界只要從這裡一直往東走的話，就可以在 #b#m106020300##k看見。 請小心。 聽說凶狠的怪物們已經完全掌控森林了。");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}	
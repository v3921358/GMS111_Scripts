/*
	名字:	基础体力训练2
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("您還沒準備好獵殺#o0100132#嗎？最好把該準備的都準備好再去狩獵比較好。如果不好好準備，在途中一命嗚呼了，那只會讓人遺憾罷了！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("那麼要繼續基礎體力鍛煉嗎？準備好了嗎？請您再確認劍是否裝備好了，技能和藥是否已經放入快捷欄內，然後就開始吧！");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}
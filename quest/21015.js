/*
	名字:	基础体力训练1
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("還還說您是英雄，怎麼會這麼猶豫不決？您沒聽過打鐵要趁熱嗎？想要變強的話，那就快點開始吧！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("那麼，說明就到此結束，現在進入下一個階段。下一個階段是什麼呢？剛剛才跟您說過不是嗎？要修煉變強到你可以除掉黑魔法師的程度。");
	if (status == 1)
		qm.sendNextPrev("您雖然過去是英雄，可是那已經是幾百年前的事了。就算不是黑魔法師的詛咒，待在冰雪當中這麼長的時間，身體一定會變得很僵硬吧！首先先鬆開僵硬的身體。您問該怎麼做是嗎？");
	if (status == 2)
		qm.sendAcceptDecline("體力就是國力！英雄的基礎就是體力！…您沒聽過這些話嗎？當然要先做#b基礎體力鍛煉#k…啊！您喪失記憶所以什麼都忘了。不知道也沒關係。那麼現在就進入基礎體力鍛煉吧！");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}
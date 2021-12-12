/*
	名字:	基础体力训练3
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.sendOkS("#b(用害怕的心情按下拒絕。可是又不能這樣逃走..鎮定心情後再談看看.)#k",3);
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("現在筋骨應該都鬆開了吧！此時更嚴格的鍛鍊，才能擁有完美的基礎體力。好！那麼我們繼續進行基礎體力鍛煉。");
	if (status == 1)
		qm.sendNextPrev("現在前往 #b#m140020200##k 擊退 #r#o0100133##k 只要擊退....#r20隻#k 左右，就會鍛煉體力有很大的幫助。好，快去吧...咦？你有話想說嗎?");
	if (status == 2)
		qm.sendNextPrevS("#b........為什麼數字愈來愈多.....?");
	if (status == 3)
		qm.sendNextPrev("當然會增加。哎呀，您覺得 20隻太少嗎？ 那麼去擊退100隻怎麼樣啊？不，不。既然要修煉，那麼就效法奇幻村的某人要求去抓 999隻怪物..");
	if (status == 4)
		qm.sendNextPrevS("#b不，不用啦！這樣就夠了");
	if (status == 5)
		qm.sendAcceptDecline("哎呀哎呀，沒有必要推辭。我完！全！的！了解英雄想快點變強的心情。英雄真的太偉大了...");
	if (status == 6)
		qm.sendNextS("#b(再聽一次好像真的要我去擊退 999隻，乾脆答應算了.)#k",3);
	if (status == 7)
		qm.sendPrev("那麼請前往 #b#m140020200##k擊退 #o0100133# 20隻吧。");
	if (status == 8){
		qm.forceStartQuest();
		qm.dispose();
}
}
/*
	名字:	一眼就能查看活动
	地圖:	冒险岛运营员
	描述:
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("你好，#b#h0##k。\ r\n各種活動可以讓你在#r冒險島#k度過快樂的每一天。 你在積極參加各種活動嗎？ 有沒有因為活動內容太豐富而錯過活動的經歷呢？ 為了讓大家不錯過每一個活動，我想告訴你一個好消息。");
	if (status == 1)
		qm.sendNextPrev("如果點擊畫面上端的#r[活動]#k按鈕，即可查看名為#b[活動清單]#k的選單。 只要點擊該選單，就可以查看所有正在進行的活動了。");
	if (status == 2)
		qm.sendPrev("你可以看到正在進行什麼活動，活動的開始和結束時間，可以獲得什麼道具等有用的資訊。");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}
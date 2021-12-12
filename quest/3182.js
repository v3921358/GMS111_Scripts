/*
	名字:	阿尔卡斯特的水晶
	地圖:	雪域集市
	描述:	211000100
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("#b#p2161004##k的信已經交給了他的家人。 希望你能幫我一個忙……");
	if (status == 1)
		qm.sendNextPrev("現在#p2161004#的靈魂之所以會受到寒氣的折磨，是因為獅子王向#p2161004#下了詛咒。 要想解開那個詛咒，必須切斷獅子王和#p2161004#之間的詛咒的力量……");
	if (status == 2)
		qm.sendNextPrev("你帶著這個#v2430159:#水晶過去。 這個水晶裏含有我的魔法的力量。 在#p2161004#所在的地方使用水晶，獅子王施加在#p2161004#身上的詛咒就會解開。");
	if (status == 3)
		qm.sendAcceptDecline("這個水晶我就送給你，但是如果你弄丟了，重新製作就需要#r1000萬金幣#k。 一定要記住。 我會把你送到獅子王之城入口處，你快去找莫特吧。");
	if (status == 4){
		qm.forceStartQuest();
		qm.gainItem(2430159, 1);
		qm.warp(211060000, 0);
		qm.dispose();
}
}

function end(mode, type, selection) {
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
		qm.sendNext("是你啊……你把我的信交給阿爾卡斯特了嗎？");
	if (status == 1)
		qm.sendNextPrev("什麼？ 我的詛咒解開了？ 怎麼會……");
	if (status == 2)
		qm.sendNextPrev("咦……是真的啊……現在我不覺得冷了！ 也不疼了！ 可以自由地移動了！ 哈哈哈……真是謝謝你……");
	if (status == 3)
		qm.sendPrev("我欠了阿爾卡斯特一個人情……當然也欠你一個人情……作為答謝，如果你能蒐集到#b#t4310009##k和#b#t4310010##k，我就用在城裡找到的#b裝備#k和#b武器#k跟你交換。\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 12000 exp");
	if (status == 4){
		qm.forceCompleteQuest();
		qm.gainItem(2430159, -1);
		qm.gainExp(12000);
		qm.dispose();
}
}

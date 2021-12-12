/*
	名字:	送给英雄的礼物
	地圖:	寒冷森林4
	描述:	140090400
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	}
	if (status == 1) {
		qm.sendOk("對英雄很有幫助的禮物。請不要拒絕。");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("啊，英雄...我好想你喔！  \r\n#b#L0#(害羞的樣子)#l");
	if (status == 1)
		qm.sendAcceptDecline("我從以前就決定遇見英雄要送您一個禮物...我知道您忙著回村莊，可是...可以收下我誠心的禮物嗎?");
	if (status == 2)
		qm.sendOk("禮物的材料就放在這附近的箱子裡面。雖然有點麻煩，可是請您將箱子打破後，裡面的材料 #b#v4032309:##t4032309##k 和 #b#v4032310:##t4032310##k帶回來。我就會立刻幫您組裝。");
	if (status == 3){
		qm.forceStartQuest();
		qm.summonMsg(18);
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
		qm.sendNext("材料都帶回來了嗎？那麼請您等一下，只要這樣組裝一下.....");
	if (status == 1)
		qm.sendNextPrev("好了，椅子做好了！嘿嘿！就算是英雄也有疲勞的時候，因此我從很早以前就想送英雄一把椅子#v3010062:#當作禮物。");
	if (status == 2)
		qm.sendPrev("就算是英雄也不可能永遠都很強大。英雄應該也有疲勞吃力的時候，有時也會感到脆弱。可是能夠克服那些的人才配當英雄不是嗎?\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i3010062# 1 #t3010062# \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
	if (status == 3){
		qm.forceCompleteQuest();
		qm.gainItem(4032309,-1);
		qm.gainItem(4032310,-1);
		qm.gainItem(3010062, 1);
		qm.summonMsg(19);
		qm.gainExp(95);
		qm.dispose();
}
}
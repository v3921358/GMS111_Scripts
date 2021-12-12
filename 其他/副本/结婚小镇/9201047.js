/*
	名字:	The Glimmer Man
	地圖:	670010200
	描述:	670010200
*/

function start() {
	if (cm.getPlayer().getMapId() == 670011000) {
		cm.gainNX(2000);
		cm.warp(670010000,0);
		cm.dispose();
		return;
		}
		var em = cm.getEventManager("Amoria");
	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.dispose();
		return;
		}
	if (!cm.isLeader()) {
		cm.sendOk("很抱歉，我不能與妳交談，請告訴妳的組長與我談話。");
		cm.dispose();
		return;
		}
	if (em.getProperty("apq1").equals("0")) {
	//if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		if (cm.haveItem(4031597,20)) {
		em.setProperty("apq1", "1");
		cm.mapMessage(5, "Magik Fiarry已經在地圖的某個地方誕生了。");
		cm.sendOk("很不錯，現在请消灭这只怪物，然后把怪物身上掉出来的#v4031596:##b#t4031596##k帶回來。");
		cm.spawnMonster(9400518,1);
		cm.removeAll(4031597);
	} else {
		//  cm.sendOk("幫我個忙，消滅所有的怪物，好嗎?");
		cm.sendOk("來到了我的領地，就必須要達成我的要求，不然你將永遠被困在這裡，先要找20個#v4031597:##b#t4031597##k給我，然後我在告訴你下一步。");
		}
	} else if (em.getProperty("apq1").equals("1")) {
		if (cm.haveItem(4031595)) {
			cm.gainItem(4031595, -1);
			cm.showEffect(true, "quest/party/clear");
			cm.playSound(true, "Party1/Clear");
			cm.sendOk("你可以跳到破鏡子裏走出去。");
			em.setProperty("apq1", "2");
		} else {
			cm.sendOk("#v4031596:##b#t4031596##k丢在镜子跟前，等镜子破裂之后，把#v4031595:##b#t4031595##k带回来给我。");
			}
			}
		cm.dispose();
}
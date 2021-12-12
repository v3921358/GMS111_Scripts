/*
	名字:	艾琳
	地圖:	毒雾森林
	描述:	930000000
*/

function start() {
	switch (cm.getPlayer().getMapId()) {
	case 930000000:
		cm.sendOk("謝謝你來幫忙，這裡出現了不少麻煩！在進入傳送點之前，請做好充分準備，裡面是個極其危險的地方。");
		break;
	case 930000100:
		cm.sendOk("我們必須消滅這個地圖裏所有的怪物才能進入更深的地方。");
		break;
	case 930000200:
		cm.sendOk("那些被污染的植被堵住了前進的道路，必須得找到#v4001162:##b#t4001162##k才能清除掉障礙，該去哪裡找呢。");
		break;
	case 930000300:
		cm.warpParty(930000400);
		break;
	case 930000400:
		if (cm.haveItem(4001169, 10)) {
			cm.warpParty(930000500, 0);
			cm.gainItem(4001169, -10);
		} else if (!cm.haveItem(2270004)) {
			//cm.gainItem(2270004, 10);  任务未修复 4001169 改成怪物掉
			cm.sendOk("請幫我淨化這些精神被毒害的怪物，並收集10個#v4001169:##b#t4001169##k。");
		} else {
			cm.sendOk("請給我10個#v4001169:##b#t4001169##k。");
			}
			break;
	case 930000600:
		cm.sendOk("這裡就是污染的根源之地，請你消滅那個被封印的怪物。");
		break;
	case 930000700:
		if (cm.canHold(4001198, 1)) {
			cm.gainItem(4001198, 1);
			cm.gainExp(52000);
			cm.getPlayer().endPartyQuest(1206);
			cm.removeAll(4001161);
			cm.removeAll(4001162);
			cm.removeAll(4001163);
			cm.removeAll(4001164);
			cm.removeAll(4001169);
			cm.removeAll(2270004);
			cm.warp(930000800, 0);
		} else {
			cm.getPlayer().dropMessage(5, "請清理背包空間。");
			}
			break;
			}
		cm.dispose();
}
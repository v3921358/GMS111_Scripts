/*
	名字:	百草堂
	地圖:	抵达海盗船的路
	描述:	925100000
*/

function start() {
	if (cm.getPlayer().getMapId() == 925100700) {
		cm.removeAll(4001117);
		cm.removeAll(4001120);
		cm.removeAll(4001121);
		cm.removeAll(4001122);
		cm.warp(251010404,0);
		cm.dispose();
		return;
		}
	var em = cm.getEventManager("Pirate");
	if (em == null) {
		cm.sendOk("腳本錯誤，請稍後嘗試。");
		cm.dispose();
		return;
		}
	if (!cm.isLeader()) {
		cm.sendOk("很抱歉，我不能與妳交談，這樣做是違反規定的，如果妳想執行這項任務，請告訴妳的組長與我談話。");
		cm.dispose();
		return;
		}
	switch(cm.getPlayer().getMapId()) {
	case 925100000:
		cm.sendOk("在進入海盜船之前，先消滅掉這裡的所有怪物。");
		cm.dispose();
		break;
	case 925100100:
		var emp = em.getProperty("stage2");
		if (emp == null) {
			em.setProperty("stage2", "0");
			emp = "0";
			}
		if (emp.equals("0")) {
			if (cm.haveItem(4001120,0)) {
				cm.sendOk("接下來再找20塊#v4001121:##b#t4001121##k。");
				cm.gainItem(4001120,-20);
				em.setProperty("stage2", "1");
			} else {
				cm.sendOk("雖然已登上海盜船，但是必須要拿到海盜的憑證，才能方便行事，請先給我準備20塊#v4001120:##b#t4001120##k。");
				}
		} else if (emp.equals("1")) {
			if (cm.haveItem(4001121,0)) {
				cm.sendOk("最后还缺20塊#v4001122:##b#t4001122##k。");
				cm.gainItem(4001121,-20);
				em.setProperty("stage2", "2");
			} else {
				cm.sendOk("#v4001120:##b#t4001120##k只是初級憑證，還的繼續找20塊#v4001121:##b#t4001121##k。");
				}
		} else if (emp.equals("2")) {
			if (cm.haveItem(4001122,0)) {
				cm.sendNext("所有條件都準備好了，可以進入下一階段。");
				cm.gainItem(4001122,-20);
				em.setProperty("stage2", "3");
			} else {
				cm.sendOk("#v4001120:##b#t4001120##k#v4001121:##b#t4001121##k都够数量了，还缺少20塊#v4001122:##b#t4001122##k。");
				}
			} else {
				cm.sendOk("所有條件都準備好了，可以進入下一階段。");
				}
				cm.dispose();
				break;
	case 925100200:
		cm.sendNext("要攻擊海盜船，我們必須先摧毀守衛，把附近的海盜全部消滅掉，我們就能進入下一個階段。");
		cm.dispose();
		break;
	case 925100201:
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.sendNext("Excellent.");
			if (em.getProperty("stage2a").equals("0")) {
				cm.getMap().setReactorState();
				em.setProperty("stage2a", "1");
				}
		} else {
			cm.sendNext("These bellflowers are in hiding. We must liberate them.");
			}
			cm.dispose();
			break;
	case 925100300:
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.sendNext("Excellent.");
			if (em.getProperty("stage3a").equals("0")) {
				cm.getMap().setReactorState();
				em.setProperty("stage3a", "1");
				}
	   } else {
	   	cm.sendOk("These bellflowers are in hiding. We must liberate them。");
		}
		cm.dispose();
		break;
	case 925100202:
		cm.sendOk("。。。");
		cm.dispose();
	case 925100302:
		cm.sendOk("他們一生都致力於海盜領主，你認為合適就消滅他們。");
		cm.dispose();
		break;
	case 925100400:
		cm.sendOk("从这里的海盗身上获取到钥匙，然后关闭附近的4个船舱，以免里面的海盗出来支援，做完這項工作以後，我們才能前往最後的關卡。");
		cm.dispose();
		break;
	case 925100500:
		if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			cm.warpParty(925100600);
		} else {
			cm.sendOk("打敗所有的怪物！甚至海盜領主的爪牙!");
			}
			cm.dispose();
			break;
}
}
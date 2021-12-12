/*
	名字:	罗密欧
	地圖:	蒙特鸠密室
	描述:	261000011
*/

function start() {
	if (cm.getMapId() == 926100000) { //inside orbis pq
		cm.sendOk("很感謝你來幫助我，首先我們要找到進入實驗室的入口，圖書館裏到處亂堆放的書，也許會有什麼發現也說不定。");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100001) { //inside orbis pq
		cm.sendOk("聚集在這裡的怪物，阻擋了我們前進的道路，讓我們先消滅掉這些怪物，然後繼續前進。");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100100) { //inside orbis pq
		cm.sendOk("這是一個具有魔法的房間，我們必須修復好那些燒杯的漏洞，打破結界，才能開啟下一層通道。");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100300) { //inside orbis pq
		cm.sendOk("我有聽見愛人的聲音，就在實驗室的上方，我們所有人必須要到達實驗室的頂端。");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100400) { //inside orbis pq
		cm.sendOk("請快一些，希望時間還來得及，我們要快去救救我的愛人，茱麗葉就在前面的那個房間裏。");
		cm.dispose();
		return;
		}
	if (cm.getMapId() == 926100401) { //inside orbis pq
		cm.warpParty(926100500); //urete
		cm.dispose();
		return;
		}
		var chat = "#e<組隊任務：羅密歐與茱麗葉>#n \r\n卡帕萊特與蒙特鳩的衝突，導致我與朱莉葉不能相見，我很擔心我的愛人，怕這場紛爭會永遠無法消停下去，一定要找到化解這一切的方法。\r\n\r\n 2 Party Members, all level#r 10 and level 70 \r\n#b";
		chat += "\r\n#L0#進入任務地圖";
		cm.sendSimple(chat);
}

function action(mode, type, selection) {
	switch (selection) {
	case 0:
		if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
			cm.sendOk("很抱歉，裡面的怪物很危險，我不能讓你單獨去冒險，如果妳想執行這項任務，請告訴妳的組長與我談話。");
		} else {
			var party = cm.getPlayer().getParty().getMembers();
			var mapId = cm.getPlayer().getMapId();
			var next = true;
			var size = 0;
			var it = party.iterator();
			while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
		if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 200) {
				next = false;
				break;
				}
			size += (ccPlayer.isGM() ? 4 : 1);
				}
		if (next && size >= 2) {
			var em = cm.getEventManager("Romeo");
			if (em == null) {
				cm.sendOk("腳本錯誤，請稍後再試。");
			} else {
				var prop = em.getProperty("state");
				if (prop.equals("0") || prop == null) {
				em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
			} else {
				cm.sendOk("任務正在執行中，請嘗試其它頻道。");
				}
				}
			} else {
				cm.sendOk("2 Party Members, all level#r 70 and level 200");
				}
				}
				}
			cm.dispose();
}
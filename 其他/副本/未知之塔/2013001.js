/*
	名字:	帮佣易克
	地圖:	雅典娜禁地&amp;lt;中央塔&gt;
	描述:	920010100
*/

function start() {
	if (cm.getPlayer().getMapId() == 920011200) { //exit
		for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
		}
		cm.warp(200080101);
		cm.dispose();
		return;
		}
	var em = cm.getEventManager("OrbisPQ");
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
	if (em.getProperty("pre").equals("0")) {
		for (var i = 4001044; i < 4001064; i++) {
		cm.removeAll(i); //holy
		}
		cm.sendOk("救救我，我被困在這座塔里，請你收集20個#v4001063:#幫我解開封印。");
		cm.dispose();
		return;
		}
		switch (cm.getPlayer().getMapId()) {
	case 920010000:
		cm.warpParty(920010000, 2);
		break;
	case 920010100:
		if (em.getProperty("stage").equals("4")) {
		if (em.getProperty("finished").equals("0")) {
		cm.warpParty(920010800); //GARDEN.	
	} else {
		cm.sendOk("謝謝你救了我們，請您找女神說話。");
		cm.dispose();
		}
	} else {
		cm.sendOk("請先收集完四個女神雕像的碎片，修復女神像後，再來找我想辦法復活女神。");
		cm.dispose();
		}
		break;
	case 920010200: //walkway
		if (!cm.haveItem(4001050, 30)) {
		cm.sendOk("請消滅這裡的怪物，並將30個#v4001050:##b#t4001050#帶回來。");
		cm.dispose();
	} else {
		cm.removeAll(4001050);
		cm.gainItem(4001048, 1); //first piece
		cm.givePartyExp(7000);
		clear();
		}
		break;
	case 920010300: //storage
		if (!cm.haveItem(4001051, 15)) {
		cm.sendOk("女神像其中一塊碎片在這裡，要找到15個#v4001051:##b#t4001051##k才能慢慢融合。");
		cm.dispose();
	} else {
		cm.removeAll(4001051);
		cm.gainItem(4001045, 1); //second piece
		cm.givePartyExp(7000);
		clear();
		}
		break;
	case 920010400: //lobby
		if (em.getProperty("stage3").equals("0")) {
		cm.sendOk("音樂可以使女神塔充滿愉快，以往我們都是按照日期來播放不同的音樂，請你找到合適的唱片，使用音樂盒撥放\r\n#v4001056:#星期日\r\n#v4001057:#星期一\r\n#v4001058:#星期二\r\n#v4001059:#星期三\r\n#v4001060:#星期四\r\n#v4001061:#星期五\r\n#v4001062:#星期六\r\n");
	} else if (em.getProperty("stage3").equals("1")) {
		if (cm.canHold(4001046, 1)) {
		cm.gainItem(4001046, 1); //third piece
		cm.givePartyExp(7000);
		clear();
		em.setProperty("stage3", "2");
	} else {
		cm.sendOk("無法收納物品，請清理背包空間。");
		}
		} else {
		cm.sendOk("又恢復了往日的氣息，謝謝你！");
		}
		break;
	case 920010700: //on the way up
		if (em.getProperty("stage6").equals("0")) {
		var react = Array();
		var total = 0;
		for (var i = 0; i < 3; i++) {
	if (cm.getMap().getReactorByName("" + (i + 1)).getState() > 0) {
		react.push("1");
		total += 1;
		} else {
		react.push("0");
		}
		}
	if (total != 2) {
		cm.sendOk("女神塔的控制系統出現嚴重問題，需要打開上面三個啟動杆其中的兩個，然後由組長與我交談，我才能瞭解操作情况。");
	} else {
		var num_correct = 0;
		for (var i = 0; i < 3; i++) {
		if (em.getProperty("stage62_" + i).equals("" + react[i])) {
		num_correct++;
		}
		}
	if (num_correct == 2) {
		if (cm.canHold(4001049, 1)) {
		clear();
		cm.gainItem(4001049, 1); //sixth
		cm.givePartyExp(7000);
		em.setProperty("stage6", "1");
	} else {
		cm.sendOk("無法收納物品，請清理背包空間。");
		cm.dispose();
		}
	} else {
		cm.showEffect(true, "quest/party/wrong_kor");
		cm.playSound(true, "Party1/Failed");
		if (num_correct >= 1) { //this should always be true
		cm.sendOk("請換一根操縱杆試試。");
		cm.dispose();
	} else {
		cm.sendOk("請再次重新調試操縱杆。");
		cm.dispose();
		}
		}
		}
	} else {
		cm.sendOk("謝謝你，女神塔的又開始恢復運作了！");
		}
		break;
	case 920010800:
		cm.sendNext("要復活女神只必須要找到生命草，而生命草藏在遠古精靈的身上，要將遠古精靈引誘出來的方法，只能在花壇裏種出黑色的食人花!");
		break;
	case 920010900:
		cm.sendNext("這是塔的監獄，你想一直待在這裡嗎。");
		break;
	case 920011000:
		cm.sendNext("快些出去，這裡不是你來的地方。");
		break;
		}
	cm.dispose();
}

function clear() {
	cm.showEffect(true, "quest/party/clear");
	cm.playSound(true, "Party1/Clear");
}
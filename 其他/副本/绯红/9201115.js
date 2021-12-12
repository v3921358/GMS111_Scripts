/*
	名字:	战争神像
	地圖:	宗师议会大厅
	描述:	610030600
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (!cm.isLeader()) {
		cm.sendOk("很抱歉，我不能與妳交談，請讓妳的組長與我談話。");
		cm.dispose();
		return;
		}
	var em = cm.getEventManager("CWKPQ");
	if (em != null) {
		if (em.getProperty("glpq6").equals("0")) {
		if (status == 0)
			cm.sendNext("歡迎來到扭曲大師要塞，我將成为你今晚的主人...哦.......hahaha。");
		if (status == 1)
			cm.sendNextPrev("我正在為你們的到來準備盛大的歡迎典禮...哦...想想都興奮....hahaha。");
		if (status == 2) {
			cm.sendOk("先讓我的守衛者為你們的到來洗禮。");
			cm.mapMessage(6, "Engarde! Master Guardians approach!");
			for (var i = 0; i < 10; i++) {
			var mob = em.getMonster(9400594);
			cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1337 + (java.lang.Math.random() * 1337), 276));
			}
			for (var i = 0; i < 20; i++) {
			var mob = em.getMonster(9400582);
			cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1337 + (java.lang.Math.random() * 1337), 276));
			}
			em.setProperty("glpq6", "1");
			cm.dispose();
			}
		} else if (em.getProperty("glpq6").equals("1")) {
			if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
			if (status == 0)
				cm.sendNext("呃！！！！我可愛的守衛者呢？你們居然敢做出這樣的事情，不可原諒。");
			if (status == 1) {
				cm.sendNext("接下來，為你們引薦下我的朋友們，哦.......hahaha。");
				cm.mapMessage(6, "Twisted Masters approach!");

				//MV or Heron
				var mob = em.getMonster(9400589);
				cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-1000, 276));

				//Margana
				var mob = em.getMonster(9400590);
				cm.getMap().spawnMonsterOnGroundBelow(mob, new java.awt.Point(-22, 1));

				//Red Nirg
				var mob2 = em.getMonster(9400591);
				cm.getMap().spawnMonsterOnGroundBelow(mob2, new java.awt.Point(-22, 276));

				//Hsalf
				var mob4 = em.getMonster(9400593);
				cm.getMap().spawnMonsterOnGroundBelow(mob4, new java.awt.Point(496, 276));

				//Rellik
				var mob3 = em.getMonster(9400592);
				cm.getMap().spawnMonsterOnGroundBelow(mob3, new java.awt.Point(-496, 276));

				em.setProperty("glpq6", "2");
				cm.dispose();
				}
			} else {
				cm.sendOk("請享受你的盛宴。");
				cm.dispose();
				}
		} else if (em.getProperty("glpq6").equals("2")) {
			if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
				cm.sendOk("什麼？氣死我了………..這不可能發生。");
				cm.mapMessage(5, "進入下一階段的門戶已經打開！");
				cm.dispose();
				em.setProperty("glpq6", "3");
			} else {
				cm.sendOk("一點都不好玩！.......hahaha。");
				cm.dispose();
				}
			} else {
				cm.sendOk("進入下一階段的門戶已經打開！");
				cm.dispose();
				}
			} else {
				cm.dispose();
}
}
/*
	����:	ս������
	�؈D:	��ʦ������
	����:	610030600
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (!cm.isLeader()) {
		cm.sendOk("�ܱ�Ǹ���Ҳ����c����Մ��Ո׌���ĽM�L�c��ՄԒ��");
		cm.dispose();
		return;
		}
	var em = cm.getEventManager("CWKPQ");
	if (em != null) {
		if (em.getProperty("glpq6").equals("0")) {
		if (status == 0)
			cm.sendNext("�gӭ��Ť����Ҫ�����Ҍ���Ϊ����������...Ŷ.......hahaha��");
		if (status == 1)
			cm.sendNextPrev("�����ڞ��ゃ�ĵ���ʂ�ʢ��Ěgӭ��Y...Ŷ...���붼�d�^....hahaha��");
		if (status == 2) {
			cm.sendOk("��׌�ҵ����l�ߞ��ゃ�ĵ���ϴ�Y��");
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
				cm.sendNext("�����������ҿɐ۵����l���أ��ゃ��Ȼ�������@�ӵ����飬����ԭՏ��");
			if (status == 1) {
				cm.sendNext("�������ゃ���]���ҵ����т���Ŷ.......hahaha��");
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
				cm.sendOk("Ո�������ʢ�硣");
				cm.dispose();
				}
		} else if (em.getProperty("glpq6").equals("2")) {
			if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
				cm.sendOk("ʲ�N���������ˡ�����..�@�����ܰl����");
				cm.mapMessage(5, "�M����һ�A�ε��T���ѽ����_��");
				cm.dispose();
				em.setProperty("glpq6", "3");
			} else {
				cm.sendOk("һ�c�������棡.......hahaha��");
				cm.dispose();
				}
			} else {
				cm.sendOk("�M����һ�A�ε��T���ѽ����_��");
				cm.dispose();
				}
			} else {
				cm.dispose();
}
}
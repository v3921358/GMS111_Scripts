/*
	����:	ħ��ͼ��ݽ���
	�؈D:	ħ��ͼ���
	����:	910110000
*/

function start() {
	if (cm.isQuestActive(20718) && cm.getQuestStatus(20732) != 1) {
		cm.forceStartQuest(20732,"1");
		cm.spawnMonster(2220100, 7);  
		cm.sendOk("��⣡ ȥ���eð����Ĺ��");
	} else {
		cm.sendOk("ħ���D���^���䡣������");
		}
	cm.dispose();
}

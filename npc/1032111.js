/*
	����:	С��׮
	�؈D:	��ľ�ֶ���
	����:	101020300
*/

function start() {
	if (cm.isQuestActive(20716) && !cm.haveItem(4032142)) {
		cm.sendOk("����С�䘶�Y�ҵ���!   #v4032142:#");
		cm.gainItem(4032142, 1);
	} else if (cm.isQuestActive(24078) && !cm.haveItem(4032967)) {
		cm.sendOk("����С�䘶�Y�ҵ���!   #v4032967:#");
		cm.gainItem(4032967, 1);
	} else {
		cm.sendOk("ֻ��һ����ͨ��С�䘶��");
		}
	cm.dispose();
}
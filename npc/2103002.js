/*
	����:	������װ�ι�
	�؈D:	���ﰲ�ع���&amp;lt;����&gt;
	����:	260000303
*/

function start() {
	if (cm.isQuestActive(3923) && !cm.haveItem(4031578)) {
		cm.sendOk("���ڸ߹��װ�ι��Y�õ���#b#t4031578##k��#i4031578:#");
		cm.gainItem(4031578, 1);
        } else {
		cm.sendOk("ֻ��һ���߹��װ�ι�");
		}
	cm.dispose();
}

/*
	����:	Mo
	�؈D:	Dead Man's Gorge
	����:	610010004
*/

function start() {
	if(cm.getQuestStatus(8224) == 2) {
		cm.openShopNPC(35);
	} else {
		cm.sendOk("�ţ����Ԟ����ڿ��l����Ҫ�����@�e�@ȡЩʲ�N���ͱ��Ҫ�����҂���");
		}
	cm.dispose();
}

/*
	����:	ħ��ҩˮͼ��
	�؈D:	ħ������ͼ���
	����:	101000003
*/

function start() {
	if (cm.isQuestActive(2757) && !cm.haveItem(4033005)) {
		cm.sendOk("#b���ѽ��ҵ�#v4033005:#��");
		cm.gainItem(4033005, 1);
	} else {
		cm.sendOk("�@�eֻ�Е���������ʲ�NҲ�]�У�");
		}
	cm.dispose();
}

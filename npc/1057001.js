/*
	����:	����
	�؈D:	��������
	����:	103000000
*/

function start() {
	if (cm.getPlayer().getLevel() < 20) {
		if (cm.getPlayer().getSubcategory() != 1) {
		cm.sendOk("��һ���ڽ�ɫ�x�����x�����p�Є����ܺ����fԒ��");
	} else {
		cm.sendOk("���횽���2����9�����΄ղ��ܸ����fԒ��");
		}
	} else {
		cm.sendOk("�����l�����ܻ��@����ڡ�������ѽ���������N�����ˣ��ǆ᣿");
		}
	cm.dispose();
}
/*
	����:	������
	�؈D:	��Ҷ�� ��������
	����:	600000001
*/

var status = -1;

var skin = Array(0, 1, 2, 3, 4, 5);

function action(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		cm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		cm.sendNext("��ã��gӭ���o�w���ģ������������һ�Ӿo�¡�������Ƥ�w�᣿ֻҪ����  #b#v5153015:##t5153015##k�������������һֱ��Ҫ���ǷN���w~��");
	if (status == 1)
		cm.sendStyle("ʹ���҂��Č��ÙC�������������ί�����ǰ�����Լ���������ʲ�N�ӵ�Ƥ�w�o���x����ϲ�g���L��", skin);
	if (status == 2){
	if (cm.setAvatar(5153015, skin[selection]) == 1) {
		cm.sendOk("�������µĺ͸��Ƶ�Ƥ�w!");
	} else {
		cm.sendOk("��]�н����ί�������o�w����ȯ�������𣬿����҂����ܞ������@���¡�����");
		}
		cm.dispose();
}
}
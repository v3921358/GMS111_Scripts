/*
	����:	������˹
	�؈D:	��żʦ�Ķ�Ѩ
	����:	910510200
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (status == 0)
		cm.sendNext("���Ǻ�ɫ֮�����ż�����m��˹�� ����Ұ��õĺÎׂ���ż���o�ҳ����ˡ��������ҵĺ��¡� �mȻ�Һܐ��𣬲��^�@���ȷ���һ�R�� ��Ҫ���ٸҺ��������������Ժ�ħ�������˵����x�l�ģ��^�����^�㡣");
	if (status == 1)
		cm.sendPrevS("#b��������ɫ֮�� ���������� ���������N���£� �ڹ֫F�������ҵ���ż�c��ħ������ʲ�N�P�S�� ԓȥ����������������)#k", 3);
	if (status == 2){
		cm.forceStartQuest(21760, "0");
		cm.warp(102010100, 3);
		cm.dispose();
}
}
/*
	����:	�칷
	�؈D:	Σ�գ���ʱ����
	����:	931000420
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() <= 0) {//�жϵ�ͼ��û�й���
		cm.sendOk("���x������ң���ɫ֮�������Խ��Խ����");
	} else {
		cm.sendOk("Ո�����ɫ֮�����ځ����ң�");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.forceStartQuest(23131, "1");
	cm.warp(310000010);
	cm.dispose();
}
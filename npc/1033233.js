/*
	����:	С����
	�؈D:	��żʦ�ķ���
	����:	931040000
*/

function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
		cm.sendOk("#b(�Ђ��赹�ĺ��ӡ������c����ȥ׌�t�������ɣ�)");
	} else {
		cm.sendOk("Ո�������܇����й��");
		cm.dispose();
}
}

function action(mode, type, selection) {
	cm.warp(310050000,0);
	cm.forceStartQuest(24096,"1");
	cm.dispose();
}

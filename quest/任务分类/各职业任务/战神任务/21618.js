/*
	����:	�ǵĽ���
	�؈D:	Ⱥ��ԭҰ
	����:	140010210
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 1) {
		qm.sendOk("�������ɣ����ˣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("Ŷ������@ֻ�������ǡ������㿴���Ҹ��X��������ëƤ�����[����ĳ�N���������ǵȴ������ѵ�����?");
	if (status == 1)
		qm.sendAcceptDecline("�������صד����@���������ͱ�횾߂��㹻���������܆����������Ƿ����@�����ģ�");
	if (status == 2)
		qm.sendPrev("�F�ڵ��㑪ԓ���@���Y����ԇLԇһ��ͻ���@��ƿ�i����Ҳ��������ġ�");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("���ˣ��� Ո׌�_��׌�㿴��������ǿ������!!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1902018# 1 #t1902018#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.gainItem(1902017, -1);
		qm.gainItem(1902018, 1);
		qm.dispose();
}
}
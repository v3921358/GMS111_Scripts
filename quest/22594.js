/*
	����:	�ڶ�������Ľ��
	�؈D:	���Ϲ���
	����:	211000001
*/

var status = -1;

function start(mode, type, selection) {
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
		qm.sendNext("��ʲ�N�᣿ �������Ҫ�ҵ�ָ�c�������ţ� ���罩�ƺò��ã� ��Ȼ�Ǻ��¡� Ҫ�Ǜ]�н��ƣ�#m211000000#�İlչ�͕���öࡣ �������������ϣ�����܎��҂����罩�ơ�");
	if (status == 1)
		qm.sendNextPrevS("#b���@�Α�ԓ�Ǻ����˰ɣ���");
	if (status == 2)
		qm.sendNextPrev("�������������֮�ᣬ���С��̎�����������X��#t4000069#�д��ںڰ�����������С�ĵ�Ԓ���ܿ��ܕ��ܵ��ڰ���������Ⱦ�� ����#p2022003#һ�ӡ� �mȻϣ�������H������s׃��Խ��Խа���ˡ���");
	if (status == 3)
		qm.sendNextPrevS("#b#p2022003#����ʲ�N�e�`����");
	if (status == 4)
		qm.sendNextPrev("����ǰ���҂��l�F#p2022003#�}�u��#m211000001#�����ҵ�耳ס� �҂��mȻ��耳׿����ˣ������}�u��耳�һ����ֹһ�ѡ� ���핺�r��횼�ǿ�����ҵĹ��������С�");
	if (status == 5)
		qm.sendNextPrevS("#b������ �������Y��ʲ�N�|����");
	if (status == 6)
		qm.sendNextPrev("�Ǻܾ��ԁ�һֱ�����#m211000000#�Č�� ���w��ʲ�N�|�����Ҳ��ܸ��V�㣬�����ǽ^�������zʧ�Ė|���� �㲻Ҫ�ن��ˡ� �ǘӵ�Ԓ���ҿ��ܾ�Ҫ�������ˡ���");
	if (status == 7)
		qm.sendPrev("���^���ĘɫҲ�ò����@�N�y���� ���֛]��͵�ߌ��Ҳ�]�Ў�����͵�ߌ����ʲ�N�Ó��ĵ��أ� �mȻ#r���R�wϵ�_���ܱ���#k����ֻҪ�҂�ע����䣬��Ҫ׌�����zʧ�����ˡ�\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 28135 exp");
	if (status == 8){
		qm.forceStartQuest();
		qm.forceCompleteQuest();
		qm.gainExp(28135);
		qm.dispose();
}
}
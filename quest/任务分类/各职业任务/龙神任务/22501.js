/*
	����:	����������
	�؈D:
	����:	����
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.sendOk("�������ܾܽ^�j���������@��Ű����ͯ��");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�ѣ����ˡ��F�����ѽ���չʾ��������ʲ�ᣬ݆�����ˡ��C���o�ҡ����������ҵ�ʳ����I���ˡ����F�ڿ��������ҵ����������Ԋ��������ҡ�");
	if (status == 1)
		qm.sendNextPrevS("#b������߀�ǲ����װl����ʲ�ᣬ�����Ҳ���׌���@�ӵĿɑz��С��ⷰ��I�����ɣ�ʳ����f�أ������ʲ�᣿");
	if (status == 2)
		qm.sendNextPrev("�����҄��������׷��ǰ��������֪���ҳ�ʲ�᣿��ֻ֪������Ҽ�l�������Ǌ������������ҵ����ˡ�������ƴ��ң�");
	if (status == 3)
		qm.sendAcceptDecline("�����҂���ԓҼ���W���������I�ˡ����ˣ�����Ԗ|����ӛס�����ǂ��냺�����R�Ͼ�Ҫ���ˣ�");
	if (status == 4)
		qm.sendOkS("#b(�냺��������ǳ����I��������j����Ҳ�S���ְֿ��Խo��ҼЩ�P����ԵĽ��h��)",3);
	if (status == 5){
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
		qm.sendNext("��ʲ�ᣬС���c������֪������ʲ��᣿����ʲ�ᡭ�Ǻǣ����ҵ����ˣ�");
	if (status == 1)
		qm.sendNextPrevS("#b(���o�ְֿ��נ�)#k");
	if (status == 2)
		qm.sendNextPrev("��������Ҽ�l�������_��������Ҽֻ������᣿�ţ����е��������ǌ��F�ģ��������늅���Ա�������");
	if (status == 3)
		qm.sendNextPrevS("#b(�ְ��ƺ��������נ���Ҽ�l�����ţ�����С������� ���נ���Ԓ���ְ֕����ņ᣿)");
	if (status == 4)
		qm.sendNextPrev("����@��Ҽ�l�����������Ǿ�̫Σ�U�ˡ�������Ż������k���Ҳ��J���@��Ҽ�l������Ҳ�S�҂���ԓՈҼ��ð�U�ҁ횢�����Է��fҼ��");
	if (status == 5)
		qm.sendNextPrevS("b(ʲ�᣿�����נ������]�����eʲ�� !!)");
	if (status == 6)
		qm.sendNextPrev("��Ȼ���Ҹҿ϶��@����Ҽ�l������ֻ���F�ڊW���Y����ꑵ�С�~�ϡ�");
	if (status == 7)
		qm.sendNextPrevS("#b�������������������϶��ǌ��ģ��ґ�������Ҽ�l����������ֻ��Ҽֻ���棡Ҽ���أ�#k");
	if (status == 8)
		qm.sendNextPrev("�ǵģ��Һܴ_�����@��Ҽ�N��ֵ����棬��������K��Σ�U�������Ա�������");
	if (status == 9)
		qm.sendNextPrevS("#b(�����Լ��İ�ȫ������ò�Ҫ׌�κ���֪���נ���Ҽ�l����)#k");
	if (status == 10)
		qm.sendPrev("Ŷ�����f�����Җ|���j���棿�Ҳ��_����׌�ҿ��]Ҽ�¡�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 180 exp");
	if (status == 11){
		qm.forceCompleteQuest();
		qm.gainExp(180);
		qm.dispose();
}
}
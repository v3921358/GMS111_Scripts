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
	if (status == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���ˣ���ʲ�N�᣿ ����ʲ�NԒҪ�f�᣿ �ţ� �T�ˣ� �T�˵�Ԓ�����f�T���T�B���T��֮İɣ� ���NͻȻ�ᵽ�@����");
	if (status == 1)
		qm.sendNextPrevS("#b����֪��������ܲ����T�� ���N�ӣ� ���Ԇ᣿");
	if (status == 2)
		qm.sendNextPrev("�T����������ţ��� �����f���T�҆᣿ �������˵�ⷰ鰡�� ��裬����̫�^���ˡ����f�^���ǌ��");
	if (status == 3)
		qm.sendNextPrevS("#b�҂���ⷰ飬�㑪ԓ����׌���T�ɣ�");
	if (status == 4)
		qm.sendNextPrev("�������N�fԒ���N�᣿ �ðɣ� �����۵ĕr��������ҲҪ׌���T���� ���Ԇ᣿ ���Ҿ�׌���T��");
	if (status == 5)
		qm.sendNextPrevS("#b��������׌�����᣿");
	if (status == 6)
		qm.sendNextPrev("�_����Ц�� �^ȥ���ҿ���߀�У��F�ڵ�Ԓ��һ���������ˉ���ġ� ���Ƿ��^�푪ԓ�]�І��}�� ���˵Ă��^�ֲ��ߡ�");
	if (status == 7)
		qm.sendNextPrev("#b�Ǿ��ǿ����T����");
	if (status == 8)
		qm.sendNextPrev("�ţ����w�ñ����˿�ö࣬��Ч���ρ��f���@����������e�� ���ǃH�@���Ǜ]�k���T�ģ���횜ʂ�ɘӖ|����");
	if (status == 9)
		qm.sendNextPrev("���Ҫ��#b����#k��#b�T�˼���#k�����|�|���������ұ��ϵ�Ԓ��ƨ��һ�����_���ġ� �����T�˼��ܵ�Ԓ�����ܕ��������ϵ���ȥ�� ���Ա�횜ʂ��@�ɘӖ|���� ��ʂ�Æ᣿");
	if (status == 10)
		qm.sendPrev("ȥ����#b#p1032001##k�T�������飬����ԓ�����V��@�ð��Ӻ͌W�����ܵķ����� ��ȥҊҊ#b#p1032001##k��");
	if (status == 11){
		qm.forceStartQuest();
		qm.dispose();
}
}
/*
	����:	��ӡ��ͥԺ
	�؈D:	������֮��
	����:	200050001
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
		qm.sendNext("����ʲ�N�£� �mȻ�ҁK���gӭ����֮�͡���������������υsɢ�lһ�N�ǱȌ����Ě�Ϣ�������������ҵ�  ���������......");
	if (status == 1)
		qm.sendNextPrevS("#b���v���P�#o9300347#�����顣��#k");
	if (status == 2)
		qm.sendNextPrev("#o9300347#�� �mȻ�@�Ĵ_�ǂ������Ć��}�����������^��Ŀǰ��ֹ��ԓ��#m200000000#߀�첻��Ӱ푡� �ȵȣ��㄂���f#o9300347#���ă���");
	if (status == 3)
		qm.sendNextPrevS("#b��#m200060001#��");
	if (status == 4)
		qm.sendNextPrev("#m200060001#��#o9300347#��Ȼ�����e�����N�����f������Ҫ����#m920030001#�� ���מ�ʲ�N�أ� ���l��");
	if (status == 5)
		qm.sendNextPrevS("#b#m920030001#��");
	if (status == 6)
		qm.sendNextPrev("�����㵽����ʲ�N�˾�Ȼ�톖�@�ӵĆ��}�� �����Եȕ����� ��Ҫ���Nһ�Կ����ǲ���ֵ�����Ρ�");
	if (status == 7)
		qm.sendNextPrev("����������������");
	if (status == 8)
		qm.sendNextPrevS("#b��������������������������������");
	if (status == 9)
		qm.sendNextPrev("�㣬�㡭�����������㡭��������ȫ��ͬ���ͨ��� ���ƾõĚq�£��ǿ��µ����棬Ȼ���������ٴΑ��������Ă������\���������㵽�����l��");
	if (status == 10)
		qm.sendPrev("�����������l���á� ռ���ѽ�׌�Ұ�һ�ж����V���ˡ� �P�#b#m920030001##k��һ�С�������");
	if (status == 11){
		qm.forceStartQuest();
		qm.dispose();
}
}
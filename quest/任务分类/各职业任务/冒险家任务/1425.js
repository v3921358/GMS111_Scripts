/*
	����:	ȭ��֮·
	�؈D:	������
	����:	120000101
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 5) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("�����x��ȭ��֮·�᣿ ������ȭ�^��ָ��ȭ�׺͔��ˑ��Y���¸ҵĺ��I�� �mȻ�����A��������������s�ܲ����ס����㌦�Լ������ņ᣿");
	if (status == 1)
		qm.sendNextPrev("��ߴ����Եļ�����#b�����Lȭ#k�� ���������͓�������������������L��# b؞�Ǔ�#kҲ�Ƿǳ����ļ��ܣ�������ǰͻ�M���������ˡ�");
	if (status == 2)
		qm.sendNextPrev("��Ȼ����������Ҳ����Ҫ�� �W��#b��׼ȭ��#k��#b����ȭ#k�ᣬ����׌���ȭ�׸��졢��ǿ�� ͨ�^#bѪ������#k���������Ѫ���� ͨ�^��ǿ��������#b����#k�����Գ��m�֏��w����ħ����");
	if (status == 3)
		qm.sendNextPrev("ͨ�^׌����ƽ�o����Լ��Ĺ�����������ֵ��#b�o��#k��Ҳ��ȭ�ֲ��ɻ�ȱ��҇�ļ���֮һ��");
	if (status == 4)
		qm.sendNextPrev("�f������̫�L�ˆ᣿ �õģ�ȭ�ֵĿ�ԇ�R���_ʼ�� ����ͨ�^���εĿ�ԇ���С� ֻҪ�M��ʂ�õĿ������������й����#r�����������Ʒ#k���o�Ҿ��С� ���ǹ���ķ��R���ܸߣ�����������ܲ�̫���ס� �@Щһ��Ҫӛס��");
	if (status == 5)
		qm.sendAcceptDecline("��ԇ�ĕr�����ˎˮ�ù��ˣ����#b�����΄������_ʼ#k�� ���˷�ֹ�l���@�N���飬һ��Ҫ���Ȝʂ�ó����ˎˮ����ԇ�R���_ʼ�� ���ܵ�Ԓ�����R�ϰ����͵���ԇ��œȥ��");
	if (status == 6){
		qm.forceStartQuest();
		qm.warp(912040000,0);
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
		qm.sendYesNo("#t4031013#ȫ���Á����� �ɿ����e�� ������ԓ�f�Ǳ��^���㡣 ��һ�����ɞ�һ����ȭ�֡� ���R��׌��ɞ�ȭ��\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(510);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�ܺá� �ĬF�������ѽ���#bȭ��#k�ˡ� ȭ�ֿ��Գ��ֿ�ȭ��悉����ˡ� ��ˣ���Ҫ���κ��˸�ҪŬ���ޟ����ǡ� �����ޟ����^�����������y��Ԓ����Ҳ������ġ�");
		}
	if (status == 2)
		qm.sendOk("ȭ�ֱ��Ҫ׃�ø����� �����ǷNǿ��s����������ߵ����ϡ� ȭ��Ҫ���Լ������������;�����@Ҫ��׃��ǿ��߀Ҫ�����D�y��");
	if (status == 3){
		qm.dispose();
}
}
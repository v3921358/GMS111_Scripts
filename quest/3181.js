/*
	����:	Ī�ص���
	�؈D:	�ڶ�����
	����:	211060400
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
		qm.sendAcceptDecline("Ҫ�ǡ������l �����ҵ�Ԓ����Ո�^������f����Ԓ����ֻҪһС�������У�");
	if (status == 1)
		qm.sendNextPrev("�� ���ҵ�Ԓ�ˣ� ������̫���ˡ�����߀���룬Ҫ�Ǜ]�� Ҋ�ҵ�Ԓ��Ԓ����ԓ���N�k����");
	if (status == 2)
		qm.sendNextPrev("�ҵ����ֽ�#b#p2161004##k�������ˌ��҂��f�е�#b�{�����Ą���#k���ҁ����@���ط��������ڳǱ��ĸ�̎���҄��µĕr�򡭡��Ǳ�ͻȻ�_ʼ�u�Σ���������ͳ��F�ˡ��������һŻŏ����ر��_�������ߵĕr�򡭡�ͻȻ�Ђ����p�˳��F�����ҵ���ǰ����");
	if (status == 3)
		qm.sendNextPrev("�ǂ����p���f�Լ���#b�{�����ࡤ�װ�#k�����@���ǵ����ˡ������f��δ�����S���M���˳Ǳ���Ȼ�����׃���˟o�����@�e�x�_�����`��������������{��ľ��ʣ��mȻ׃�������`�������X���w�Y�к����ڵ�̎�y�Z�����w�񵶸�һ�ӵ��ۣ� �ā�����ͣЪ�����F���ҹ����@���fԒ�����ѽ��ǳ�ʹ���ˡ���");
	if (status == 4)
		qm.sendNextPrev("�mȻ��׃�����@��ģ�ӡ�������������@�����ͽo���h���ȴ����ҵļ��ˡ������܎��Ұ��@���Ž��o����ѩ���#b������˹��#k�᣿ ������˹�ؕ����Ұ����D���o�ҵļ��˵ġ���");
	if (status == 5)
		qm.sendPrev("���˷����Լ���ȥ��������һ�����F��ħ�����S�� �ҕ����������͵�#b����ѩ��#k�����Ұ�#v4032859:#�Ž��H������˹�أ�");
	if (status == 6){
		qm.forceStartQuest();
		qm.gainItem(4032859, 1);
		qm.warp(211000000, 0);
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
	if (status == 0) {
	if (qm.haveItem(4032859)) {
		qm.sendNext("�š����o�ҵ�#v4032859:#�ţ� ���l�o��İ���");
	} else {
		qm.sendOk("#v4032859:#�ŵ��������e�������e�����_��Ц����");
		qm.dispose();
		}
		}
	if (status == 1)
		qm.sendNextPrev("�Ǻǡ����ǂ������oҕ�ҵľ��棬����׃�����@�����ӡ����K�K����");
	if (status == 2)
		qm.sendNextPrev("����ǰ��#p2161004#�����@�e���fҪ���{����֮��ȥ���Ҫ{�����Ą��¡� ����ǰ���ڪ{����֮���e���X������ֵĚ�Ϣ�����Ծ̈́�����Ҫȥ���������s����ҹ�����o�ĕr�����˳�ȥ��");
	if (status == 3)
		qm.sendNextPrev("�����ҵ������҂��ɳ��˾�Ԯꠡ� ���ǳ��eͻȻ���F�˹���҂��]���ҵ������Y��׃�����@�����ӡ���");
	if (status == 4)
		qm.sendPrev("�@�����ҕ����o���ļ��˵ġ���\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 5000 exp");
	if (status == 5){
		qm.forceCompleteQuest();
		qm.gainExp(5000);
		qm.dispose();
}
}

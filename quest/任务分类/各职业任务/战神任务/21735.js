/*
	����:	�������ķ�ӡʯ
	�؈D:	��³���鱨�̵�
	����:	104000004
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
		qm.sendNext("#t4032323#���ѽ��ҵ��ˡ� �㿴���ǺǺǡ�#i4032323:#");
	if (status == 1)
		qm.sendNextPrevS("#b�������������N�ҵ��ģ�");
	if (status == 2)
		qm.sendNextPrev("�ϴα���ż�������ᣬ�҄ӆT�����е����W�ѱ����������y�u�� �����N�������Դ����� һ��Ҫ��������ǰ���ҵ�������Ҫ�Ė|������Ҳ���ǈ����ϴ�һ��֮�� ");
	if (status == 3)
		qm.sendNextPrev("���^����ɫ֮��Ă��ѽ��J�R���ˣ����������@�����²�̫��ȫ�� Ӣ�۴����������߁���ȥ��Ū�G��Ҳ���á���Ҫ��߀�ǽ��o#b#p1201000##k���ܰɡ�");
	if (status == 4)
		qm.sendNextPrev("#m140000000#�u��һֱ��ֻ��#m140000000#һ����� ���˲�׌������ӽ��������ڍu���O���˸��N���g�� ��ɫ֮��Ҫ���ҵ��������]���N���ס�");
	if (status == 5)
		qm.sendNextPrev("�Ҵ������᲻��׌��ȥ���ռ����Ĺ����ˣ���F���ѽ���ð�U�u����һ���Ĳt�⣬�F��Ҳ�Ǖr���Լ�ȥ�e�۽���˰ɣ�");
	if (status == 6)
		qm.sendPrev("���^�Ҵ��㼯��ȫ����ȥ�ռ��c��ɫ֮�����P�¼�����󣬸��ο���#b�P��ǂ���ӡʯҲ�б�Ҫ�^�m�� �������ʲ�N��Ϣ���ҕ�ϵ���#k�� ������Ҋ��Ӣ�ۡ�");
	if (status == 7){
		if(!qm.canHold(4032323, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		if(!qm.haveItem(4032323, 1)) qm.gainItem(4032323, 1);
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
		qm.sendNext("��춺�ɫ�����Єӏ��挍�������eһֱ �f�ˣ�ǰ�Εr�gҲ���u���ˣ������N�Ӱ����ţ��@�ǡ��@����#b#v4032323:##t4032323##k�᣿�Y��߀�Ǳ��挍������������ҵ���#t4032323#��");
	if (status == 1)
		qm.sendPrev("��֪���@�w��ʯ������ʲ�N�á���ֻ֪���@���|���϶��ͺ�ħ�������P�� ��Ȼ��Щ��������@���|�����҂�һ��Ҫ���o���@���|���� ����Փ�l��ʲ�N���㶼Ҫ�����׃�ø��������С�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#   \r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 6037 exp");
	if (status == 2){
		qm.forceCompleteQuest();
		qm.gainItem(4032323, -1);
		qm.gainExp(6037);
		qm.dispose();
}
}
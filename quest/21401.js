/*
	����:	�ñ��ߵ�ս����˯
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 3) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("����ʲ�N׃���@�ӣ�����̫���f��߀�ǲm�������˰ɣ�");
	if (status == 1)
		qm.sendNextPrev("���㱻���e�����^������ĕr����Ҳ�ڱ��e�����N���L�ĕr�g�]�����˵����ӌ��ҁ��f̫�������ҵ����e�����Ӱ��");
	if (status == 2)
		qm.sendNextPrev("������d�����Ӱ��ȫ��ʧ�ˡ��X�����˻؁���͛]ʲ�N��ϧ�ľ��@��ʲ�N���[Ó�ˣ����X�ö����e�X��");
	if (status == 3)
		qm.sendAcceptDecline("��Ӛ������ʿ����ֹ�ҡ�������ֹ�ұ��ߵ�ֻ���㡣�F���ҟo���������Լ��ˣ����k�����ҡ�");
	if (status == 4){
		qm.forceStartQuest();
		qm.warp(914020000,0);
		qm.spawnMob(9001014,0,0);
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
		qm.sendNext("�x�x�㣬���ˡ� ��̝���㣬�ŷ������ҵı��ߡ� �����f�ҡ����� �����˵Č������@�cС�®�Ȼ����Ԓ���ˣ�");
	if (status == 1)
		qm.sendPrev("�F�ځ�����ĵȼ��ѽ��ܸ��ˡ� ��Ȼ�ܹ��򵹱��ߠ�B�µ��ҡ������N�������^ȥȫ��������Ҳ��ԓ�ǿ��Ե��ˡ�\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142132#  #t1142132# ");
	if (status == 2){
		if(!qm.canHold(1142132, 1)) {
		qm.sendOk("�o���ռ{��Ʒ��Ո���������g��");
		qm.dispose();
		return;
		}
		qm.forceCompleteQuest();
		qm.getPlayer().changeJob(qm.getJob() + 1);
		qm.gainItem(1142132,1);
		qm.dispose();
}
}
/*
	����:	�ȴ����˵�����
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("��ʹ�ޟ���æ����Ҳһ����Ҫ�؁�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("�ޟ��������N���ˣ��ۣ��@�Nһ����ĵȼ������˲��ٰ����RҪ�͵����ݍu���ͼ��͵��S�������u���@Ԓ��Ȼ�]�e�������ˣ��F�ڲ����v�@Щ�ĕr�����ǲ�����˼����ֻ֪�����æ��������û؍uһ���ˡ�");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}

function end(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 11) {
		qm.sendOkS("#b�������벻������������ʲ�N�k����",3);
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���������ˡ���");
	if (status == 1)
		qm.sendNextPrevS("#b��#p1201001#�ڰl�����Q����֣���߅���������l����#k");
	if (status == 2)
		qm.sendNextPrevS("#b����ǰ�]Ҋ�^���������N������̫�����.��#k");
	if (status == 3)
		qm.sendNextPrev("ι�� #b#h0##k�� ߀ ��Ҋ�ҵ���᣿ ���� �� ��Ҋ�� ���������ˣ�");
	if (status == 4)
		qm.sendNextPrevS("#b���ף��@���l���������N �������װͰ͵����ꡭ������#k");
	if (status == 5)
		qm.sendNextPrev("�����������@�ӵ����˰����G�_�����ڱ����e˯�ˎװ��꣬�F���BԒ�� �����ˡ���...");
	if (status == 6)
		qm.sendNextPrevS("#b�����l��?");
	if (status == 7)
		qm.sendNextPrev("����#b#h0##k���F�� ���ҵ����ˣ����Ұ�����ӛ�����ˣ��Ҿ�������#b�Lì #p1201002##k��?");
	if (status == 8)
		qm.sendNextPrevS("#b(.����#p1201002#��#p1201001#���fԒ?)#k");
	if (status == 9)
		qm.sendNextPrev("����춰ɣ��@�N���@�������Nʧ�����������B�Ҷ����˰ɣ�̫������˼��?");
	if (status == 10)
		qm.sendNextPrevS("#b������˼�����һ�c���벻����...");
	if (status == 11)
		qm.sendAcceptDecline("�f������˼�������ˣ����װ�������һ���˹¿�����أ��ж��į��֪���᣿�������ӣ�����c�o��������!");
	if (status == 12)
		qm.sendPrevS("#b(һ��һ���Լ���#p1201001#��#p1201002#�ģ�߀Խ�fԽ�����ˡ����@�N�f��ȥҲ������ɶ�Mչ��߀�����ߵ� #p1201000#��ǰ���ú���������.)#k",3);
	if (status == 13){
		qm.forceCompleteQuest();
		qm.warp(914090200);
		qm.dispose();
}
}
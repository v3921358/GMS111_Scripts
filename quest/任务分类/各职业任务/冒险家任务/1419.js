/*
	����:	����֮·
	�؈D:	��������ѵ����
	����:	100000201
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 7) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("����ɞ������īC�ˆ᣿ �C����ʹ����͹��е�#b��#k���I�����Կ�����������˔��ˡ�");
	if (status == 1)
		qm.sendNextPrev("��Ȼ�����Ϥ�����쾚ʹ�ù���#b��׼��#k�����Կ���ʹ�ù���#b���ټ�#k���Լ�#b�K�O��#k�� �����úù���߀�������ˌW��#b����Ӗ��#k��");
	if (status == 2)
		qm.sendNextPrev("�㲻������һ�°l���b��ը���ļ�ʸ��ʹ���˻��Ե�#b��ը��#k���͕������h�̹�������ǿ�ߞ�Ε��ǹ�������");
	if (status == 3)
		qm.sendNextPrev("Ҫ��ʹ�ù�����Ȼ��횎�����ʸ�� ��������W����#b�o�μ�#k�������ʸȫ���ù⣬Ҳ���Ó��ġ� �����Խ����`�������������Ҫ��ʸ����ʹ�ù���");
	if (status == 4)
		qm.sendNextPrev("�^ȥ�����f�����ֵ���·�ٶ�̫�����C���Ա��^�����ʹ������#b���A��#k�ļ��ܣ����ԏ��a�@�����c�� �����S�^���������Sһ�Σ������ƄӺ��h�ľ��x��");
	if (status == 5)
		qm.sendNextPrev("..�f���ǲ���̫�L�ˣ� �����ֵ�����ֻ���H���w��^���˲��ܸ��ܵõ��� �����������x��C��֮·��Ո�����f���ҕ������M�п�ԇ���������Л]�гɞ�C�˵��Y�� �mȻ����ʲ�N���y�ă��ݣ�����Ҳ���ܵ����p�ġ�");
	if (status == 6)
		qm.sendNextPrev("��ԇ�ܺ��Ρ� ֻҪ�M�����Ȝʂ�Ŀ������������e�Ĺ���L��#r30�����кڰ�����������#k���С����e�Ĺ������ͨ������R���ߣ�Ոһ��Ҫע�⡣");
	if (status == 7)
		qm.sendAcceptDecline("��ԇ���^����ˎˮ������Ԓ����ֻ��#b�����΄������_ʼ#k�� �����Ҫ���ó�ֵĜʂ䡣 �����R���_ʼ��ԇ�᣿ ���ܵ�Ԓ���ҾͰ����͵���ԇ��Ժȥ����");
	if (status == 8){
		qm.forceStartQuest();
		qm.warp(910070000,0);
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
		qm.sendYesNo("#t4031013#ȫ���L�����˰��� �Ҵ_�J����������� �ĬF���_ʼ���ҁ�������ϫC��֮·�����ʂ���ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(310);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�õġ� �ĬF���������#b�C��#k�ˡ� �C���Ǒ{���J�����۾����������딳�����ŵ��t��֮�ˡ���ϣ�����^�mŬ���ޟ���");
		}
	if (status == 2)
		qm.sendOk("�C�˱��׃�ø����� ���Ǿ����ܰ��ǷN���������������ϡ� ���Լ��������������_�������ϡ����h��׃ǿ���y��");
	if (status == 3){
		qm.dispose();
}
}
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
		qm.sendNext("����ɞ����������֣�Crossbow Man���᣿ �������ڹ�������ʹ��#b��#k�Ĺ����֣��mȻ���Ĺ����ٶ��^�������ǅs��������κ��˶�Ҫǿ����׼������һ����");
	if (status == 1)
		qm.sendNextPrev("��Ȼ�����Ϥ�����쾚ʹ�����#b��׼��#k�����Կ���ʹ�����#b������#k���Լ�#b�K�O��#k�� �����ú���߀�������ˌW��#b����Ӗ��#k��");
	if (status == 2)
		qm.sendNextPrev("�㲻������һ�°l����Դ�͸���˵���F��ʸ��#b��͸��#k���͕������h�̹�������ǿ�ߞ�Ε��ǹ������ˡ�");
	if (status == 3)
		qm.sendNextPrev("Ҫ��ʹ���󣬮�Ȼ��횎�����ʸ�� ��������W����#b�o�μ�#k�������ʸȫ���ù⣬Ҳ���Ó��ġ� �����Խ����`�������������Ҫ��ʸ����ʹ����");
	if (status == 4)
		qm.sendNextPrev("�^ȥ�����f�����ֵ���·�ٶ�̫�����C���Ա��^�����ʹ������#b���A��#k�ļ��ܣ����ԏ��a�@�����c�� �����S�^���������Sһ�Σ������ƄӺ��h�ľ��x��");
	if (status == 5)
		qm.sendNextPrev("��ጵ�̫�L�ˆ᣿ �����ֵ��������ֻ���H���w��^���˲��ܹ��������ܵõ����������Ҫ�x������������֮·����Ո���V�ң��ҕ����һ���㣬�����Ƿ�߂�ɞ����ֵ��Y���mȻ���݁K���Ǻ��y����ҲՈ�㲻Ҫ��󠾯�衣");
	if (status == 6)
		qm.sendNextPrev("��ԇ�ܺ��Ρ� ֻҪ�M�����Ȝʂ�Ŀ������������e�Ĺ���L��#r30�����кڰ�����������#k���С����e�Ĺ������ͨ������R���ߣ�Ոһ��Ҫע�⡣");
	if (status == 7)
		qm.sendAcceptDecline("��ԇ���^����ˎˮ������Ԓ����ֻ��#b�����΄������_ʼ#k�� �����Ҫ���ó�ֵĜʂ䡣 �����R���_ʼ��ԇ�᣿ ���ܵ�Ԓ���ҾͰ����͵���ԇ��Ժȥ��..");
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
		qm.sendYesNo("#t4031013#ȫ�����R�ˡ� �ҳ�ִ_�J����������� �ҬF�ھ�ָ����ǰ�������ֵĵ�·������ʂ���ˆ᣿\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#i1142108:#   #t1142108#");
	if (status == 1){
		qm.forceCompleteQuest();
		qm.changeJob(320);
		qm.removeAll(4031013);
		qm.gainItem(1142108,1);
		qm.sendNext("�õġ� �ĬF���������#b����#k�ˡ� �����Ǒ{���J�����۾����������딳�����ŵ��t��֮�ˡ���ϣ�����^�mŬ���ޟ���");
		}
	if (status == 2)
		qm.sendOk("���ֱ��׃�ø����� ���Ǿ����ܰ��ǷN���������������ϡ� ���Լ��������������_�������ϡ����h��׃ǿ���y��");
	if (status == 3){
		qm.dispose();
}
}
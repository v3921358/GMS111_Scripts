/*
	����:	�������𣬼�ʧ�ٵ�������ʿ
	�؈D:	�о�����������
	����:	261020000
*/

var status = -1;

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
	if (qm.getQuestStatus(3314) == 0) {
		qm.forceStartQuest();
		qm.dispose();
	} else if (qm.getQuestStatus(3314) == 1) {
		qm.sendYesNo("#v2022198:#�Ў��^���N��");
		}
		}
	if (status == 1) {
	if (qm.haveItem(2022198)) {
		qm.sendNext("�@�ι�Ӌ��Ҫ�韩���ˣ��Ǻǣ�");
	} else {
		qm.sendOk("�����ϸ����]��#v2022198:#����Ո����ȥ��һ�Ρ�");
		qm.dispose();
		}
		}
	if (status == 2){
		qm.gainItem(2022198, -1);
		qm.sendSimple("����������.������ɫ�n�׿�����ĺ���Ч����.�@�εČ��ɹ��ˣ� ������������ ��Ȼ���������ܴ������µĈԏ��������ϣ�\r\n#L0##b����Ȼ��������w������#k#l");
		}
	if (status == 3)
		qm.sendSimple("���@Ӡ�ı���� ����̫����.���Ǻ�Σ�U��ˎ�������mȻ��Σ�U��ˎ�����нⶾˎ������������\r\n#L0##b���o���ֽoˎ���찡����#k#l");
	if (status == 4)
		qm.sendSimple("���һ�������׃���w�Ġ�B��׃�ø������ס��@�ӡ��㲻�ÿ��Ԏ��ǂ���_�������\r\n#L0##b�ǂ�# k#l");
	if (status == 5)
		qm.sendNextPrev("�ǵġ��������������棬���ǵ�һ�ˣ������������κ��˶�Ҫǿ����ֻҪ�����ڵ�Ԓ���@�N�о��ܿ���ܽ������������ʧ���ˡ���");
	if (status == 6)
		qm.sendNextPrev("�l����֪���ǂ���ʲ�N����ʧ.��֪��ʲ�N�r���_ʼ�ǂ���׃�ñ��꣬�˂���֪������������ʲ�N���.�ǂ���Ű�������һֱ�ǯ����d�d�Ġ�B.�о����о����о���������������.���P��������ġ��Y����#b�ǂ��¼�#k�K춰l���ˡ�");
	if (status == 7)
		qm.sendNextPrev("������̖�Q�����gʿ֮��Ĭ����၆��Ҳδ���l���^���ǘӵĄ��ұ�ը�¼������Ե��ǂ�ﵽ������ʲ�N��򞣬�����N��Ҳ�²�͸��������������ʲ�N�@�˵��о��أ� ��Ȼ�ѽ��������M�����{�飬����f�����L��ԓ֪��Щʲ�N������Ҳ����͸¶��");
	if (status == 8)
		qm.sendNextPrev("�@��о�..�䌍һ�_ʼҲ�Ǻ���һ������������s��ʧ�oۙ�����@��о�Ҳ�o���^�m��ȥ�� �Ҍ�ˎ���mȻ߀�������ţ���߀�治���װ��� ��Ȼ�Ǻ��ǂ��һ���_ʼ�ģ��mȻ�����m�m߀�ڳ��m��ȥ�����ǡ��ǂ���ʲ�N����Ҫ�о���׃���w�Ġ�B�أ�");
	if (status == 9)
		qm.sendPrev("�ǂ�ԓ߀�������ǂ��л���ȥ�����ɣ�\r\n\r\n#fUI/UIWindow2.img/QuestIcon/5/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#  12500 exp\r\n\r\n#fUI/UIWindow2.img/QuestIcon/11/0# ������ 40");
	if (status == 10){
		qm.forceCompleteQuest();
		qm.gainItem(2050004, 10);
		qm.gainItem(2022199, 20);
		qm.gainExp(12500);
		qm.dispose();
}
}

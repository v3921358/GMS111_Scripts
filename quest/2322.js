/*
	����:	Խ����ǽ2
	�؈D:	Ģ��ɭ��С��
	����:	106020000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("�ǆ᣿ �ţ����ķN��ּ��J�Ę䰡�� ��������ǂ���Ԓ��Ո����ȥ���ҿ�����");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("�m�f���Դ��ƽY�磬���ҵ����e��Ȼ��̤�����҂����������ĳǱ�����ⲿ�M���ǽ^�������ܵģ���Ҫ���벻�Ǽ����׵����顣�š�Ո����ȥ�Ǳ��L߅�ɲ�һ�ºÆ᣿");
	if (status == 1)
		qm.sendPrev("�罛�^����ɭ�֣���#b#m106020400##k����߅�ߣ��͕���Ҋ#b#m106020500##k�ˡ� �{��Ͱ�Ӛ���ˡ�");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}
	
/*
	����:	̽��Ģ��ɭ��
	�؈D:	Ģ��ɭ��С��
	����:	106020000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("Ո��Ҫ�����҂�������������");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendYesNo("Ҫ���ȹ��������ȱ���{�鹽��ɭ�֡��������Z�����ǂ�ﲻ֪����ʲ�N���g�γ���һ������ĽY�磬������M��Ǳ��ĵ�·��Ո��ǰ���{��ɡ�");
	if (status == 1)
		qm.sendPrev("����ɭ�ֵĽY��ֻҪ���@�eһֱ���|�ߵ�Ԓ���Ϳ����� #b#m106020300##k��Ҋ�� ՈС�ġ�  �f�׺ݵĹ���ѽ���ȫ�ƿ�ɭ���ˡ�");
	if (status == 2){
		qm.forceStartQuest();
		qm.dispose();
}
}	
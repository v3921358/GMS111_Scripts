/*
	����:	Ѱ��Կ��
	�؈D:	����̩Ӫ��
	����:	300000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0 || status == 4 || status == 1 && mode == 0) {
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendSimple("�����ǿ�����ʿ?ԭ����߀���� ?Ҳ��,ԭ��!��ʿ���԰�, ì���_�˵��㲻���܌�����ħ�����@�N����ݔ�� !\r\n\r\n\r\n#L0##b(���䌍����ݔ��)#l\n#k");
	if (status == 1)
		qm.sendSimple("�����N���@? ��Ҳ�ǁ����µĴ��f����Ć�? �@�Ӻ��ε�����Ҫ���o�e����Ҫ�M���m���Լ�������Ō����� ���ǁ��ң�\r\n\r\n\r\n#L0##b#t4032325##l\n#k");
	if (status == 2)
		qm.sendNextPrev("������#v4032325:##t4032325#�᣿�Ե�һ�£��������e��");
	if (status == 3)
		qm.sendNextPrev("�����治����˼������ �治֪��ԓ���N�����f�źá� ���������Ƿ����@�e�ġ����ƺ��Ǻ�����耳�һ���G���ˡ� ȫ�����ҵ��e�� �mȻ���f�^�Î״��@��耳׺���Ҫ������߀�Ǵ��Ĵ���ؽoŪ�G�ˣ�");
	if (status == 4)
		qm.sendAcceptDecline("���^���Ó��ģ� 耳׿϶��ڸ���#b#o9001024##k�������ϣ� ֻҪ��Ӗ��Ӗ��Щ����耳��һ؁���У�#b#v4032326:##t4032326#��10��耳��е�һ��#k����횰�10��耳�ȫ���һ؁�_�J���У�");
	if (status == 5){
		qm.forceStartQuest();
		qm.dispose();
}
}
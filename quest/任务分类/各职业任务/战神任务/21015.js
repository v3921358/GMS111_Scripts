/*
	����:	��������ѵ��1
	�؈D:	���
	����:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 2) {
		qm.sendOk("߀߀�f����Ӣ�ۣ����N���@�N�qԥ���Q�����] �^���FҪ�ß�᣿��Ҫ׃����Ԓ���ǾͿ��c�_ʼ�ɣ�");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendNext("���N���f���͵��˽Y�����F���M����һ���A�Ρ���һ���A����ʲ�N�أ������Ÿ����f�^���ǆ᣿Ҫ�ޟ�׃��������Գ�����ħ�����ĳ̶ȡ�");
	if (status == 1)
		qm.sendNextPrev("���mȻ�^ȥ��Ӣ�ۣ��������ѽ��ǎװ���ǰ�����ˡ����㲻�Ǻ�ħ�������{�䣬���ڱ�ѩ�����@�N�L�ĕr�g�����wһ����׃�úܽ�Ӳ�ɣ���������_��Ӳ�����w������ԓ���N���ǆ᣿");
	if (status == 2)
		qm.sendAcceptDecline("�w�����Ǉ�����Ӣ�۵Ļ��A�����w���������] �^�@ЩԒ�᣿��ȻҪ����#b���A�w��呟�#k����������ʧӛ������ʲ�N�����ˡ���֪��Ҳ�]�P�S�����N�F�ھ��M����A�w��呟��ɣ�");
	if (status == 3){
		qm.forceStartQuest();
		qm.dispose();
}
}
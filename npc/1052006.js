/*
	����:	����
	�؈D:	������Ʊ��
	����:	103020000
*/

var status = -1;

var meso = new Array(500, 1200, 2000);
var item = new Array(4031036, 4031037, 4031038);
var selector;
var menu = "";

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
	cm.dispose();
	return;
	} else if (status == 1 && mode == 0) {
	cm.sendOk("һ�����I��Ʊ����Ϳ����M���@�����ء��� �f���e��̎������ֵ��O�䣬�����ᣬ���F�Ė|���ڵ����㡣�����Q����׃���⣬Ո���V�ҡ�");
	cm.dispose();
	return;
	}
	if (mode == 1)
	status++;
	else
	status--;
	if (status == 0) {
		if (cm.getPlayerStat("LVL") <= 19) {
			cm.sendNext("һ�����I��Ʊ����Ϳ����M���@�����ء�Ȼ�������ƺ������M���@�e����Щ������O����ܕ�׌��o��̎������ՈӖ���Լ������Üʂ䣬Ȼ���ٻ؁�");
			cm.dispose();
		} else {
			for(var x=0; x < 3; x++) {
		if (cm.getPlayerStat("LVL") >= 20 && cm.getPlayerStat("LVL") <= 29) {
			menu += "\r\n#L" + x + "##b����B" + x + "�TƱ#k#l";
			break;
		} else if (cm.getPlayerStat("LVL") >= 30 && cm.getPlayerStat("LVL") <= 39 && x < 2) {
			menu += "\r\n#L" + x + "##b����B" + x + "�TƱ#k#l";
		} else {
			menu += "\r\n#L" + x + "##b����B" + x + "�TƱ#k#l";
			}
			}
			cm.sendSimple("�����IƱ�����һ����ُ�I�ˣ������ͨ�^��߅�ęzƱ���M�롣�����Iʲ�N��" + menu);
			}
			}
	if (status == 1) {
			selector = selection;
			selection += 1;
			cm.sendYesNo("����ُ�I #b����B" + selection + "�TƱ#k? ��Ҫ" + meso[selector] + "���š���ُ�I֮ǰ��Ո�_�J��ı�����һ���ո�");
			}
	if (status == 2) {
		if (cm.getMeso() < meso[selector]) {
			cm.sendOk("Ո�z�����Ƿ������ė��ţ����߱�����һ���ո�");
			cm.dispose();
		} else {
		if (selector == 0)
			cm.sendOk("����԰�Ʊ����zƱ�ڡ�ף����\��");
		if (selector == 1) {
			cm.sendOk("����԰�Ʊ����zƱ�ڡ�ף����\��");
		} else {
			cm.sendOk("����԰�Ʊ����zƱ�ڡ�ף����\��");
			}
			cm.gainMeso(-meso[selector]);
			cm.gainItem(item[selector], 1);
			cm.dispose();
}
}
}
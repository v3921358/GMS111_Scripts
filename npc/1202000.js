/*
	����:	����
	�؈D:	����
	����:	140090000
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	status--;
	}
	if (cm.getPlayer().getMapId() != 140090000) {
	if (status == 0) {
		cm.sendSimple("����ʲ�N��֪�����أ��е�Ԓ�ҕ��ٶ��f����  \n\r #b#L1#ԓ���ʹ��С�؈D��#l \n\r #b#L2#ԓ���ʹ���΄ՙ�λ��#l \n\r #b#L3#ԓ���ʹ�õ��ߣ�#l \n\r #b#L4#���ʹ����ͨ������#l \n\r #b#L5#��Γ�ȡ�|����#l \n\r #b#L6#��δ��b�䣿#l \n\r #b#L7#��δ��_����ҕ����#l \n\r #b#L8#��ΰѼ��ܷŵ�����I�ϣ�#l \n\r #b#L9#��δ���һ�����ӣ�#l \n\r #b#L10#��������ӣ�#l \n\r #b#L11#��β鿴�؈D�YӍ��#l");
	} else {
		cm.summonMsg(selection);
		cm.dispose();
		}
	} else {
	if (cm.getInfoQuest(21019).equals("")) {
	if (status == 0)
		cm.sendNext("��....�K�����!");
	if (status == 1)
		cm.sendNextPrevS("...�����l?", 2);
	if (status == 2)
		cm.sendNextPrev("���ѽ����@����þ���. �ȴ��ǂ��c��ĥ����������Ӣ�ۮd��...!");
	if (status == 3)
		cm.sendNextPrevS("�ȵ�, ���fʲ�N..? �����l...?", 2);
	if (status == 4)
		cm.sendNextPrevS("�ȵ�... �����l...? �ҼȲ�����ǰ��������... ��...���^��ʹ��..", 2);
	if (status == 5){
		cm.updateInfoQuest(21019, "helper=clear");
		cm.showWZEffect("Effect/Direction1.img/aranTutorial/face");
		cm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickLirin");
		cm.playerSummonHint(true);
		cm.dispose();
		}
	} else {
	if (status == 0)
		cm.sendNext("��߀�Æ᣿");
	if (status == 1)
		cm.sendNextPrevS("��... ʲ�N����ӛ����...�@�e�����e��߀�������l��", 2);
	if (status == 2)
		cm.sendNextPrev("���p�. ����ĥ�������{�䣬׌���벻����ǰ����. ��ǰ�������ѽ�����Ҫ��. �ҕ��������������������.");
	if (status == 3)
		cm.sendNextPrev("���������@�e��Ӣ��. �װ�����ǰ, ���c������т�������ħ�����������˗�֮�ȵ�����. ���ǂ��r�򣬺�ĥ�������������{�䣬�����������ֱ��Ĩȥ�����е�ӛ����ֹ.");
	if (status == 4)
		cm.sendNextPrev("�@�e������u����ħ�������������ڴ˵ء��{��Ě���y�����긲�w��˪��ѩ�����ڱ�֮�ߵ���̎���l�F�ġ�");
	if (status == 5)
		cm.sendNextPrev("�ҵ�������#p1202000#�� ������u�ĳɆT�������������ϵ��A�ԏĺܾ���ǰ�͵ȴ�Ӣ�ۻ؁�߀��...�K��ҵ����ˡ��F�ڡ������@�e....");
	if (status == 6)
		cm.sendNextPrev("����һ���f̫���ˡ������������R���˽�Ҳ�]���P�S����������֪��������....#b�҂���ȥ���f��#k���ڵ��_���f֮ǰ�����߀��ʲ�N��֪�����ҕ���һ�����f����");
	if (status == 7){
		cm.playerSummonHint(true);
		cm.warp(140090100, 1);
		cm.dispose();
}
}
}
}
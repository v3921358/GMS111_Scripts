/*
	����:	С��
	�؈D:	7��8��A��
	����:	103040400
*/

var status = -1;

function start() {
    cm.sendSimple("����¥������ά���У���������#b50000#k���ţ��ҿ�������͵͵���ȥ��\r\n#L0#VIP��A��#l\r\n#L1#ҡ��֮��#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        if (cm.getMeso() < 50000) {
            cm.sendNext("�š�����_�J���Լ���#b50000#k���ņ᣿Ո����_�����_�Jһ�¡������Ԓ������ȥ���X���R�ɡ�");
        } else {
            cm.gainMeso(-50000);
            if (selection == 0)
            cm.warp(103040440, 0);
            else if (selection == 1)
            cm.warp(103040460, 0);
            cm.getMap(103040460).resetFully();//��ͼˢ��
            cm.spawnMonster(4300013,1);//�ٻ�����
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}

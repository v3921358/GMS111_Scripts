/*
	����: 	9900002	
	�؈D: 		
	����: 		
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#r#h ##k#k��ã�������������ṩ�򵥷���#b\r\n#L1#���д���\r\n#r#L2#ˢװ��#k[#bNew#k]\r\n#r#L3#�鿴��ͼ����#k[#bNew#k]\r\n#L4##r���ɴ���#k[#bNew#k]\r\n#L5##r�ٻ�����#k[#bNew#k]"; 
        cm.sendSimple(selStr);
        } else if (status == 1) { 
        switch (selection) {
        case 1:
            cm.dispose();
            cm.openNpc(9900002,"9900002_1");
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9900002,"9900002_2");
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9900002,"9900002_3");
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9900002,"9900002_4");
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900002,"9900002_5");
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900002,"9900002_6");
            break;
        }
    }
}

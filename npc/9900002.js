/*
	名字: 	9900002	
	地圖: 		
	描述: 		
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
        var selStr = "#r#h ##k#k你好，在我这里可以提供简单服务#b\r\n#L1#城市传送\r\n#r#L2#刷装备#k[#bNew#k]\r\n#r#L3#查看地图爆率#k[#bNew#k]\r\n#L4##r自由传送#k[#bNew#k]\r\n#L5##r召唤怪物#k[#bNew#k]"; 
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

/*
	名字:	黑龙留下的...
	地圖:	飞龙的峡谷
	描述:	240040400
*/

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if(mode == 0 && type > 0) {
            qm.dispose();
            return;
        }
        
        if (mode == 1)
            status++;
        else
            status--;
        
        if (status == 0) {
            if(!qm.haveItem(4001094, 1)) {
                qm.sendNext("You don't have a #b#t4001094##k...");
                qm.dispose();
                return;
            }
            
            if (qm.haveItem(2041200, 1)) {
                qm.sendOk("(The #b#t2041200##k in my bag has grown brighter since reaching this place... Noticing again, the young dragon over there seems to be glaring bitterly towards it.)");
                qm.dispose();
                return;
            }
            
            qm.sendNext("You have brought a #b#t4001094##k, thank you for retrieving one more of my kin to the nest! Please have this...\r\n\r\n....... (bleuuhnuhgh) (blahrgngnhhng) ...\r\n\r\nehh, #b#t2041200##k as a token of my kin's gratitude. And do a favor for us, please, get that thing out of here...");
        } else if (status == 1) {
            if (!qm.canHold(2041200, 1)) {
                qm.sendOk("Please make a room on your USE inventory to receive the reward.");
                qm.dispose();
                return;
            }
            
            qm.forceCompleteQuest();
            qm.gainItem(4001094, -1);
            qm.gainItem(2041200, 1);    // quest not rewarding properly found thanks to MedicOP & Thora
            qm.gainExp(42000);
            qm.dispose();
        }
    }
}

/*
	名字:	进入VIP区
	地圖:	7层8层A区	
	描述:	103040400
*/

var status = -1;

function end(mode, type, selection) {
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
            if(!qm.haveItem(4032521, 10)) {
                qm.sendNext("Hey, you didn't get #b10 #t4032521##k yet, did you?");
                qm.dispose();
                return;
            }
            
            qm.sendNext("You got the #b#i4032521##k with you, great. Let me show you the way.");
        } else if (status == 1) {
            var em = qm.getEventManager("RockSpiritVIP");
            if (!em.startInstance(qm.getPlayer())) {
                qm.sendOk("Uh... It looks like the rooms ahead are a bit crowded right now. Please wait around here for a bit, ok?");
                qm.dispose();
                return;
            }
            
            qm.gainItem(4032521, -10);
            qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}
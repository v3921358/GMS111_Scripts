/*
	名字:	我是没有感情的机器人
	地圖:	第1广场
	描述:	310050400
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	    status++;
	 else {
                if (status == 2) {
                   qm.dispose();
                             return;
                    }
	    status--;
                    }
	if (status == 0) {
                                qm.sendNext("我不是人类，我叫#o8105003#，是个没有感情的机器人。因此我感觉不到恐惧，所以适合在黑暗的地下坑道中负责警卫工作。");	
                } else if (status == 1) {
                                qm.sendNextPrevS("怎么看都觉得你很像人类啊……？");
                } else if (status == 2) {
                                qm.sendNextPrev("是吗？但是我无法通过摄取食物获得能量，必须夺取他人的能量，转化为生物能量使用。简单地说，就是杀死其他生物，夺取能量.");
                } else if (status == 3) {
                                qm.sendNextPrevS("#b(好像有点可怕……)#k");
                } else if (status == 4) {	   	
                                qm.sendNextPrev("现在剩余的能量不多了，需要更换能量存储器。为了提高工作效率，在我站岗的时候，请你去帮我为能量存储器补充能量。");
                } else if (status == 5) {
                                qm.gainItem(4220178, 1);	   	
                                qm.sendNextPrev("我把能量存储器交给你。请你补充满生物能量之后再还给我。打猎怪物，能量就会自动地流入能量存储器，变成生物能量。");
                } else if (status == 6) {	   	
                                qm.sendNextPrev("我需要确认一下能量存储器是否已经充满。确认完成。任务完成。");
                } else if (status == 7) {	   	
                                qm.sendNextPrev("谢谢你。谢谢你帮我为备用能量存储器充满了能量。是的，备用能量存储器。站岗时使用的工作用能量存储器已经充满了。但是俗话说“有机会不抓住就是傻瓜”，所以我……");	   	
	} else if (status == 8) {		
		qm.forceStartQuest();
		//qm.forceStartQuest(23980,500000);
		qm.dispose();
                }
}
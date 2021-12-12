/*
	名字:	贝比蒂
	地圖:	奇怪的实验室
	描述:	931000013
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) 
	status++;
	else 
	status--;
	if (cm.getPlayer().getMapId() == 931000011 || cm.getPlayer().getMapId() == 931000030) {
	cm.dispose();
	return;
	}
	if (cm.getInfoQuest(23007).indexOf("vel01=2") == -1 && cm.getInfoQuest(23007).indexOf("vel01=3") == -1) {
	if (status == 0)
		cm.sendNext("…哦，哦？ 怎麼搞的？ 剛剛那個震動的關係，把玻璃震碎了？ 破掉了？");
	if (status == 1)
		cm.sendNextPrevS("#b哈，現在沒東西阻擋你了吧？ 那麼我們走吧！");
	if (status == 2)
		cm.sendNext("但、但是…");
	if (status == 3)
		cm.sendNextPrevS("#b難道你想一直在這裡？");
	if (status == 4)
		cm.sendNextPrev("當然不是啊！ 我不想呆在實驗室裏！");
	if (status == 5)
		cm.sendNextPrevS("#b那就一起走吧！ 快點！");
	if (status == 6){
		cm.warp(931000020,1);
		cm.updateInfoQuest(23007, "vel00=2;vel01=2");
		cm.dispose();
		}
	} else if (cm.getInfoQuest(23007).indexOf("vel01=2") != -1 && cm.getInfoQuest(23007).indexOf("vel01=3") == -1) {
	if (status == 0)
		cm.sendNext("已、已經好久沒有走出實驗室了…這是哪裡啊？");
	if (status == 1)
		cm.sendNextPrevS("#b去我們的村莊。 趁那黑色之翼追上來前，我們快點逃跑吧！");
	if (status == 2){
		cm.updateInfoQuest(23007, "vel00=2;vel01=3");
		cm.ShowWZEffect("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow1");
		cm.dispose();
		}
	} else {
		cm.sendOk("已經好久沒有走出實驗室了…");
		cm.dispose();
}
}
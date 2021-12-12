/*
	名字:	贝比蒂
	地圖:	奇怪的实验室
	描述:	931000010
*/

var status = -1;

var answer = false;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 5) {
		cm.sendOk("#b（本來不打算要下手的，突然手一滑！）#k");
		return;
		}
	status--;
	}
	if (cm.getPlayer().getMapId() == 931000011) {
	cm.dispose();
	return;
	}
	if (cm.getInfoQuest(23007).indexOf("vel00=1") == -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
	if (status == 0)
		cm.sendNext("不可以再靠近了…！");
	if (status == 1)
		cm.sendNextPrev("怎麼會來這裡？ 這裡是禁止出入的地方。");
	if (status == 2)
		cm.sendNextPrevS("#b你是誰？！");
	if (status == 3)
		cm.sendNextPrev("我…我在這裡，往上看。");
	if (status == 4){
		cm.updateInfoQuest(23007, "vel00=1");
		cm.showWZEffect("Effect/Direction4.img/Resistance/ClickVel");
		cm.dispose();
		}
	} else if (cm.getInfoQuest(23007).indexOf("vel00=1") != -1 && cm.getInfoQuest(23007).indexOf("vel01=1") == -1) {
	if (status == 0)
		cm.sendNext("我是…#r格裏梅爾博士#k的實驗者。 我叫作#b貝比蒂#k…雖然不知道你們怎麼跑進來的，快點出去！ 要是被博士發現的話，就完蛋了！");
	if (status == 1)
		cm.sendNextPrevS("#b實驗者？ 你到底在說什麼啊？ 這裡到底是什麼地方？ 你為什麼要進去裡面啊？");
	if (status == 2)
		cm.sendNextPrev("你不知道格裏梅爾？ 格裏梅爾博士…黑色之翼的瘋狂科學家！ 這裡是格裏梅爾的研究室，格裏梅爾在這裡做人體實驗…");
	if (status == 3)
		cm.sendNextPrevS("#b人體…實驗？");
	if (status == 4)
		cm.sendNextPrev("對，人體實驗，你如果被抓到，說不定也會變成實驗品！ 快逃跑！");
	if (status == 5)
		cm.sendNextPrevS("#b什麼？ 逃、逃跑…？ 但是你…！");
	if (status == 6)
		cm.sendNextPrev("…噓！ 小聲一點！ 格裏梅爾博士來了。");
	if (status == 7){
		cm.updateInfoQuest(23007, "vel00=2");
		cm.dispose();
		cm.warp(931000011, 0);
		}
	} else if (cm.getInfoQuest(23007).indexOf("vel01=1") != -1) {
	if (status == 0)
		cm.sendNext("好險…格裏梅爾好像有事出去了…快，就趁現在，你快點走吧。");
	if (status == 1)
		cm.sendNextPrevS("#b我一個人逃走嗎？ 那你呢？");
	if (status == 2)
		cm.sendNextPrev("我沒有辦法逃走。 格裏梅爾博士記得自己實驗過的所有東西，只要少一個，馬上就會發現的…所以你快走吧。");
	if (status == 3)
		cm.sendNextPrevS("#b不可以！ 你也跟我一起走！");
	if (status == 4)
		cm.sendNextPrev("就說不可能了，更何况我…被關在這裡面。 想要逃也逃不了…謝謝你為我擔心。 好久沒有人這麼關心我了。 快，快去吧。");
	if (status == 5)
		cm.sendYesNo("#b（貝比蒂把眼睛閉了起來，就像放弃了一切，該怎麼辦？）#k");
	if (status == 6){
		cm.gainExp(60);
		cm.dispose();
		cm.warp(931000013, 0);
}
}
}
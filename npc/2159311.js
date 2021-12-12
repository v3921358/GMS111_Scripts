/*
	名字:	佩尔迪
	地圖:	秘密广场1
	描述:	931050010
*/

var status = -1;

function action(mode, type, selection) {
	if (mode == 1) {
	status++;
	} else {
	if (status == 0) {
	cm.dispose();
	}
	status--;
	}
	if (status == 0)
		cm.sendPlayerToNpc("........");
	if (status == 1){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/14");
		cm.sendDirectionStatus(1, 2000);
		cm.sendPlayerToNpc("(..我想我聽到了什麼.)");
		}
	if (status == 2){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/15");
		cm.sendDirectionStatus(1, 2000);
		cm.sendPlayerToNpc("(…我還活著嗎？)");
		}
	if (status == 3){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/16");
		cm.sendDirectionStatus(1, 2000);
		cm.sendPlayerToNpc("(..有什麼東西在消耗我的精力！)");
		}
	if (status == 4){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/17");
		cm.sendDirectionStatus(1, 2000);
		cm.sendPlayerToNpc("(…我必須逃跑！)");
		}
	if (status == 5){
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/guide1/0");
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/breakEgg/0");
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg0/7");
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/breakEgg/1");
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/1");
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/breakEgg/2");
		cm.sendDirectionInfo("Effect/Direction6.img/effect/tuto/balloonMsg1/2");
		cm.showMapEffect("demonSlayer/whiteOut");
		cm.warp(931050020,0);
		cm.dispose();
}
}
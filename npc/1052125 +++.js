/*
	名字:	小俊
	地圖:	7层8层A区
	描述:	103040400
*/

var status = -1;

function start() {
    cm.sendSimple("其他楼层现在维护中，如果你给我#b50000#k楓幣，我可以让你偷偷溜进去！\r\n#L0#VIP区A区#l\r\n#L1#摇滚之魂#l");
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
        if (cm.getMeso() < 50000) {
            cm.sendNext("嗯……你確認你自己有#b50000#k楓幣嗎？請你打開背包確認一下。不夠的話，就先去把錢湊齊吧。");
        } else {
            cm.gainMeso(-50000);
            if (selection == 0)
            cm.warp(103040440, 0);
            else if (selection == 1)
            cm.warp(103040460, 0);
            cm.getMap(103040460).resetFully();//地图刷新
            cm.spawnMonster(4300013,1);//召唤怪物
        }
        cm.dispose();
    } else {
        cm.dispose();
    }
}

/*
	名字:	生命之穴
	地圖:	第一个迷宫
	描述:	240050101
*/

importPackage(Packages.client.inventory);    //4001088  4001089 4001090  4001091

function act() {
    var eim = rm.getPlayer().getEventInstance();
    var womanfred = eim.getMapFactory().getMap(240050100);
    var vvpMap = rm.getPlayer().getMapId();
    var vvpKey;
    var vvpOrig = 4001088;
    var vvpStage = -1;
    eim.showClearEffect(false, vvpMap);
    rm.mapMessage(6, "The key has been teleported somewhere...");
    switch (vvpMap) {
        case 240050101 : {
            vvpKey = vvpOrig;
            vvpStage = 1;
            break;
        }
        case 240050102 : {
            vvpKey = vvpOrig + 1;
            vvpStage = 2;
            break;
        }
        case 240050103 : {
            vvpKey = vvpOrig + 2;
            vvpStage = 3;
            break;
        }
        case 240050104 : {
            vvpKey = vvpOrig + 3;
            vvpStage = 4;
            break;
        }
        default : {
            vvpKey = -1;
            break;
        }
    }
    
    eim.setIntProperty(vvpStage + "stageclear", 1);
    
    var tehWomanfred = new Item(vvpKey, 0, 1);
    var theWomanfred = womanfred.getReactorByName("keyDrop1");
    var dropper = eim.getPlayers().get(0);
    womanfred.spawnItemDrop(theWomanfred, dropper, tehWomanfred, theWomanfred.getPosition(), true, true);
    eim.getMapInstance(240050100).dropMessage(6, "A bright flash of light, then a key suddenly appears somewhere in the map.");
}
	
	
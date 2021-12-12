/*
	名字: 	蘑菇	
	地圖: 	最后的城塔	
	描述: 	106021402	
*/


function init() {}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    var eim = em.newInstance("MK_PrimeMinister");
    var map = eim.setInstanceMap(106021700);
    eim.startEventTimer(600000);
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(106021700);
	var mob = em.getMonster(3300008);
    player.changeMap(map, map.getPortal(0));
	map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(292, 143));
}

function playerDead(eim, player) {}

function playerRevive(eim, player) {}

function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 106021402);
}

function changedMap(eim, player, mapid) {
    if (mapid != 106021700) {
        eim.unregisterPlayer(player);

        eim.disposeIfPlayerBelow(0, 0);
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function leftParty(eim, player) {
    playerExit(eim, player);
}

function disbandParty(eim) {
    eim.disposeIfPlayerBelow(100, 106021402);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    var map = eim.getMapFactory().getMap(106021402);
    player.changeMap(map, map.getPortal(0));
}

function clearPQ() {}

function allMonstersDead() {}

function cancelSchedule() {}
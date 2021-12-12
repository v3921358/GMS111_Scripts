/*
	名字:	结婚小镇
	地圖:	670010750
	描述:	670010750
*/

importPackage(Packages.server.life);

function act(){
	var startId = 9400523;
        var mobObj, mapObj = rm.getMap();
        
        for(var i = 0; i < 7; i++) {
                mobObj = MapleLifeFactory.getMonster(startId + Math.floor(Math.random() * 3));
                mapObj.spawnMonsterOnGroundBelow(mobObj, rm.getReactor().getPosition());
        }
}
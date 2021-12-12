/*
	名字:	阿里安特-天空
	地圖:
	描述:	交通
*/

importPackage(Packages.tools);

var Orbis_btf;
var Genie_to_Orbis;
var Orbis_docked;
var Ariant_btf;
var Genie_to_Ariant;
var Ariant_docked;

//Time Setting is in millisecond
var closeTime = 1 * 60 * 1000; //The time to close the gate  
var beginTime = 2 * 60 * 1000; //The time to begin the ride 
var  rideTime = 0.5 * 60 * 1000; //The time that require move to destination需要移动到目的地的时间

function init() {
	closeTime = em.getTransportationTime(closeTime);
	beginTime = em.getTransportationTime(beginTime);
	rideTime = em.getTransportationTime(rideTime);

	Orbis_btf = em.getChannelServer().getMapFactory().getMap(200000152);
	Ariant_btf = em.getChannelServer().getMapFactory().getMap(260000110);
	Genie_to_Orbis = em.getChannelServer().getMapFactory().getMap(200090410);
	Genie_to_Ariant = em.getChannelServer().getMapFactory().getMap(200090400);
	Orbis_docked = em.getChannelServer().getMapFactory().getMap(200000151);
	Ariant_docked = em.getChannelServer().getMapFactory().getMap(260000100);
	Orbis_Station = em.getChannelServer().getMapFactory().getMap(200000100);

	scheduleNew();
}

function scheduleNew() {
	em.setProperty("docked", "true");
	Orbis_docked.setDocked(true);
	Ariant_docked.setDocked(true);

	em.setProperty("entry", "true");
	em.schedule("stopEntry", closeTime); //The time to close the gate
	em.schedule("takeoff", beginTime); //The time to begin the ride
}

function stopEntry() {
	em.setProperty("entry","false");
}

function takeoff() {
	Orbis_btf.warpEveryone(Genie_to_Ariant.getId());
	Ariant_btf.warpEveryone(Genie_to_Orbis.getId());
	Orbis_docked.broadcastShip(false);
	Ariant_docked.broadcastShip(false);

	em.setProperty("docked","false");
	Orbis_docked.setDocked(false);
	Ariant_docked.setDocked(false);

	em.schedule("arrived", rideTime); //The time that require move to destination
}

function arrived() {
	Genie_to_Orbis.warpEveryone(Orbis_Station.getId(), 0);
	Genie_to_Ariant.warpEveryone(Ariant_docked.getId(), 1);
	Orbis_docked.broadcastShip(true);
	Ariant_docked.broadcastShip(true);

	scheduleNew();
}

function cancelSchedule() {}
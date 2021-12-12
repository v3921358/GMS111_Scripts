/*
	名字:	可可岛
	地圖:	浅海滩
	描述:	3000100
*/

function enter(pi) {
	pi.EnableUI(1);
	pi.DisableUI(1);
	pi.sendDirectionStatus(4, 1096003);
	pi.sendDirectionStatus(3, 4);
	pi.openNpc(1096003);
}
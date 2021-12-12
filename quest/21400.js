/*
	名字:	武器和主人吵架
	地圖:	里恩
	描述:	140000000
*/

var status = -1;

function start(mode, type, selection) {
	if (mode == 1)
	status++;
	else {
	if (status == 0) {
		qm.sendOk("不是鬧著玩的！真的很怪…分明#p1201002#出問題了！");
		qm.dispose();
	return;
	}
	status--;
	}
	if (status == 0)
		qm.sendAcceptDecline("修煉進行的還好嗎？這麼忙真對不起可快回#m140000000#，#p1201002#又有異常反應出現…很怪不是以前的反應。比以前更深更黑的感覺。");
	if (status == 1){
		qm.forceStartQuest();
		qm.dispose();
}
}
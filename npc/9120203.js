/*
	����:	Konpei
	�؈D:	������ǰ(�����)
	����:	801040101
*/

function start() {
	if (cm.haveItem(4000141)) {
		cm.sendYesNo("���������е����⣬���Ȼ�s������難��ǬF���@Ƭ�^����ΰ��ͽ��o��ؓ؟���ˣ�Ո��������һ�������������@һ�еġ����#v4000141:##b#t4000141##k�Ҿ��������ˣ����錦���������һ�N���裬Ո��ָ�̡�");
	} else {
		cm.sendYesNo("Ŷ��ʲ�N���@�����Nһ���£������ȥ�᣿");
}
}

function action(mode, type, selection) {
	if (mode == 0) {
		cm.sendOk("������������#b#m801000000##k��Ո���V�ң�");
		}
	if (mode == 1) {
		if (cm.haveItem(4000141)) {  
			cm.gainItem(4000141, -1);
			cm.gainItem(2000004, 200);
			cm.warp(801000000, 0);
		} else {
			cm.warp(800000000);
			}
			}
		cm.dispose();
}
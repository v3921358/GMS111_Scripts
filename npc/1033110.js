/*
	����:	���ֺ�
	�؈D:	��ŷ��
	����:	101050000
*/

function start() {
	var text = "һ�N�����Ļ��ΊW�񠖣��a춰�����. " +
	"������ʹ�ô�Orgel���Ÿ��N������\r\nע�⣺Ҫ������p�@Щ���^.\r\nNote: To fully appreciate the wonders " +
	"this music has to offer, you will need your SFX Sound Option enabled.\r\n\r\n";
	for (var i = 0; i < songs.length; i++){
	text += "#L" + i + "##b" + songs[i][0] + "#k#l\r\n";
	}
	cm.sendNext(text);
}

function action(mode, type, selection) {
	cm.getClient().getSession().write(Packages.tools.packet.CField.musicChange(songs[selection][1]));
	cm.dispose();
}

var songs = [
	["RisingStar", "BgmEvent2.img/risingStar"],
	["MoonlightShadow", "Bgm01/MoonlightShadow"],
	["When the morning comes", "BgmJp/WhenTheMorningComes"],
	["Flying In A Blue Dream", "Bgm06/FlyingInABlueDream"],
	["Fantasia", "Bgm07/Fantasia"],
	["FairyTalediffvers", "Bgm09/FairyTalediffvers"],
	["Minar'sDream","Bgm13/Minar'sDream"],
	["ElinForest", "Bgm15/ElinForest"],
	["TimeTemple", "Bgm16/TimeTemple"],
	["QueensGarden","Bgm18/QueensGarden"]
	];

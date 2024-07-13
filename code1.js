gdjs.WinCode = {};
gdjs.WinCode.GDbgObjects1= [];
gdjs.WinCode.GDbgObjects2= [];
gdjs.WinCode.GDbgObjects3= [];
gdjs.WinCode.GDNewSpriteObjects1= [];
gdjs.WinCode.GDNewSpriteObjects2= [];
gdjs.WinCode.GDNewSpriteObjects3= [];
gdjs.WinCode.GDshadowObjects1= [];
gdjs.WinCode.GDshadowObjects2= [];
gdjs.WinCode.GDshadowObjects3= [];
gdjs.WinCode.GDFlagObjects1= [];
gdjs.WinCode.GDFlagObjects2= [];
gdjs.WinCode.GDFlagObjects3= [];
gdjs.WinCode.GDNewTextObjects1= [];
gdjs.WinCode.GDNewTextObjects2= [];
gdjs.WinCode.GDNewTextObjects3= [];
gdjs.WinCode.GDNewSprite2Objects1= [];
gdjs.WinCode.GDNewSprite2Objects2= [];
gdjs.WinCode.GDNewSprite2Objects3= [];
gdjs.WinCode.GDHome_95buttonObjects1= [];
gdjs.WinCode.GDHome_95buttonObjects2= [];
gdjs.WinCode.GDHome_95buttonObjects3= [];
gdjs.WinCode.GDLilWizObjects1= [];
gdjs.WinCode.GDLilWizObjects2= [];
gdjs.WinCode.GDLilWizObjects3= [];
gdjs.WinCode.GDbackgroundObjects1= [];
gdjs.WinCode.GDbackgroundObjects2= [];
gdjs.WinCode.GDbackgroundObjects3= [];
gdjs.WinCode.GDcastleObjects1= [];
gdjs.WinCode.GDcastleObjects2= [];
gdjs.WinCode.GDcastleObjects3= [];
gdjs.WinCode.GDMusicButtonObjects1= [];
gdjs.WinCode.GDMusicButtonObjects2= [];
gdjs.WinCode.GDMusicButtonObjects3= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};
gdjs.WinCode.condition3IsTrue_0 = {val:false};
gdjs.WinCode.conditionTrue_1 = {val:false};
gdjs.WinCode.condition0IsTrue_1 = {val:false};
gdjs.WinCode.condition1IsTrue_1 = {val:false};
gdjs.WinCode.condition2IsTrue_1 = {val:false};
gdjs.WinCode.condition3IsTrue_1 = {val:false};


gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDHome_9595buttonObjects1Objects = Hashtable.newFrom({"Home_button": gdjs.WinCode.GDHome_95buttonObjects1});
gdjs.WinCode.eventsList0 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDMusicButtonObjects1Objects = Hashtable.newFrom({"MusicButton": gdjs.WinCode.GDMusicButtonObjects1});
gdjs.WinCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.WinCode.GDMusicButtonObjects1, gdjs.WinCode.GDMusicButtonObjects2);


gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WinCode.GDMusicButtonObjects2.length;i<l;++i) {
    if ( gdjs.WinCode.GDMusicButtonObjects2[i].isCurrentAnimationName("on") ) {
        gdjs.WinCode.condition0IsTrue_0.val = true;
        gdjs.WinCode.GDMusicButtonObjects2[k] = gdjs.WinCode.GDMusicButtonObjects2[i];
        ++k;
    }
}
gdjs.WinCode.GDMusicButtonObjects2.length = k;}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("MouseClick")) == 1;
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WinCode.GDMusicButtonObjects2 */
{for(var i = 0, len = gdjs.WinCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.WinCode.GDMusicButtonObjects2[i].setAnimationName("off");
}
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().get("MouseClick").setNumber(0);
}}

}


{

/* Reuse gdjs.WinCode.GDMusicButtonObjects1 */

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WinCode.GDMusicButtonObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDMusicButtonObjects1[i].isCurrentAnimationName("off") ) {
        gdjs.WinCode.condition0IsTrue_0.val = true;
        gdjs.WinCode.GDMusicButtonObjects1[k] = gdjs.WinCode.GDMusicButtonObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDMusicButtonObjects1.length = k;}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("MouseClick")) == 1;
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WinCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.WinCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDMusicButtonObjects1[i].setAnimationName("on");
}
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().get("MouseClick").setNumber(0);
}}

}


};gdjs.WinCode.eventsList2 = function(runtimeScene) {

{


gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
{gdjs.WinCode.conditionTrue_1 = gdjs.WinCode.condition1IsTrue_0;
gdjs.WinCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10618780);
}
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("MouseClick").add(1);
}
{ //Subevents
gdjs.WinCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.WinCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Home_button"), gdjs.WinCode.GDHome_95buttonObjects1);

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
gdjs.WinCode.condition2IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDHome_9595buttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.WinCode.condition1IsTrue_0.val ) {
{
{gdjs.WinCode.conditionTrue_1 = gdjs.WinCode.condition2IsTrue_0;
gdjs.WinCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10616332);
}
}}
}
if (gdjs.WinCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.WinCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "2021-10-19_-_Funny_Bit_-_www.FesliyanStudios.com.mp3", 1, true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.WinCode.GDMusicButtonObjects1);

gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDMusicButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.WinCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.WinCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDbgObjects1.length = 0;
gdjs.WinCode.GDbgObjects2.length = 0;
gdjs.WinCode.GDbgObjects3.length = 0;
gdjs.WinCode.GDNewSpriteObjects1.length = 0;
gdjs.WinCode.GDNewSpriteObjects2.length = 0;
gdjs.WinCode.GDNewSpriteObjects3.length = 0;
gdjs.WinCode.GDshadowObjects1.length = 0;
gdjs.WinCode.GDshadowObjects2.length = 0;
gdjs.WinCode.GDshadowObjects3.length = 0;
gdjs.WinCode.GDFlagObjects1.length = 0;
gdjs.WinCode.GDFlagObjects2.length = 0;
gdjs.WinCode.GDFlagObjects3.length = 0;
gdjs.WinCode.GDNewTextObjects1.length = 0;
gdjs.WinCode.GDNewTextObjects2.length = 0;
gdjs.WinCode.GDNewTextObjects3.length = 0;
gdjs.WinCode.GDNewSprite2Objects1.length = 0;
gdjs.WinCode.GDNewSprite2Objects2.length = 0;
gdjs.WinCode.GDNewSprite2Objects3.length = 0;
gdjs.WinCode.GDHome_95buttonObjects1.length = 0;
gdjs.WinCode.GDHome_95buttonObjects2.length = 0;
gdjs.WinCode.GDHome_95buttonObjects3.length = 0;
gdjs.WinCode.GDLilWizObjects1.length = 0;
gdjs.WinCode.GDLilWizObjects2.length = 0;
gdjs.WinCode.GDLilWizObjects3.length = 0;
gdjs.WinCode.GDbackgroundObjects1.length = 0;
gdjs.WinCode.GDbackgroundObjects2.length = 0;
gdjs.WinCode.GDbackgroundObjects3.length = 0;
gdjs.WinCode.GDcastleObjects1.length = 0;
gdjs.WinCode.GDcastleObjects2.length = 0;
gdjs.WinCode.GDcastleObjects3.length = 0;
gdjs.WinCode.GDMusicButtonObjects1.length = 0;
gdjs.WinCode.GDMusicButtonObjects2.length = 0;
gdjs.WinCode.GDMusicButtonObjects3.length = 0;

gdjs.WinCode.eventsList3(runtimeScene);
return;

}

gdjs['WinCode'] = gdjs.WinCode;

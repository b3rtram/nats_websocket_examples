let startPage = (app) => {

    const style = new PIXI.TextStyle({
        stroke: '#ffffff',
        strokeThickness: 5
    });
    
    const basicText = new PIXI.Text('Demon runner', style);
    basicText.x = 50;
    basicText.y = 10;

    app.stage.addChild(basicText);


}
const background = {

    init: (app) => {

        for (let x = 0; x < 50; x++) {
            for (let y = 0; y < 40; y++) {
                let floor;
                if (x == 0) {
                    floor = PIXI.Sprite.from('assets/wall_left.png');
                }
                else if (y == 0) {
                    floor = PIXI.Sprite.from('assets/wall_top_mid.png'); 
                }
                else if (y == 49) {
                    floor = PIXI.Sprite.from('assets/wall_top_mid.png'); 
                }
                else if (x > 0 && x < 49) {
                    floor = PIXI.Sprite.from('assets/floor_1.png');
                }
                else if (x == 49) {
                    floor = PIXI.Sprite.from("assets/wall_right.png");
                }

                floor.x = x * 16 + 100;
                floor.y = y * 16 + 100;

                app.stage.addChild(floor);
            }
        }
    }

}
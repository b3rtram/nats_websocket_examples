const big_demon = {

    initIdle: () => {
        big_demon_idle = [];
        for (let i = 0; i < 4; i++) {
            big_demon_idle.push(PIXI.Texture.from(`assets/big_demon_idle_anim_f${i}.png`));
        };
        let idle = new PIXI.AnimatedSprite(big_demon_idle);

        idle.animationSpeed = 0.15;
        idle.play();

        return idle;

    }

}
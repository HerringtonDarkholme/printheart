// for this example you have to use mouse or touchscreen

const app = new PIXI.Application();
document.querySelector('section.brush').appendChild(app.view);
const { stage } = app;

// prepare circle texture, that will be our brush
const brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawCircle(0, 0, 50);
brush.endFill();

app.loader.add('t1', 'img/otter_cake.jpeg');
app.loader.add('t2', 'img/lama_gift.jpg');
app.loader.load(setup);

function setup(loader, resources) {
    const background = new PIXI.Sprite(resources.t1.texture);
    stage.addChild(background);
    background.width = app.screen.width;
    background.height = app.screen.height;

    const imageToReveal = new PIXI.Sprite(resources.t2.texture);
    stage.addChild(imageToReveal);
    imageToReveal.width = app.screen.width;
    imageToReveal.height = app.screen.height;

    const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

    const renderTextureSprite = new PIXI.Sprite(renderTexture);
    stage.addChild(renderTextureSprite);
    imageToReveal.mask = renderTextureSprite;

    app.stage.interactive = true;
    app.stage.on('pointerdown', pointerDown);
    app.stage.on('pointerup', pointerUp);
    app.stage.on('pointermove', pointerMove);

    let dragging = false;

    function pointerMove(event) {
        if (dragging) {
            brush.position.copyFrom(event.data.global);
            app.renderer.render(brush, renderTexture, false, null, false);
        }
    }

    function pointerDown(event) {
        dragging = true;
        pointerMove(event);
    }

    function pointerUp(event) {
        dragging = false;
    }
}

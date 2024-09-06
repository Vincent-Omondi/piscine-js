export const build = (numberOfBricks) => {
    let brickCount = 0;
    const interval = setInterval(() => {
        brickCount++;
        const brick = document.createElement('div');
        brick.id = `brick-${brickCount}`;
        document.body.appendChild(brick)
        brick.dataset.foundation = brickCount % 3 === 2 ? 'true' : undefined;
        (brickCount >= numberOfBricks) && clearInterval(interval);
    }, 100);
};

export const repair = (...ids) => {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        brick && (brick.dataset.repaired === brick.dataset.foundation === 'true' ? 'inprogress' : 'true' );
    });
}

export const destroy = () => {
    const bricks = document.querySelectorAll('div[id^="brick-"]');
    bricks.length && bricks[bricks.length - 1].remove();
};
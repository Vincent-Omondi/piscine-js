export const build = (numberOfBricks) => {
    let brickCount = 0;
    const interval = setInterval(() => {
        brickCount++;
        const brick = document.createElement('div');
        brick.id = `brick-${brickCount}`;
        document.body.appendChild(brick)
   
        if (brickCount % 3 === 2) {
            brick.dataset.foundation = 'true';
        } else {
            brick.dataset.foundation = 'false';
        }

        if (brickCount >= numberOfBricks) {
            clearInterval(interval);
        }
    }, 100);
};

export const repair = (...ids) => {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick){
            if (brick.dataset.foundation === 'true') {
                brick.dataset.repaired = 'inprogress';
            } else {
                brick.dataset.repaired = 'true';
            }
        }

    });
}

export const destroy = () => {
    const bricks = document.querySelectorAll('div[id^="brick-"]');
    if (bricks.length){
        bricks[bricks.length - 1].remove();
    }
};
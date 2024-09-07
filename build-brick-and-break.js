export const build = (numberOfBricks) => {
    let currentBrickCount = 1;
    let nextFoundationBrick = 2;
    const interval = setInterval(() => {
        if (currentBrickCount > numberOfBricks) {
            clearInterval(interval);
            return;
        }
        const brick = document.createElement('div');
        brick.id = `brick-${currentBrickCount}`;
        if (currentBrickCount === nextFoundationBrick) {
            brick.dataset.foundation = true;
            nextFoundationBrick = currentBrickCount + 3;
        }
        document.body.appendChild(brick);
        currentBrickCount++;
    }, 100);
};

export const repair = (...ids) => {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick) {
            brick.dataset.repaired = brick.hasAttribute("data-foundation") ? "in progress" : "true";
        }
    });
};

export const destroy = () => {
    const allDivs = document.getElementsByTagName('div');
    allDivs[allDivs.length - 1]?.remove();
};
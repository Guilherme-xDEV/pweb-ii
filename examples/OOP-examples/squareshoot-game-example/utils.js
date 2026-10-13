function collision(a, b) {
    return a.x < b.x + b.width &&
           a.x + (a.width || 8) > b.x &&
           a.y < b.y + b.height &&
           a.y + (a.height || 8) > b.y;
}

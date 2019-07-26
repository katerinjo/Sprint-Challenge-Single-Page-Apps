export default (minimum, maximum, count) => {
    const range = maximum - minimum;
    const chosen = Array.from({length: count}, () => {
        return Math.floor(Math.random() * range) + minimum;
    });
    return [...new Set(chosen)];
}
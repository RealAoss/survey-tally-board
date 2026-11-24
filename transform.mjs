function fail(message) {
    throw new Error(message);
}
const lines = text => text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const v = lines(s),
        m = new Map;
    for (const a of v) m.set(a, (m.get(a) || 0) + 1);
    return [...m].sort((a, b) => b[1] - a[1]).map(([a, n]) => a + ' · ' + n + ' · ' + (100 * n / v.length).toFixed(1) + '%').join('\n')
}

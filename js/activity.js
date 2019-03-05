const container = document.querySelector('#activity');

const list = ['codes', 'runs', 'climbs', 'learns', 'laughs', 'codes (again)', 'eats', 'love JS', 'boulders'];

const change = (i = 0) => {
    container.innerHTML = list[i];
    i++;
    i %= list.length;
    setTimeout(change, 2500, i);
}
change();

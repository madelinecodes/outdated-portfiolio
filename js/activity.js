const container = document.querySelector('#activity');

const list = ['codes', 'runs', 'creates', 'learns', 'laughs', 'codes (again)', 'eats', 'loves JS', 'boulders', 'cooks', 'develops', 'climbs'];

const change = (i = 0) => {
    container.innerHTML = list[i];
    i++;
    i %= list.length;
    setTimeout(change, 2500, i);
}
change();

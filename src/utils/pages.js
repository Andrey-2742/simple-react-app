export const getPageCount = (itemCount, itemsPerPage) => {
    return Math.ceil(itemCount / itemsPerPage);
}

export const getPageArray = (count) =>
{
    var array = []
    for (let i = 1; i <= count; i++) {
        array.push(i);
    }
    return array;
}
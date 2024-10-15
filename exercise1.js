function filterAndSort1(items, minValue) {

    return items
      .filter(item => item.value >= minValue)
      .sort((a, b) => a.value - b.value);
}
  
function filterAndSort2(items, minValue) {

    return items
      .filter(item => item.value > minValue)  
      .sort((a, b) => b.value - a.value);     
}

function filterAndSort3(items, minValue) {

    return items
        .filter(item => item.value < minValue)  
        .sort((a, b) => b.value - a.value);     
}

module.exports = {filterAndSort1, filterAndSort2, filterAndSort3}
  
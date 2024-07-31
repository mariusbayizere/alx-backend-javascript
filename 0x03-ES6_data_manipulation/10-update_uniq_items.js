export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    return map.forEach((value, index) => {
      if (value === 1) {
        map.set(index, 100);
      }
    });
  }
}

export default function hasValuesFromArray(set, array) {
  return array.every((data) => set.has(data));
}

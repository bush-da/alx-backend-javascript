/**
 * Changes the quantity of unique grocery items to 100.
 */
export default function updateUniqueItems(groceriesMap) {
  // Check if the argument is a Map
  if (!(groceriesMap instanceof Map)) {
    throw new Error("Cannot process");
  }

  // Iterate over the Map entries
  groceriesMap.forEach((value, key) => {
    if (value === 1) {
      groceriesMap.set(key, 100);  // Update quantity to 100 if it's 1
    }
  });

  return groceriesMap;  // Return the updated Map
}

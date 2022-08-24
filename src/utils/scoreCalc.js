import data from "../data/bt_data.json";

function getItemValue(itemType, itemRarity) {
  let itemValue = data.item_values[itemType];
  let itemMulti = data.item_multiplier[itemRarity];
  return itemValue * itemMulti;
}

// expects array of itemsFound
function bestScore(itemArray) {
  const item_slots = data.item_slots;
  let bestLoadout = [];

  for (let slot in item_slots) {
    for (let item in item_slots[slot]) {
      let currItem = item_slots[slot][item];

      for (let i = 0; i < itemArray.length; i++) {
        if (itemArray[i]["itemType"] === currItem) {
          let currRarity = itemArray[i]["itemRarity"];
          let itemScore = getItemValue(currItem, currRarity);

          if (bestLoadout.find((s) => s.itemSlot === slot)) {
            // compare whats in the current bestLoadout for this slot
            let currFound = bestLoadout.find((s) => s.itemSlot === slot);
            if (currFound.itemScore < itemScore) {
              let bestLoadoutFiltered = bestLoadout.filter(
                (s) => s.itemSlot != slot
              );
              bestLoadoutFiltered.push({
                itemSlot: slot,
                itemType: currItem,
                itemRarity: currRarity,
                imageUrl: itemArray[i]["imageUrl"],
                itemScore: itemScore,
              });
              bestLoadout = bestLoadoutFiltered;
            }
          } else {
            bestLoadout.push({
              itemSlot: slot,
              itemType: currItem,
              itemRarity: currRarity,
              imageUrl: itemArray[i]["imageUrl"],
              itemScore: itemScore,
            });
          }
        }
      }
    }
  }

  return bestLoadout;
}

export { getItemValue, bestScore };

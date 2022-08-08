import data from "../data/bt_data.json"

function getItemValue(itemType, itemRarity) {
  let itemValue = data.item_values[itemType];
  let itemMulti = data.item_multiplier[itemRarity];
  return itemValue * itemMulti;
}

export { getItemValue };

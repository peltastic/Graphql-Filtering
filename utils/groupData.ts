function groupData(data: any[]) {
  const groups = data.reduce((groups, character) => {
    const dateNeeded = character.created.split(":")[0];
    const date = dateNeeded.split("T").join(" ");
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(character);
    return groups;
  }, {});
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      character: groups[date],
    };
  });
  return groupArrays;
}

export { groupData };

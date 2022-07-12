interface FilterValues {
  value: string;
  options: string[];
}

const filterValues: FilterValues[] = [
  {
    value: "Gender",
    options: ["All", "Male", "Female"],
  },
  {
    value: "Status",
    options: ["All", "Alive", "Dead"],
  },
  {
    value: "Species",
    options: ["All", "Human", "Alien"],
  },
  {
    value: "Type",
    options: [
      "All",
      "Genetic experiment",
      "Human with antennae",
      "Human with giant head",
      "CHUD",
    ],
  },
];

export { filterValues };

//https://adventjs.dev/es/challenges/2022/13

function getFilesToBackup(lastBackup, changes) {
  return [
    ...new Set(
      changes
        .filter((element) => element[1] > lastBackup)
        .map((element) => element[0])
        .sort((a, b) => a - b)
    ),
  ];
}

const lastBackup = 1546300800;
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000],
];

console.log(getFilesToBackup(lastBackup, changes));


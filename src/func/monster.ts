import { monsterObject } from "../types";

//utöka så alla egenskaper för monstret skrivs ut

export const prettyPrintMonster = (m: monsterObject) => {
	console.log(`Monster: ${m.name}, Ålder: ${m.age}, Tentakler: ${m.tentacles}, Ögon: ${m.eyes}, ${m.hasWings ? "Har" : "Har inte"} vingar`);
};

export const averageMonsterAge = (m: monsterObject[]): number => {
	let sumOfAllAges: number = 0;
	m.forEach ((mon) => {
		sumOfAllAges += mon.age;
	})
	return sumOfAllAges / m.length;
};

export const averageNumberOfTentacles = (m: monsterObject[]): number => {
	let sumOfAllTentacles: number = 0;
	m.forEach ((mon) => {
		sumOfAllTentacles += mon.tentacles;
	})
	return sumOfAllTentacles / m.length;
};

export const numberOfMonstersWithWings = (m: monsterObject[]): number => {
	let wingCount: number = 0;
	m.forEach ((mon) => {
		if (mon.hasWings) {
			wingCount ++;
		}
	})
	return wingCount;
};

export const getAllNoWingedMonster = (m: monsterObject[]): string[] => {
	let noWingedMonster: string[] = [];
	m.forEach((e) => {
		if (!e.hasWings) {
			noWingedMonster.push(e.name);
		}
	});
	return noWingedMonster;
};

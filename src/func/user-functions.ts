import User from "../types";

export const averageAge = (allUsers: User[]): number => {
	let allAges: number = 0;
	allUsers.forEach((u) => {
		allAges += u.age;
	});
	return allAges / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers: User[]): number => {
	let AllHobbies: number = 0;
	allUsers.forEach((u) => {
		AllHobbies += u.hobby.length;
	});
	return AllHobbies / allUsers.length;
};

export const highestNumberOfHobbies = (allUsers: User[]): User => {
	let highest: User = allUsers[0];
	allUsers.forEach((u) => {
		if (u.hobby.length > highest.hobby.length) {
			highest = u;
		}
	})
	return highest;
};

export const oldestUser = (allUsers: User[]): User => {
	let oldest: User = allUsers[0];
	allUsers.forEach((u) => {
		if (u.age > oldest.age) {
			oldest = u;
		}
	})
	return oldest;
};

export const youngestUser = (allUsers: User[]): User => {
	let youngest: User = allUsers[0];
	allUsers.forEach((u) => {
		if (u.age < youngest.age) {
			youngest = u;
		}
	})
	return youngest;
};
import { dogColors, dogObject } from "../types";



export const commonColor = (d: dogColors[]): string => {
    let mostCommonColor: string = "";
    let colorCount: number = 0;
    d.forEach ((c) => {
        if (c.numberOfDogs > colorCount) {
            mostCommonColor = c.color;
            colorCount = c.numberOfDogs;
        }
    })
    return mostCommonColor;
};


export const colorsAndNumbers = (d: dogObject[]): dogColors[] => {
    let dogColorArray: dogColors[] = [];
    d.forEach((dog) => {
        let unique: boolean = true;
        for (let i = 0; i < dogColorArray.length; i++) {
            if (dog.color === dogColorArray[i].color) {
                unique = false;
                dogColorArray[i].numberOfDogs ++;
            }
        }
        if (unique) {
        dogColorArray.push({color: dog.color, numberOfDogs: 1});
        }
    })
    return dogColorArray;
};
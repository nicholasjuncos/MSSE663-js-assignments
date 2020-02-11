import { expect } from 'chai';
import 'mocha';
import {originalNumbers,
    copiedArray,
    originalContenders,
    combinedArray,
    originalPersons,
    combinedObjects,
    originalUpdates,
    modifiedArrays,
    update,
    data
} from "./spread";

describe('test for spread.spec.ts', () => {
    it('should output copied numbers array', () => {
        expect(copiedArray).to.eql(originalNumbers);
    });
    it('should output combined contenders array', () => {
        expect(combinedArray.length).to.eql(originalContenders);
    });
    it('should output combined persons object-list', () => {
        expect(combinedObjects).to.eql(originalPersons);
    });
    it('should output modified updates array', () => {
        expect(modifiedArrays(update, ...data)).to.eql(originalUpdates);
    });
});

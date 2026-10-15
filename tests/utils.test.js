
import { convertCurrency } from "../src/utils.js";

describe("convertCurrency", () => {
    const rates = {
        USD: 1,
        KES: 130,
        EUR: 0.9,
        GBP: 0.75
    };

    test("converts USD to KES", () => {
        expect(convertCurrency(10, "USD", "KES", rates))
            .toBe(1300);
    });

    test("converts KES to USD", () => {
        expect(convertCurrency(1300, "KES", "USD", rates))
            .toBe(10);
    });

    test("converts USD to EUR", () => {
        expect(convertCurrency(10, "USD", "EUR", rates))
            .toBe(9);
    });

    test("converts USD to GBP", () => {
        expect(convertCurrency(10, "USD", "GBP", rates))
            .toBe(7.5);
    });

    test("returns the same amount for the same currency", () => {
        expect(convertCurrency(100, "KES", "KES", rates))
            .toBe(100);
    });
});

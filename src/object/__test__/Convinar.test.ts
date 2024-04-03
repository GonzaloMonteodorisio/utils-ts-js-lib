import { describe, expect, it, test } from "vitest";
import { Convinar } from "../equalityBetwenn";


describe("Convinar",()=>{
    it("Convinar({},{}) return {}",()=>{
        const result = Convinar({},{})
        expect(result).toStrictEqual({})
    } )
    test('should sum every single number by the given accesor', () => {
        const dataObj = [
          { value: 2 },
          { value: 3 }
        ]
        // @ts-expect-error we want to test the undefined case
        const actual = Convinar(dataObj, {})
        expect(actual).toBe(false)
      })
})
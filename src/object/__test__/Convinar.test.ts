import { describe, expect, it, test } from "vitest";
import { Combine } from "../equalityBetwenn";


describe("Convinar",()=>{
    // it("Convinar({},{}) return {}",()=>{
    //     const result = Combine({},{})
    //     expect(result).toBe([])
    // } )
    test('should sum every single number by the given accesor', () => {
      const dataObj = [
        { price: 2 , title:"zapatos"},
        { price: 3,title:"medias" }
      ]
        // @ts-expect-error we want to test the undefined case
        const actual = Combine(dataObj,dataObj)
        expect(actual).toStrictEqual( [
          { price: 2 , title:"zapatos"},
          { price: 3,title:"medias" },
          { price: 2 , title:"zapatos"},
          { price: 3,title:"medias" }
        ])
      })
      it('equalityBetwenn(10,2) retunr false', () => {
        // @ts-expect-error we want to test the undefined case
        const result = Combine(2,{})
        expect(result).toStrictEqual([])
      })
      it('equalityBetwenn(10,2) retunr false', () => {
        // @ts-expect-error we want to test the undefined case
        const result = Combine({},2)
        expect(result).toStrictEqual([])
      })
})
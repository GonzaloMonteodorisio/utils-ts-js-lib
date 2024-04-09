import { describe, expect, it } from 'vitest'
import { takeOut } from '../arry'


describe("takeOut",()=>{
    it("takeOut([`papa`,`camote`],papa) Returns [`papa`] ",()=>{
      const result = takeOut([`papa`,`camote`],"papa") 
      expect(result).toStrictEqual([`camote`]) 
    })
    it("takeOut([1, 23],1) Returns [] ",()=>{
        // @ts-expect-error we want to test the undefined case
        const result = takeOut([1, 23],1) 
        expect(result).toStrictEqual([]) 
      })
      it("takeOut([1, 23],1) Returns [] ",()=>{
        // @ts-expect-error we want to test the undefined case
        const result = takeOut(1,[1, 23]) 
        expect(result).toStrictEqual([]) 
      })
      it("takeOut([1, 23],1) Returns [] ",()=>{
        // @ts-expect-error we want to test the undefined case
        const result = takeOut([1, 23],[1, 23]) 
        expect(result).toStrictEqual([]) 
      })
      it("takeOut([1, 23],1) Returns [] ",()=>{
        // @ts-expect-error we want to test the undefined case
        const result = takeOut([1, 23],5) 
        expect(result).toStrictEqual([]) 
      })
      it("takeOut([1, 23],1) Returns [] ",()=>{
        // @ts-expect-error we want to test the undefined case
        const result = takeOut([1, 23],23) 
        expect(result).toStrictEqual([]) 
      })
      it("takeOut([`papa`,`camote`],papa) Returns [`papa`] ",()=>{
         // @ts-expect-error we want to test the undefined case
        const result = takeOut([`papa`,`camote`],1) 
        expect(result).toStrictEqual([]) 
      })
      it("takeOut([`papa`,`camote`],papa) Returns [`papa`] ",()=>{
        
       const result = takeOut([`papa`,`camote`],"calabaza") 
       expect(result).toStrictEqual([`papa`,`camote`]) 
     })
})
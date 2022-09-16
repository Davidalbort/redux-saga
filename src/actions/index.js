
export  const showCharacter = (content) =>{
    return{
      
      type: '@character/show',
      payload:content
        
      
    }
  }

export const initCharacter = (notes) => {
    return {
        type: '@character/init',
        payload:notes
    }
}

export const validInteger = (value: number) => {
    const isValidInteger = typeof value === 'number'

    if(!isValidInteger) {
        throw new Error("Not a valid integer")
    }
     return isValidInteger
  }
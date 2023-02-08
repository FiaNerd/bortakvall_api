
export const validInteger = (value: number) => {
    const isValidInteger = typeof value === 'number'

    if(!isValidInteger) {
        throw new Error("Not a valid integer")
    }
     return isValidInteger
  }


  export const validImages = (image: { thumbnail: string, large: string}) => {

    if (!image.thumbnail && !image.large) {
        throw new Error("Both 'thumbnail' and 'large' images are required");
      } 
    else if (!image.thumbnail) {
        throw new Error("'thumbnail' images are required");
    }
    else if (!image.large) {
        throw new Error("'large' images are required");
    }
    if (!image.thumbnail.match(/^\/storage\/products\/thumbnails\/\d+-\d+x\d+\.png$/)) {
        throw new Error("Invalid format for 'thumbnail' image URL");
      }
      if (!image.large.match(/^\/storage\/products\/\d+\.png$/)) {
        throw new Error("Invalid format for 'large' image URL");
      }

    return true
  }
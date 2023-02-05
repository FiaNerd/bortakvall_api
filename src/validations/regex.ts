
export const regexLetters = (value: string) => {
    const regex = /^[a-zA-ZäöåÄÖÅ\-]+$/u;
    if (!regex.test(value)) {
      throw new Error("Only letters and hyphens allowed");
    }
    return true;
  };

  export const regexPhone = (value: string) => {
    const regexPhone = /^[0-9\+\(\)\-\s]+$/
    const regexPhoneContains = /^((\+46)|0)\d{7,14}$/

    if (value && (typeof value !== 'string' || !regexPhone.test(value))) {
        throw new Error("Phone number must be a string containing only numbers");
        }
   if (value && (value.length < 7 || value.length > 14 || !regexPhoneContains.test(value))) {
        throw new Error("Phone number must be between 7 and 14 characters and must be a valid Swedish phone number format");
    }
    return true;
  }


  export const regexPostalCode = (value: string) => {
    const regexPostcode = /^[0-9]{3}\s?[0-9]{2}$/ 

    const isValidPostalCode = value.replace(/\s+/g, '').match(regexPostcode)
  
        if(!isValidPostalCode ) {
            throw new Error("Postcode must contain only numbers")
        }
        return isValidPostalCode
  }

  export const positveInteger = (value: number) => {
    const isValidInteger = typeof value === 'number'

    if(!isValidInteger) {
        throw new Error("Not a valid integer")
    }
     return isValidInteger
  }
export class Validator {
    static isValidRollNumber(rollNumber: string): boolean {
      // Roll number validation rules:
      // 1. Must be 9 characters long
      // 2. Must start with either a branch code or a digit
      // 3. Must contain valid year (20-23)
      // 4. Must contain valid program code
      const branchCodes = ['cs', 'ee', 'me', 'ch', 'mc', 'ep', 'ce', 'is', 'ma', 'hs', 'bb', 'ph', 'cy', 'xm', 'xc'];
      const programCodes = ['bt', 'mt', 'ms'];
      
      if (rollNumber.length !== 9) return false;
      
      // Check if starts with digit
      if (/^\d/.test(rollNumber)) {
        return /^2\d{8}$/.test(rollNumber);
      }
      
      // Check branch code + year + program + number format
      const branch = rollNumber.substring(0, 2).toLowerCase();
      const year = rollNumber.substring(2, 4);
      const program = rollNumber.substring(4, 6).toLowerCase();
      const number = rollNumber.substring(6);
      
      return (
        branchCodes.includes(branch) &&
        /^(20|21|22|23)$/.test(year) &&
        programCodes.includes(program) &&
        /^\d{3}$/.test(number)
      );
    }
  
    static isValidName(name: string): boolean {
      return (
        typeof name === 'string' &&
        name.length >= 2 &&
        name.length <= 50 &&
        /^[a-zA-Z\s]+$/.test(name)
      );
    }
  
    static isValidHandle(handle: string): boolean {
      return (
        typeof handle === 'string' &&
        handle.length >= 3 &&
        handle.length <= 30 &&
        /^[a-zA-Z0-9_-]+$/.test(handle)
      );
    }
  
    static validateSubmission(data: {
      fullName: string;
      rollNumber: string;
      userHandle: string;
    }): { isValid: boolean; errors: string[] } {
      const errors: string[] = [];
  
      if (!this.isValidName(data.fullName)) {
        errors.push('Invalid name format. Name should be 2-50 characters long and contain only letters and spaces.');
      }
  
      if (!this.isValidRollNumber(data.rollNumber)) {
        errors.push('Invalid roll number format.');
      }
  
      if (!this.isValidHandle(data.userHandle)) {
        errors.push('Invalid handle format. Handle should be 3-30 characters long and contain only letters, numbers, underscores, and hyphens.');
      }
  
      return {
        isValid: errors.length === 0,
        errors
      };
    }
  }

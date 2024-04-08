const REGEX = {};

export const validMail = (data: string, required = false) => {
    if (required && data.trim().length <= 0) {
        return false;
    }
};

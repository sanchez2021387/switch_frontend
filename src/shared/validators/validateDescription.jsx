export const validateDescription = (description) => {
    return description.length >= 10 && description.length <= 200;
}

export const descriptionValidateMessage = 'La descripcion deve de tener entre 10 y 200 caracteres';


import { body } from 'express-validator';

export const postCreateValidation = [
	body('title', "Введите заголовок").isLength({ min: 3 }).isString(),
	body('text', "Введите текст").isLength({ min: 10 }).isString(),
	body('tags', "Неверный формат тегов (укажите массив)").optional().isArray(),
	body('imageUrl', "Неверная ссылка").optional().isString(),
]
import { celebrate, Joi, Segments } from 'celebrate'

const paginationValidator = celebrate({
  [Segments.QUERY]: Joi.object({
    page: Joi
      .number()
      .integer()
      .positive()
  })
})

export default paginationValidator

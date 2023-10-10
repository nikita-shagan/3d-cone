import FormComponent from "../FormComponent/FormComponent";
import {useFormWithValidation} from "../../hooks/useFromWithValidation";
import Input from "../Input/Input";
import {validateHeight, validateRadius, validateNumberOfSegments} from "../../utils/validation/inputValidations";


function ConeForm({ handleConeFormSubmit, coneParams }) {
  const { height = '', radius = '', numberOfSegments = '' } = coneParams;

  const form = useFormWithValidation({
    initValues: {
      height: height,
      radius: radius,
      numberOfSegments: numberOfSegments
    },
    validators: {
      height: validateHeight,
      radius: validateRadius,
      numberOfSegments: validateNumberOfSegments
    }
  })

  const handleSubmit = (evt) => {
    evt.preventDefault();
    form.setIsLoading(true)
    handleConeFormSubmit(form.values)
      .catch((err) => {
        setTimeout(() => form.setSubmitResultMessage('Error'), 500)
        console.log(err)
      })
      .finally(() => {
        setTimeout(() => form.setIsLoading(false), 500)
      })
  }

  return (
    <FormComponent
      title='Введите параметры конуса'
      submitText='Отрисовать фигуру'
      isValid={form.isValid}
      onSubmit={handleSubmit}
      submitError={form.submitResultMessage}
      isLoading={form.isLoading}
    >
      <Input
        label='Высота'
        name='height'
        type='number'
        error={form.getError('height')}
        value={form.values.height}
        onChange={form.handleChange}
      />
      <Input
        label='Радиус'
        name='radius'
        type='number'
        error={form.getError('radius')}
        value={form.values.radius}
        onChange={form.handleChange}
      />
      <Input
        label='Колличество сегментов'
        name='numberOfSegments'
        type='number'
        error={form.getError('numberOfSegments')}
        value={form.values.numberOfSegments}
        onChange={form.handleChange}
      />
    </FormComponent>
  );
}

export default ConeForm;

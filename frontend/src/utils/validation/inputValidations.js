module.exports.validateHeight = (value) => {
  if (!value) {
    return 'Обязательное поле';
  }
  if (Number(value) > 30 || Number(value) < 1) {
    return 'Высота должна быть от 1 до 30'
  }
  return '';
}

module.exports.validateRadius = (value) => {
  if (!value) {
    return 'Обязательное поле';
  }
  if (Number(value) > 30 || Number(value) < 1) {
    return 'Радиус должен быть от 1 до 30'
  }
  return '';
}

module.exports.validateNumberOfSegments = (value) => {
  if (!value) {
    return 'Обязательное поле';
  }
  if (Number(value) > 500 || Number(value) < 1) {
    return 'Число сегментов должен быть от 1 до 500'
  }
  return '';
}

const DEFAULT_ERROR_CLASS = 'has-error';

export function hasErrorFactory(touched, errors, errorClass = DEFAULT_ERROR_CLASS) {
  return function (name) {
    const hasError = errors[name];
    const isTouched = touched[name];

    if (isTouched && hasError) {
      return errorClass;
    }

    return null;
  };
}

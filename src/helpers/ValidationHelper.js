export default class ValidationHelper {
  /* eslint-disable no-useless-escape */
  static emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  static REQUIRED_INPUT_ERR_MSG = 'This field is required';

  static SHORT_PASS_ERR_MSG = 'Password is too short!';

  static LONG_PASS_ERR_MSG = 'Password is too long!';

  static INVALID_EMAIL_ERR_MSG = "Email your've entered is invalid";

  static check(value, type) {
    switch (type) {
      case 'username': {
        if (!value) {
          return this.REQUIRED_INPUT_ERR_MSG;
        }
        return '';
      }
      case 'password': {
        if (!value) return this.REQUIRED_INPUT_ERR_MSG;
        if (value.length < 6) return this.SHORT_PASS_ERR_MSG;
        if (value.length > 16) return this.LONG_PASS_ERR_MSG;

        return '';
      }

      case 'email': {
        if (!value) return this.REQUIRED_INPUT_ERR_MSG;
        if (!this.emailRegex.test(value)) return this.INVALID_EMAIL_ERR_MSG;

        return '';
      }

      default:
        return '';
    }
  }

  static validate = (type, value) => {
    return this.check(value.toString().trim(), type);
  };
}

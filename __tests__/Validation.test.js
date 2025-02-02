import Game from '../src/RacingController';
import Validation from '../src/utils/Validation';
import { ERROR_MESSAGE } from '../src/constants';

describe('사용자 입력 유효성 검사', () => {
  test.each([[['pobi', 'jun', '']], [['pobipobi', 'jun', 'cron']]])(
    '자동차 이름 길이 유효성 검사',
    (nameArray) => {
      expect(() => Validation.carNamesArrayValidate(nameArray)).toThrow(
        ERROR_MESSAGE.CAR_NAME_INPUT_ERROR.CAR_NAME_IS_NOT_IN_RANGE
      );
    }
  );
  test.each([-1, -999999, 0.232, 21.5])(
    '시도 횟수 숫자 유효성 검사',
    (nameArray) => {
      expect(() => Validation.tryCountValidate(nameArray)).toThrow(
        ERROR_MESSAGE.TRY_COUNT_INPUT_ERROR.TRY_COUNT_IS_LESS_THAN_ZERO
      );
    }
  );
});

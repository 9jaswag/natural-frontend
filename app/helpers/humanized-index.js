import { helper } from '@ember/component/helper';

export function humanizedIndex(index) {
  return (parseInt(index) + 1).toString();
}

export default helper(humanizedIndex);

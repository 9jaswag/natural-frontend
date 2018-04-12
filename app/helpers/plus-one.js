// Copyright (C) Manuel Arno Korfmann - All Rights Reserved
// Unauthorized copying of this file, or parts of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Manuel Arno Korfmann <manu@korfmann.info>, April 2018

import { helper } from '@ember/component/helper';

export function humanizedIndex(index) {
  return (parseInt(index) + 1);
}

export default helper(humanizedIndex);

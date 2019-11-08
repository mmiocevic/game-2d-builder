import { GLOBAL_PREFIX } from './globalVariables';

export const formatClassName = (className: string) => `${GLOBAL_PREFIX}-${className}`;
import { ComputedRef } from 'vue';

export type UnknownObject = { [key: string]: any };

export type Fns = {
  [key: string]: Array<Function>;
};

export type Option = {
  auto?: boolean; // run test on any entry changes
  lazy?: boolean; // run test only on already dirty entry
  firstError?: boolean; // only return first error at each entry
  touchOnTest?: boolean; // force entry dirty on testing
};

export type Data = UnknownObject;

export type Rule = {
  $test: ((value: any) => boolean) | ((value: any) => Promise<boolean>);
  $message?: string | ((value: any) => string);
  $key: string;
};

export type Rules = {
  [key: string]: Array<Rule> | Rules;
};

export type Dirt = {
  [key: string]: boolean | Dirt;
};

export type FnsMapItem = {
  [key: string]: Array<Function>;
};

export type FnsMap = Array<FnsMapItem>;

export type Error = {
  name: string;
  message?: string | null;
};

export type Entry = {
  $invalid: boolean;
  $errors: Array<Error>;
  $messages: Array<string>;
  $pending: boolean;
  $test: () => void;
  $reset: () => void;
  $touch: () => void;
  $unwatch?: () => void;
};

export type Entries = {
  [key: string]: Entry | Entries;
};

export type Args = [Data, Rules, Dirt, UnknownObject, Entries];

export type ArgsObject = {
  data: Data;
  rules: Rules;
  dirt: Dirt;
  rawData: UnknownObject;
  entries: Entries;
};

export type Result = {
  $invalid: boolean;
  $errors: Array<Error>;
  $messages: Array<string>;
  $test: () => void;
  $reset: () => void;
  $touch: () => void;
  $dirty: boolean;

  [key: string]: any;
};

export type UseValidate = {
  result: ComputedRef<Result>;
  test: () => void;
  reset: () => void;
};

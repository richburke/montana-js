export const first = (a: unknown[]) => a[0];

export const log = (v: unknown) => {
  console.log(v);
  return v;
};

export const swap = (a: number, b: number, arr: string[]) => {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
};

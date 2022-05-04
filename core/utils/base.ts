export function swap(a: number, b: number, arr: string[]) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

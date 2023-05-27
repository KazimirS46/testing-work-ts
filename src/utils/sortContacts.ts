export function sortContacts(arr: Array<any>, prop: string, direction: string) {
  let param: Boolean;
  if (direction === 'increasing') {
    param = false;
  } else if (direction === 'decreasing') {
    param = true;
  }
  let result = arr.sort((a, b) =>
    !param ? (a[prop] < b[prop] ? -1 : 1) : a[prop] > b[prop] ? -1 : 1
  );
  return result;
}

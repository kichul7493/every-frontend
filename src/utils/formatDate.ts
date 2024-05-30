export default function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth()는 0부터 시작하므로 1을 더함
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

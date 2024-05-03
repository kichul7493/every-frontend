export default function generateSlug(title: string) {
  // 소문자로 변환하고, 양 끝 공백을 제거합니다.
  let slug = title.toLowerCase().trim();

  // 특수문자 및 공백을 대시로 변환합니다.
  slug = slug.replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");

  // 여러 개의 대시를 하나로 줄입니다.
  slug = slug.replace(/-+/g, "-");

  // 앞뒤에 남은 대시를 제거합니다.
  slug = slug.replace(/^-+|-+$/g, "");

  return slug;
}
